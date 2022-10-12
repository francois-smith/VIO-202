<?php 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    sendResponse($email);
    sendRequest($name, $email, $phone, $message);

    function sendRequest($name, $email, $phone, $message){
        $return = '
            <!DOCTYPE html>
            <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
                <!--<![endif]-->
                <style>
                    * {
                        box-sizing: border-box;
                    }
            
                    body {
                        margin: 0;
                        padding: 0;
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
            
                    p {
                        line-height: inherit
                    }
            
                    @media (max-width:720px) {
                        .icons-inner {
                            text-align: center;
                        }
            
                        .icons-inner td {
                            margin: 0 auto;
                        }
            
                        .row-content {
                            width: 100% !important;
                        }
            
                        .column .border {
                            display: none;
                        }
            
                        table {
                            table-layout: fixed !important;
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
                    }
                </style>
            </head>
            
            <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
                    <tbody>
                        <tr>
                            <td>
                                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171717;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #171717; width: 700px;" width="700">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td style="padding-top:5px;width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" style="line-height:10px"><img src="https://francois-smith.com/Media/Images/Logo-Main.png" style="display: block; height: auto; border: 0; width: 140px; max-width: 100%;" width="140"></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0d0d0d;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #0d0d0d; width: 700px;" width="700">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 40px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
                                                                            <h2 style="margin: 0; color: #f0f0f0; direction: ltr; font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif; font-size: 55px; font-weight: 400; letter-spacing: 2px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">'.$name.' Project</span></strong></h2>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td style="text-align:center;width:100%;">
                                                                            <h1 style="margin: 0; color: #f0f0f0; direction: ltr; font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">MESSAGE</span></h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                    <tr>
                                                                        <td style="padding-bottom:10px;padding-left:50px;padding-right:50px;padding-top:10px;">
                                                                            <div style="font-family: sans-serif">
                                                                                <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #797979; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                    <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.5px;"><span style="color:#ffffff;font-size:17px;"><span style="font-size:16px;">'.$message.'</span><br></span></p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td style="text-align:center;width:100%;padding-top:30px;">
                                                                            <h1 style="margin: 0; color: #f0f0f0; direction: ltr; font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">PHONE</span></h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                    <tr>
                                                                        <td style="padding-bottom:10px;padding-left:50px;padding-right:50px;padding-top:10px;">
                                                                            <div style="font-family: sans-serif">
                                                                                <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #797979; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                    <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.5px;"><span style="color:#ffffff;font-size:17px;"><span style="font-size:16px;">'.$phone.'</span><br></span></p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- End -->
            </body>
            
            </html>
        ';

        $headers  = "From: ".$email."\n";
        $headers .= "Cc: cc@francois-smith.com\n"; 
        $headers .= "X-Sender: ".$email."\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();
        $headers .= "X-Priority: 1\n"; 
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
        $headers .= "X-MSMail-Priority: Low\r\n";
        $headers .= "X-Priority: 2\r\n"; 

        $subject = 'New Project From '.$name;
        $domain = "contact@francois-smith.com";

        mail($domain, $subject, $return, $headers); 
    }

    function sendResponse($email){        
        $message = '
            <!DOCTYPE html>
            <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                <head>
                    <title></title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                    <!--[if !mso]><!-->
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
                    <!--<![endif]-->
                    <style>
                        * {
                            box-sizing: border-box;
                        }
                
                        body {
                            margin: 0;
                            padding: 0;
                        }
                
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: inherit !important;
                        }
                
                        #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                        }
                
                        p {
                            line-height: inherit
                        }
                
                        @media (max-width:720px) {
                            .icons-inner {
                                text-align: center;
                            }
                
                            .icons-inner td {
                                margin: 0 auto;
                            }
                
                            .row-content {
                                width: 100% !important;
                            }
                
                            .column .border {
                                display: none;
                            }
                
                            table {
                                table-layout: fixed !important;
                            }
                
                            .stack .column {
                                width: 100%;
                                display: block;
                            }
                        }
                    </style>
                </head>
                
                <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
                        <tbody>
                            <tr>
                                <td>
                                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171717;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171717; color: #000000; width: 700px;" width="700">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td style="width:100%;padding-top:5px;padding-right:0px;padding-left:0px;">
                                                                                <div align="center" style="line-height:10px"><img src="https://francois-smith.com/Media/Images/Logo-Main.png" style="display: block; height: auto; border: 0; width: 140px; max-width: 100%;" width="140"></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171717;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #171717; color: #000000; width: 700px;" width="700">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="heading_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td>
                                                                                <h2 style="margin: 0; color: #f0f0f0; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 45px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Email Received</span></strong></h2>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                        <tr>
                                                                            <td style="padding-bottom:10px;padding-left:50px;padding-right:50px;padding-top:10px;">
                                                                                <div style="font-family: sans-serif">
                                                                                    <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 21px; color: #f0f0f0; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.5px;"><span style="color:#ffffff;font-size:17px;">Thank you for contacting me! I will get back to you as soon as possible.<br></span></p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0d0d0d;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #0d0d0d; width: 700px;" width="700">
                                                        <tbody>
                                                            <tr>
                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                    <table class="social_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td>
                                                                                <table class="social-table" width="72px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                                    <tr>
                                                                                        <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/in/francois-smith-b02609210/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                                                        <td style="padding:0 2px 0 2px;"><a href="https://instagram.com/_francois.smith_" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                        <tr>
                                                                            <td style="padding-bottom:10px;padding-left:50px;padding-right:50px;padding-top:10px;">
                                                                                <div style="font-family: sans-serif">
                                                                                    <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #f0f0f0; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                                        <p style="margin: 0; text-align: center; font-size: 14px; mso-line-height-alt: 21px;"><span style="font-size:14px;">@2022 Francois Smith All Rights Reserved.</span></p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </body>
            </html>
        ';

        $headers  = "From: Francois Smith <noreply@francois-smith.com>\r\n";
        $headers .= "Cc: cc@francois-smith.com\r\n"; 
        $headers .= "X-Sender: noreply@francois-smith.com\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Return-Path: noreply@francois-smith.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/html; charset=iso-8859-1\r\n";
        $headers .= "X-MSMail-Priority: Low\r\n";
        $headers .= "X-Priority: 2\r\n"; 

        $subject = 'Response To Message';
        
        mail($email, $subject, $message, $headers); 
    }
?>