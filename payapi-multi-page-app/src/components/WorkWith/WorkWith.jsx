import React from 'react'
import teslaIcon from '../../assets/shared/desktop/tesla.svg'
import microsoftIcon from '../../assets/shared/desktop/microsoft.svg'
import hewlettIcon from '../../assets/shared/desktop/hewlett-packard.svg'
import oracleIcon from '../../assets/shared/desktop/oracle.svg'
import googleIcon from '../../assets/shared/desktop/google.svg'
import nvidiaIcon from '../../assets/shared/desktop/nvidia.svg'
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg'

export const WorkWith = () => {
    return (
        <section className="section-workwith">
            <div className="workwith-container">
                <div className="wrapper about-container">
                    <div className="about-partners">
                        <h2>Who we work with</h2>
                        <p>Today, millions of people around the world have successfully connected
                            their accounts to apps they love using our API. We provide developers
                            with the tools they need to create easy and accessible experiences
                            for their users.</p>
                        <button>About Us</button>
                    </div>
                    <div className="partners-icons">
                        <img src={teslaIcon} alt="tesla-logo"/>
                        <img src={microsoftIcon} alt="microsoft-logo"/>
                        <img src={hewlettIcon} alt="hewlett-logo"/>
                        <img src={oracleIcon} alt="oracle-logo"/>
                        <img src={googleIcon} alt="google-logo"/>
                        <img src={nvidiaIcon} alt="nvidia-logo"/>
                    </div>
                </div>
            </div>
            <img className="circle-pattern-workwith" src={circlePattern} alt=""/>
        </section>
    )
}
