import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Contact.css";
import emailjs from 'emailjs-com';
import { AccesEmailJs } from "../../../Services/EmailJs";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { WhatsAppButton } from "../../buttons/Button";



const FormContact = () => {

    const [from_name, setName] = useState('');
    const [message, setmMessage] = useState('');
    const [from_email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const userID = AccesEmailJs.userID;
    const serviceID = AccesEmailJs.serviceID;
    const templateID = AccesEmailJs.templateID;
    const to_name = AccesEmailJs.emailID;

    const MySwal = withReactContent(Swal)

    const [error, setError] = useState({
        name: {
            error: false,
            message: 'deben ser almenos tres caracteres'
        }
    });

    //Validación caracteres mínimos en el input
    function validateInputLegthOnblur(nombre) {
        if (nombre.length >= 3) {
            return { name: { error: false, message: '' } }
        } else {
            return { name: { error: true, message: 'Debe ingresar al menos tres caracteres' } }
        }
    }

    //Validación de email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            setIsValid(true);
            setErrorEmail('Correo invalido')
        } else {
            setIsValid(false);
            setErrorEmail("")
        }
    }

    //Lógica de formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        var emailData = {
            to_name: to_name,
            from_name: from_name,
            from_email: from_email,
            message: message
        };
        try {
            let response = await emailjs.send(serviceID, templateID, emailData, userID);
            if (response && response?.text === "OK") {
                MySwal.fire({
                    title: <strong>Envio exitoso!</strong>,
                    html: <i>¡Muchas gracias por tenerme en cuenta, me pondré en contacto con usted lo antes posible!</i>,
                    icon: 'success'
                })
                setName('');
                setEmail('');
                setmMessage('');
            } else {
                MySwal.fire({
                    title: <strong>Upss!</strong>,
                    html: <i>¡Error al enviar el correo electrónico, intentalo nuevamente!</i>,
                    icon: 'info'
                })
            }
        } catch (error) {
            MySwal.fire({
                title: <strong>Upss!</strong>,
                html: <i>{error}</i>,
                icon: 'info'
            })
        }
    };

    return (
        <section className="contact">
            <div className="contact__icon_whatsapp">
                <WhatsAppButton className="icon__whatsapp"/>
            </div>
            <div className="container_form">
                <h1 className="title">Contacto</h1>
                <p className="description">¿Quieres contactarme?
                    Complete el siguiente formulario  y me pondré en contacto con usted lo antes posible.
                </p>
                <form
                    className="contact__form"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        fullWidth
                        required
                        id="from_name"
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setName(e.target.value) }}
                        value={from_name}
                        error={error.name.error}
                        helperText={error.name.error ? error.name.message : ""}
                        onBlur={(e) => { setError(validateInputLegthOnblur(e.target.value)) }}

                    />
                    <TextField
                        fullWidth
                        required
                        id="from_email"
                        label="Email de contacto"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setEmail(e.target.value) }}
                        onBlur={(e) => { validateEmail(e.target.value) }}
                        value={from_email}
                        error={isValid}
                        helperText={errorEmail}
                    />

                    <TextField
                        fullWidth
                        required
                        id="message"
                        label="Mensaje"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setmMessage(e.target.value) }}
                        value={message}
                    />
                    <div className="contact_button">
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>

        </section >
    )
}

export default FormContact;