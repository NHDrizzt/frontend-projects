import React from 'react';
import { Header } from '../../MainPage/Header/Header';
import { LogoMobile } from '../../MainPage/Header/LogoMobile';
import { LogoDesktop } from '../../MainPage/Header/LogoDesktop';
import ReadyToStart from "../../MainPage/AboutOurAdvantages/ReadyToStart";
import circle from '../../../assets/shared/desktop/bg-pattern-circle.svg';
import ButtonRequestAccess from '../components/ButtonRequestAccess';
import Plan from '../components/Plan';
import Footer from "../../MainPage/Footer/Footer";

const Pricing = (props) => {
    return (
        <section className="princing-section">
            <LogoMobile />
            <img className="circle-pricing" src={circle} alt=""/>
            <h3 className='title-text'>Pricing</h3>
    
            <div className="plan-sec">
                <Plan name="Free Plan" description="Build and test using our core set of products with up to 100 API requests" price="$0.00" planLimit="3" />
                <Plan name="Basic Plan" description="Launch your project with unlimited requests and no contractual minimums" price="$249.00" planLimit="5" />
                <Plan name="Premium Plan" description="Get tailored solutions, volume pricing, and dedicated support for your team" price="$499.00" planLimit="7" />
            </div>
            <ReadyToStart />
            <Footer />
        </section>
    );
};

export default Pricing;
