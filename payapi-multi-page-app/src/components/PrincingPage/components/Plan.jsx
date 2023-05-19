import React from 'react';
import check from '../../../assets/shared/desktop/icon-check.svg'
import ButtonRequestAccess from "./ButtonRequestAccess";

const Plan = (props) => {
    const { name, description, price, planLimit } = props;
    const features = ['Transactions', 'Auth', 'Identity', 'Investments', 'Assets', 'Liabilities', 'Income']
    return (
        <section className="plan-section">
            <div className="plan-content">
                <h4 className="plan-name">{name}</h4>
                <p className="plan-description">{description}</p>
                <span>{price}</span>
                <div className="plan-advantages-container">
                    {features.map((feature, index) => (
                        <div key={index} className="plan-advantages">
                            <div className="child1">
                                {
                                    index < planLimit ? <img src={check} alt=""/> : null
                                }
                            </div>
                            <div className={ index >= planLimit ? "child2 non-advantages" : "child2"}>
                                <p>{feature}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ButtonRequestAccess/>
            </div>
        </section>
    );
};

export default Plan;
