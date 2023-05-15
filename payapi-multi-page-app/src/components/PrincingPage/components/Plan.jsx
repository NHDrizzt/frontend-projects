import React from 'react';
import check from '../../../assets/shared/desktop/icon-check.svg'

const Plan = (props) => {
    const { name, description, price, planLimit } = props;
    const features = ['Transactions', 'Auth', 'Identity', 'Investments', 'Assets', 'Liabilities', 'Income']
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <span>{price}</span>
            <div>
                {features.map((feature, index) => (
                    <div key={index}>
                        {
                            index < planLimit ? <img src={check} alt=""/> : null
                        }
                        <p>{feature}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plan;
