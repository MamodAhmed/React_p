import React from 'react';
import {ContactSection, ContactTitle, Span, Form, FormInput,
    InputText, InputEmail, InputExp, TextArea, Inputsubmit} from './style.js';

const Contact = () => {
    return ( 
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <Inputsubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
     );
}
 
export default Contact;