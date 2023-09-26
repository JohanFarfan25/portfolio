import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import imgContact from "../../../assets/img/contacto.png";
import "./Contact.css";


const FormContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [messageContact, setmMessageContact] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [error, setError] = useState({
        name: {
            error: false,
            message: 'deben ser almenos tres caracteres'
        }
    });

    function validateInputLegthOnblur(nombre) {
        if (nombre.length >= 3) {
            return { name: { error: false, message: '' } }
        } else {
            return { name: { error: true, message: 'Debe ingresar al menos tres caracteres' } }
        }
    }

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

    return (
        <section className="contact">
            <img className="contact_image" src={imgContact}></img>
            <div className="container_form">
                <h1 className="title">Contacto</h1>
                <p className="description">¿Quieres contactarme?
                    Complete el siguiente formulario  y me pondré en contacto con usted lo antes posible.
                </p>
                <form
                    className="contact__form"
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    <TextField
                        fullWidth
                        required
                        id="name"
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        error={error.name.error}
                        helperText={error.name.error ? error.name.message : ""}
                        onBlur={(e) => { setError(validateInputLegthOnblur(e.target.value)) }}

                    />

                    <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setEmail(e.target.value) }}
                        onBlur={(e) => { validateEmail(e.target.value) }}
                        value={email}
                        error={isValid}
                        helperText={errorEmail}
                    />

                    <TextField
                        fullWidth
                        required
                        id="subject"
                        label="Asunto"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setSubject(e.target.value) }}
                        value={subject}
                    />

                    <TextField
                        fullWidth
                        id="message"
                        label="Mensaje"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => { setmMessageContact(e.target.value) }}
                        value={messageContact}
                    />
                    <div className="contact_button">
                        <Button
                            variant="contained"
                            type="submit"
                        >
                        Registrarse
                        </Button>
                    </div>
                </form>
            </div>

        </section >
    )
}

export default FormContact;