import React from 'react';
import { withRouter } from 'react-router-dom'; //higher level component

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (  //destructure the title prop here 
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})` }}/>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
);

export default withRouter(MenuItem); //here we avoid the 'prop-tunneling' pattern - via. withRouter