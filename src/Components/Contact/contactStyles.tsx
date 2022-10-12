import styled from "styled-components";

export const ContactSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: auto;
    padding-bottom: 50px;

    .contact-divider{
        padding: 20px 0px 15px;
        display: flex;
        justify-content: center;

        img{
            width: 300px;
        }
    }

    .Toastify__toast {
        background: ${props => props.theme.colors.background1} !important;
        display: flex;
        justify-content: center;
    }

    .Toastify__close-button{
        display: none;
    }

    Toastify__toast-body{
        flex: none;
    }
`;

export const ContactHeader = styled.div`
    text-align: center;
    p {
        font-size: 18px;
    }
    #GetInTouch {
        font-size: 30px;   
        padding-bottom: 10px
    }
    pointer-events: none;
    @media ${props => props.theme.breakpoints.sm}{
        padding-top: 20px;
        p {
            font-size: 15px;
            padding: 0px 40px 10px;
        }
        #GetInTouch {
            font-size: 22px;   
        }
    }
`;

export const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    .email-phone{
        display: flex;
        width: 100%;

        .email{
            margin: 10px 10px 10px 0px;
        }
        .phone{
            margin: 10px 0px 10px 10px;
        }
    }

    .input-field{
        margin: 10px 0px;
    }

    input, textarea{
       color:  ${props => props.theme.colors.text};
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${props => props.theme.colors.primary};
    }

    .MuiInputLabel-root, .MuiFormHelperText-root {
        color:  ${props => props.theme.colors.text};
    }

    .MuiInputLabel-root.Mui-focused{
        color:  ${props => props.theme.colors.primary};
    }

    .MuiOutlinedInput-root{
        fieldset{
            border-color: ${props => props.theme.colors.text};
        }
    }

    .MuiOutlinedInput-root:hover{
        fieldset{
            border-color: ${props => props.theme.colors.text};
        }
    }

    .submit-container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .contact-button {
        cursor: pointer;
        background-image: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        padding: 2px !important;
        border-radius: 5px;
        transition: all 0.2s;

        &:hover{
            filter: opacity(0.4);
        }

        div {
            padding: 8px;
            border-radius: 5px;
            text-align: center;
            background: ${props => props.theme.colors.background2} !important;
        }
    }

    form{
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        max-width: 1000px;
    }

    @media ${props => props.theme.breakpoints.md}{
        .email-phone{
            flex-direction: column;

            .email{
                margin: 10px 0px;
            }
            .phone{
                margin: 10px 0px;
            }
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        .contact-button {
            font-size: 16px;
        }
    }
`;