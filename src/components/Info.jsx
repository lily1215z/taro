import React, {useContext} from 'react';
import {AppContext} from "../App";

export const Info = ({ img, title, description }) => {

    const {setBasket} = useContext(AppContext);

    return (
        <div className='empty-box'>
            <img className='basket-empty' src={img} width='300' alt="basket clear"/>
            <h2 className='title-empty'>{title}</h2>
            <p className='text'>{description}</p>
            <button onClick={() => setBasket(false)} className='btn-empty'>
                <img src='/img/arrow-back.png' alt='arrow return back'/>
            </button>
        </div>
    );
};


