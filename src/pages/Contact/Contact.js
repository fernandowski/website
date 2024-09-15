import './Contact.css'
import React from 'react';
import ContentCard from "../../components/ContentCard/ContentCard";

function Contact() {
    return (
        <ContentCard>
            <section className='contact-me-container'>
                <div className='form-container'>
                    <div className='form-header'>
                        <h3>Let's Get in Touch</h3>
                    </div>
                    <form className='form'>
                        <div className='form-control-group'>
                            <label htmlFor='email'> Email: </label>
                            <input type='email' id='email'/>
                        </div>
                        <div className='form-control-group'>
                            <label htmlFor={'text-area'}>Message:</label>
                            <textarea id='text-area'/>
                        </div>
                        <div className='submit-button-container'>
                            <button className='submit-button' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </ContentCard>
    )
}

export default Contact;
