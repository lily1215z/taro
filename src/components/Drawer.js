import React from 'react';

export const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="basket-title">Basket</h2>

                <ul className="flex">
                    <li className="basket-item d-flex justify-between align-center">
                        <div>
                            <img className="basket-img" width="80" src="/img/card06.jpg"/>
                        </div>
                        <div className="basket-info">
                            <p className="basket-text">Flower tarot</p>
                            <span className="basket-price">20 y.e.</span>
                        </div>
                        <img src="/img/remove.png" alt="remove button"/>
                    </li>

                    <li className="basket-item d-flex justify-between align-center">
                        <div>
                            <img className="basket-img" width="80" src="/img/card02.jpg"/>
                        </div>
                        <div className="basket-info">
                            <p className="basket-text">jd fhgj dfs nvffdjs jglkjfg jnd jjj f</p>
                            <span className="basket-price">20 y.e.</span>
                        </div>
                        <img src="/img/remove.png"/>
                    </li>
                    <li className="basket-item d-flex justify-between align-center">
                        <div>
                            <img className="basket-img" width="80" src="/img/card03.jpg"/>
                        </div>
                        <div className="basket-info">
                            <p className="basket-text">jd fhgj dfs nvffdjs jglkjfg jnd jjj f</p>
                            <span className="basket-price">20 y.e.</span>
                        </div>
                        <img src="/img/remove.png"/>
                    </li>
                    <li className="basket-item d-flex justify-between align-center">
                        <div>
                            <img className="basket-img" width="80" src="/img/card04.jpg"/>
                        </div>
                        <div className="basket-info">
                            <p className="basket-text">jd fhgj dfs nvffdjs jglkjfg jnd jjj f</p>
                            <span className="basket-price">20 y.e.</span>
                        </div>
                        <img src="/img/remove.png"/>
                    </li>
                    <li className="basket-item d-flex justify-between align-center">
                        <div>
                            <img className="basket-img" width="80" src="/img/card05.jpg"/>
                        </div>
                        <div className="basket-info">
                            <p className="basket-text">jd fhgj dfs nvffdjs jglkjfg jnd jjj f</p>
                            <span className="basket-price">20 y.e.</span>
                        </div>
                        <img src="/img/remove.png"/>
                    </li>
                    {/*<li className="basket-item d-flex justify-between align-center">*/}
                    {/*    <div>*/}
                    {/*        <img className="basket-img" width="80" src="/img/card07.jpg"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="basket-info">*/}
                    {/*        <p className="basket-text">jd fhgj dfs nvffdjs jglkjfg jnd jjj f</p>*/}
                    {/*        <span className="basket-price">20 y.e.</span>*/}
                    {/*    </div>*/}
                    {/*    <img src="/img/remove.png"/>*/}
                    {/*</li>*/}


                </ul>
                <ul className="basket-sum">
                    <li className="d-flex">Total:
                        <div></div>
                        <span> 20y.e.</span></li>
                    <li className="d-flex">Tax 5%:
                        <div></div>
                        <span> 1y.e.</span></li>
                </ul>
                <button className="basket-btn">checkout</button>
            </div>
        </div>
    );
};

