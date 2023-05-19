import React from 'react';

const ContactContent = () => {
    return (
        <div className="wrapper contact-content">
            <h3>Submit a help request and we’ll get in touch shortly.</h3>
    
            <div className="form">
                <label htmlFor="">
                    <span>Name</span>
                    <input className="normal-input" type="text"/>
                </label>
                <label  htmlFor="">
                    <span>Email Address</span>
                    <input className="normal-input" type="email"/>
                </label>
                <label htmlFor="">
                    <span>Company Name</span>
                    <input className="normal-input" type="text"/>
                </label>
                <label htmlFor="">
                    <span>Title</span>
                    <input className="normal-input" type="text"/>
                </label>
                <label htmlFor="">
                    <span>Message</span>
                    <textarea className="normal-input" name="" id="" cols="30" rows="2" maxLength="324"></textarea>
                </label>
                <input className="checkbox" id="checkbox" type="checkbox"/>
                <label className="label-checkbox" htmlFor="checkbox">
                    Stay up-to-date with company announcements and updates to our API
                </label>
    
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ContactContent;
