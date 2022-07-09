import React from 'react';
import { useState } from "react";

export const Card = ({title, price, url, addItemInBasket}) => {
    const [plus, setPlus] = useState(true);

    const onClickPlus = () => {
        addItemInBasket({title, price, url})
        setPlus(!plus)
    }

    return (
        <article className="card">
            <img className="like-card" width="30" src="/img/like.png" alt="like"/>
            <div className="card-box-img">
                <img className="card-img" width="180" height="300" src={url} alt="card"/>
            </div>
            <p className="title-card">{title}</p>
            <div className="price-box d-flex justify-between">
                <div>
                    <div className="price">Price:</div>
                    <div>{price} y.e.</div>
                </div>
                {
                    plus ?
                        <img onClick={onClickPlus} className="plus" src="/img/plus.png" alt="plus"/> :
                        <img onClick={onClickPlus} className="plus" src="/img/plus-active.png" alt="plus-active"/>
                }
            </div>
        </article>


    );
};

