import React from 'react';
import './AppCard.css';

const AppCard = ({
  link,
  svg: Logo,
  title,
  copy
}) => {
  return (
    <div className="app-card">
      <h3>{ title }</h3>    
      <Logo />
      <h6 style={{ fontSize: '15px' }}>{ copy }</h6>
      <a 
        href={link} 
        className={`dg-btn dg-btn-outline`} 
        style={{ fontFamily: 'PF DinDisplay Pro', backgroundColor: 'transparent', borderColor: 'var(--dg-shade-light)', color: 'var(--dg-shade-light)' }}>Visit Site</a>
    </div> 
  )
}

export default AppCard;
