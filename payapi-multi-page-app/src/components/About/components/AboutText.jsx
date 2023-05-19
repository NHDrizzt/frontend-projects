import React, {useEffect, useState} from 'react';
import coworkersMobile from '../../../assets/about/mobile/image-team-members.jpg';
import coworkersTablet from '../../../assets/about/tablet/image-team-members.jpg';
import coworkersDesktop from '../../../assets/about/desktop/image-team-members.jpg';
import circle from "../../../assets/shared/desktop/bg-pattern-circle.svg";
const AboutText = () => {
    const texts = [
        {
            title: 'Our Vision',
            description: 'Our main goal is to build beautiful consumer experiences along with developer-friendly\n' +
                '                    infrastructure. The result is an intelligent tool that gives everyone the ability to create\n' +
                '                    amazing products that solve big problems. We are deeply focused on democratizing financial\n' +
                '                    services through technology.',
        },
        {
            title: 'Our Business',
            description: 'At the core of our platform is the technical infrastructure APIs that connect consumers.\n' +
                '                    Our innovative product provides key insights for businesses and individuals, as well as\n' +
                '                    robust reporting for traditional financial institutions and developers.',
        },
        {
            title: 'The Culture',
            description: "We strongly believe there's always an opportunity to learn from each other outside of\n" +
                "                day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.\n" +
                "                We always value cross-team collaboration and diversity of thought, no matter the job title.",
        },
        {
            title: 'The People',
            description: "We're all passionate about building a more efficient and inclusive financial infrastructure\n" +
                "                together. At PayAPI, we have diverse backgrounds and skills.",
        },
        
    ];
    const getImageSource = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1440) {
            return coworkersDesktop;
        } else if (screenWidth >= 768) {
            return coworkersTablet;
        } else {
            return coworkersMobile;
        }
    };
    
    const [imageSource, setImageSource] = useState(getImageSource());
    
    useEffect(() => {
        const handleResize = () => {
            setImageSource(getImageSource());
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    
    return (
        <div className="">
            {
                texts.map((text, index) => (
                    <div key={index}>
                        <div className="wrap-about-text about-texts">
                            <h2>{text.title}</h2>
                            <p>{text.description}</p>
                        </div>
                        {
                            text.title === "Our Business" ? (
                                <>
                                    <img src={getImageSource()} alt="coworkers working together" />
                                    <img className="circle-coworkers" src={circle} alt=""/>
                                    <div className="status-container">
                                        <div className="status-count status-one">
                                            <p>Team Members</p>
                                            <span>300+</span>
                                        </div>
                                        <div className="status-count status-two">
                                            <p>Offices in the US</p>
                                            <span>3</span>
                                        </div>
                                        <div className="status-count status-one">
                                            <p>Transactions analyzed</p>
                                            <span>10M+</span>
                                        </div>
                                    </div>
                                </>
                            ) : null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default AboutText;
