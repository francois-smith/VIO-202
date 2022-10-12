/* eslint-disable no-useless-escape */

import React, {useState} from 'react';
import { ContactSection, ContactHeader, ContactForm } from './contactStyles';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
    const [nameStatus, setName] = useState(true);
    const [emailStatus, setEmail] = useState(true);
    const [phoneStatus, setPhone] = useState(true);
    const [messageStatus, setMessage] = useState(true);
    const CHARACTER_LIMIT = 300;
    const [messageContent, setContent] = React.useState("");

    function validateName(name: string): boolean{
        let namePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        if(!namePattern.test(name) || name.length < 3){
            return false;
        }
        else{
            return true;
        }
    }

    function validateEmail(email: string): boolean{
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailPattern.test(email)){
            return false;
        }
        else{
            return true;
        }
    }

    function validateNumber(number: string): boolean{
        let numberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!numberPattern.test(number)){
            return false;
        }
        else{
            return true;
        }
    }

    function validateMessage(message: string): boolean{
        if(message.length < 20){
            return false;
        }
        else{
            return true;
        }
    }

    function submit(){
        let name: string =  (document.getElementById("name-field") as HTMLInputElement).value;
        let email: string = (document.getElementById("email-field") as HTMLInputElement).value;
        let number: string = (document.getElementById("phone-field") as HTMLInputElement).value;
        let message: string = (document.getElementById("message-field") as HTMLInputElement).value;

        setName(validateName(name));
        setEmail(validateEmail(email));
        setPhone(validateNumber(number));
        setMessage(validateMessage(message));

        if(validateName(name) && validateEmail(email) && validateNumber(number) && validateMessage(message)){
            const request = new XMLHttpRequest();
            request.open("POST", "https://francois-smith.com/form-validate.php");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send("name="+name+"&email="+email+"&phone="+number+"&message="+message+"");
            showSuccess();
            clearFields();
            return true;
        }
        else{
            return false;
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        switch(event.target.id){
            case "name-field":{
                setName(validateName(event.target.value));
                break;
            }
            case "email-field":{
                setEmail(validateEmail(event.target.value));
                break;
            }
            case "phone-field":{
                setPhone(validateNumber(event.target.value));
                break;
            }
            case "message-field":{
                setContent(event.target.value);
                setMessage(validateMessage(event.target.value));
                break;
            }
        }
    }

    const clearFields = () => {
        (document.getElementById("name-field") as HTMLInputElement).value = "";
        (document.getElementById("email-field") as HTMLInputElement).value = "";
        (document.getElementById("phone-field") as HTMLInputElement).value = "";
        (document.getElementById("message-field") as HTMLInputElement).value = "";
    };
    
    const showSuccess = () => {
		toast.success("Message Sent", {
			position: "top-center",
			autoClose: 3500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	}

    return (
        <ContactSection id='ContactSection'> 
            <h2 className='Section_Heading'>CONTACT</h2>
            <ContactHeader>
                <p id="GetInTouch"><span className='Text-Gradient'>GET IN TOUCH</span></p>
                <p>Interested in working with me?</p>
                <div className="contact-divider">
                    <img src="/Media/SVG/divider.svg" alt=""/>
                </div>
            </ContactHeader>
            <ContactForm>
                <form onSubmit={submit}>
                    <TextField fullWidth helperText={!nameStatus ? "Name Is Invalid" : ""} onChange={handleChange} className="input-field" error={!nameStatus} id="name-field" label="Name" variant="outlined" />
                    <div className='email-phone'>
                        <TextField  fullWidth helperText={!emailStatus ? "Email Is Invalid" : ""} onChange={handleChange} className="input-field email" error={!emailStatus} id="email-field" label="Email" variant="outlined" />
                        <TextField fullWidth helperText={!phoneStatus ? "Phone Number Is Invalid" : ""} onChange={handleChange} className="input-field phone" error={!phoneStatus} id="phone-field" label="Phone" variant="outlined" />
                    </div>
                    <TextField inputProps={{maxlength: CHARACTER_LIMIT}} helperText={!messageStatus ? "Provided Message Is Too Short" : `${messageContent.length}/${CHARACTER_LIMIT}`} multiline={true} rows={"4"} fullWidth  onChange={handleChange} className="input-field" error={!messageStatus} id="message-field" label="Message" variant="outlined" />
                    <div className='submit-container'>
                        <div onClick={submit} className="contact-button">
                            <div>
                                <span className="Text-Gradient">Submit Message</span>
                            </div>
                        </div>
                    </div>
                </form>
            </ContactForm>
            <ToastContainer
				position="top-center"
				autoClose={3500}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
                theme={"dark"}
			/>
        </ContactSection>
    );
};

export default Contact;