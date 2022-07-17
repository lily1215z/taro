import React, {useEffect, useState} from 'react';
import {Card} from "../components/Card";
import axios from "axios";

export const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/orders');
            console.log(data)
        })();
    }, [])

    return (
        <section className="section-cards">
            <h1 className="title bookmark">My orders</h1>

            <div className="bookmark d-flex flex-wrap justify-around">

                <div className="d-flex flex-wrap justify-around">
                    {
                        [].map(i => (
                            <Card />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

