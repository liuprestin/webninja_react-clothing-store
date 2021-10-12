import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (  //destructure the title prop here 
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }} />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
);

export default MenuItem;