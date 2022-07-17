import React from 'react';
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

export const Header = ({onClickBasket}) => {
    const {totalPrice} = useCart();  //мой кастомный хук. Считает общую сумму покупки

    return (
        <header className="header d-flex justify-between">
            <Link to="/">
                <div className="d-flex ">
                    {/*<img className="logo" width={170} src='/img/logo.png'/>*/}
                    <img className="logo" width={320} src='/img/logo1.png' alt="logo"/>
                    <div className="box">
                        <h2 className="title">
                            <span className="letter">T</span>arot
                            <span className="letter">M</span>agic
                            <span className="letter"> E</span>very
                            <span className="letter">W</span>here</h2>
                        <p>The cards may give advice, but our fate is in our own hands.</p>
                    </div>
                </div>
            </Link>

            <ul className="user-block d-flex justify-between">
                <li onClick={() => onClickBasket(true)}><img className="basket" src="/img/basket.png" alt="basket"/>
                </li>
                <li><span className='basket-total-price'>{totalPrice} y.e.</span></li>

                <Link to="/favor">
                    <li><img className="like" src="/img/like-white.png" alt="like"/></li>
                </Link>

                <Link to="/orders">
                    <li><img className="user" src="/img/user.png" alt="user"/></li>
                </Link>
            </ul>
        </header>
    );
};
