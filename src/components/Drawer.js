import React from 'react';

export const Drawer = ({onClickClose, itemsBasket=[]}) => {

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="basket-title">Basket</h2>
                <div onClick={()=>onClickClose(false)} className="basket-close"><img src="/img/close.png"/></div>
                <ul className="flex">
                    {
                        itemsBasket.map(i=> (
                            <li key={i.id} className="basket-item d-flex justify-between align-center">
                                <div>
                                    <img className="basket-img" width="80" src={i.url} alt="basket"/>
                                </div>
                                <div className="basket-info">
                                    <p className="basket-text">{i.title}</p>
                                    <span className="basket-price">{i.price} y.e.</span>
                                </div>
                                <img src="/img/remove.png" alt="remove button"/>
                            </li>
                        ))
                    }

                </ul>
                <ul className="basket-sum">
                    <li className="basket-total d-flex">Total:
                        <div></div>
                        <span> 20y.e.</span></li>
                    <li className="basket-total d-flex">Tax 5%:
                        <div></div>
                        <span> 1y.e.</span></li>
                </ul>
                <button className="basket-btn">checkout</button>
            </div>
        </div>
    );
};

