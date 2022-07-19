import React, {useEffect, useState} from 'react';
import {Card} from "../components/Card";
import axios from "axios";

export const Orders = () => {
    const [orders, setOrders] = useState([]);

    //т.к. эта стр не имеет ничего общего с др эл то мы в ней отдельно пишем useEffect и запрос на заказы
    //решено выводить заказы все вместе, не разделяю по номеру и не группируя. Поэтому их нужно обединить
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/orders');
                //console.log(data.map(i => i.items).flat())  // [Array(1), Array(2)] получила масси массивов и теперь соединила в один через flat чтоб получить массив обектов [{…}, {…}, {…}]
                setOrders(data.reduce((acc, i) => [...acc, ...i.items], []));
            } catch (error) {
                alert('Mistakes request orders')
            }
        })();
    }, [])

    return (
        <section className="section-cards">
            <h1 className="title bookmark">My orders</h1>

            <div className="bookmark d-flex flex-wrap justify-around">
                    {
                        orders.map(i => (
                            <Card
                                key={i.id}
                                {...i}
                            />
                        ))
                    }

            </div>
        </section>
    );
};

