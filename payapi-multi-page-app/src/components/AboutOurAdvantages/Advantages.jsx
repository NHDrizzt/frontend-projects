import React from 'react'
import ReadyToStart from "./ReadyToStart";
import easyToImplementImg from "../../assets/home/desktop/illustration-easy-to-implement.svg"
import simpleUiUxImg from "../../assets/home/desktop/illustration-simple-ui.svg"
import financesIcon from "../../assets/home/desktop/icon-personal-finances.svg"
import bankingCoverageIcon from "../../assets/home/desktop/icon-banking-and-coverage.svg"
import consumerPaymentsIcon from "../../assets/home/desktop/icon-consumer-payments.svg"
import circlePattern from "../../assets/shared/desktop/bg-pattern-circle.svg"
export const Advantages = () => {
    return (
        <section>
            <div className="wrapper advantages-container about-our-app-container">
                <div className="advantages-wrapper easy-to-implement-container">
                    <img src={easyToImplementImg} alt="example of how the app is implemented"/>
                    <div className="easy-to-implement-content">
                        <h3>Easy to implement</h3>
                        <p>Our API comes with just a few lines of code. You’ll be up and running in
                            no time. We built our documentation page to integrate payments functionality
                            with ease.</p>
                    </div>
                </div>
                <div className="advantages-wrapper simpleuiux-container">
                    <img src={simpleUiUxImg} alt="demonstration of the UI UX design of the app"/>
                    <div className="simpleuiux-content">
                        <h3>Simple UI & UX</h3>
                        <p>Our pre-built form is easy to integrate in your app or website’s checkout
                            flow and designed to optimize conversion.</p>
                    </div>
                </div>
                
                <div className="icon-wrapper icon-section-container">
                    <div className="icon-section">
                        <img src={financesIcon} alt="finances icon"/>
                        <h4>Personal Finances</h4>
                        <p>Consolidate financial data from multiple sources and categorize transactions up to
                            2 years of history. Analyze reports to reconcile activities in your account.</p>
                    </div>
                    <div className="icon-section">
                        <img src={bankingCoverageIcon} alt="banking and coverage icon"/>
                        <h4>Banking & Coverage</h4>
                        <p>With our platform, you can speed up account onboarding and support ongoing payments
                            for checking, savings, credit card, and brokerage accounts.</p>
                    </div>
                    <div className="icon-section">
                        <img src={consumerPaymentsIcon} alt="consumer & payments icon"/>
                        <h4>Consumer Payments</h4>
                        <p>It’s easier to set up secure bank payments with us through a flow designed with the
                            user experience in mind. Customers could instantly authenticate their account.</p>
                    </div>
                </div>
                <img className="bg-circle-pattern" src={circlePattern} alt=""/>
                <ReadyToStart />
            </div>
        </section>
    )
}
