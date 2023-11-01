import React, {ElementRef, useRef} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";

import {S} from "./Contact_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_portfolio', 'template_3rjdvsf', form.current, 'mL150oS24htmbAJ1i')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert("gotovo")
    };
    return (
        <S.Contact id={"contact"}>
            <Container border="1px">
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required={true} placeholder="name" name={"user_name"}/>
                    <S.Field required={true} placeholder="email" name={"user_email"}/>
                    <S.Field required={true} placeholder="subject" name={"subject"}/>
                    <S.Field required={true} as="textarea" placeholder="message" name={"message"}/>
                    <StyledButton type="submit">Send message</StyledButton>
                </S.Form>
            </Container>
        </S.Contact>
    );
};


