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
        <section>
            <LogoMobile />
            <img src={circle} alt=""/>
            <h3>Pricing</h3>
            
            <Plan name="Free Plan" description="Build and test using our core set of products with up to 100 API requests" price="$0.00" planLimit="3" />
            
            <ButtonRequestAccess/>
            
            <Plan name="Basic Plan" description="Launch your project with unlimited requests and no contractual minimums" price="$249.00" planLimit="5" />
            
            <ButtonRequestAccess/>
            
            <Plan name="Premium Plan" description="Get tailored solutions, volume pricing, and dedicated support for your team" price="$499.00" planLimit="7" />
            
            <ReadyToStart />
            <Footer />
        </section>
    );
};

export default Pricing;
