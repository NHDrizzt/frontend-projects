
import React from "react";
import phoneImg from "../../assets/home/desktop/illustration-phone-mockup.svg"

export const ScheduleDemo = () => {
    return (
        <section>
            <div className=" container-schedule phone-img">
                <div className="test">
                    <img src={phoneImg} alt=""/>
                </div>
                <div className="description-site">
                    <h1>Start building with our APIs for absolutely free.</h1>
                    <input type="text" placeholder="Enter email address"/>
                    <button>Schedule a Demo</button>
                    <p>Have any questions? <span className="span-contact-us">Contact Us</span></p>
                </div>
            </div>
        </section>
    )
}
