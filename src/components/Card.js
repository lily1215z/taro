import React from 'react';

export const Card = () => {
    return (
            <article className="card">
                <img className="like-card" width="30" src="/img/like.png" alt="like"/>
                <div className="card-box-img">
                    <img className="card-img" width="180" height="300" src="/img/card06.jpg" alt="card"/>
                </div>
                <p className="title-card">Flower tarot</p>
                <div className="price-box d-flex justify-between">
                    <div>
                        <div className="price">Price:</div>
                        <div>20 y.e.</div>
                    </div>
                    <img className="plus" src="/img/plus.png"/>
                </div>
            </article>

    );
};

