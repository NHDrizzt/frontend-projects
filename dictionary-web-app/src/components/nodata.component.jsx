import React from 'react';
import '../css/NoData.css'

const NoDataComponent = ({data}) => {
    
    return (
        <div className='no-data-container'>
            <div className="nodata">
                <h3>{data.title}</h3>
                <p>{data.message} {data.resolution}</p>
            </div>
        </div>
    );
};

export default NoDataComponent;
