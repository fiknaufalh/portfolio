import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import {
    Container,
    Wrapper,
    Title,
    Desc,
    ContactForm,
    ContactTitle,
    ContactInput,
    ContactInputMessage,
    ContactButton,
} from './ContactStyles';

const Contact = () => {
    // Hooks
    const [open, setOpen] = React.useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    'service_gmail_main',
                    'template_wdelkjr',
                    form.current,
                    '0ZeIB-g-al6xLaFlG',
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setOpen(true);
                        if (form.current) form.current.reset();
                    },
                    (error) => {
                        console.log(error.text);
                    },
                );
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                    Feel free to reach out to me for any questions or
                    opportunities!
                </Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" />
                    <ContactInput placeholder="Your Name" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage
                        placeholder="Message"
                        rows={4}
                        name="message"
                    />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    // severity="success"
                />
            </Wrapper>
        </Container>
    );
};

export default Contact;
