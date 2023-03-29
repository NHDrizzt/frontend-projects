import React from 'react';
import '../css/Description.css'

const DescriptionComponent = ({data}) => {
    
    return (
        <>
            <div className="line"></div>
            <div className='description-section'>
                {
                    data.meanings.map((item, index) => (
                        <div key={index}>
                            <h3>{item.partOfSpeech}</h3>
                            <div className="meaning-description">
                                <h4>Meaning</h4>
                                <ul>
                                    {
                                        item.definitions.map((ele, idx) => (
                                            <React.Fragment key={idx}>
                                                <li>{ele.definition}</li>
                                                {
                                                    ele.example ? (<p>"{ele.example}"</p>) : (<></>)
                                                }
                                            </React.Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="synonymus">
                                {item.synonyms ? (
                                    <>
                                        <p>Synonyms</p>
                                        <span>{item.synonyms.join(', ')}</span>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default DescriptionComponent;
