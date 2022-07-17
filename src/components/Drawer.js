import React, {useState} from 'react';
import {Info} from "./Info";
import axios from "axios";
import {useCart} from "../hooks/useCart";

export const Drawer = ({onClickClose, itemsBasket = [], delItemInBasket }) => {
    const [isOrderComplete, setIsOrderComplete] = useState(false);  //это инфа кот появится после того как чел сделал заказ
    const [orderId, setOrderId] = useState(null);                   //д/того чтоб получить с бєка номер заказа
    const [isLoading, seIsLoading] = useState(false);               //дизаблить кнопку когда идет загрузка

    const { setItemsBasket, totalPrice } = useCart();

    const onClickOrder = async () => {
     try {
         seIsLoading(true)                                             //перед отправкой запроса пусть будет true
         //при клике на кнопку заказать отправляем на бэк то что лежало в корзине itemsBasket
         //но когда я просто передаю itemsBasket после запятой то в мокапи формируется обьект потому что ему нужно где-то прикрутить айди заказа поэтому мы передаем как обьект. Тогда будет четкий номер заказа и обьект с массивом т-в
         const {data} = await axios.post('https://62c95de9d9ead251e8bab5e5.mockapi.io/orders', {
             items: itemsBasket
         });
        //await axios.put('https://62c95de9d9ead251e8bab5e5.mockapi.io/orders', [])  //в мокАпи очищаем корзину но в мокапи нет такой ф-и и поэирму как образец
         setOrderId(data.id);     //вношу в стейт номер заказа
         setIsOrderComplete(true)             //заменяю стр на инфу о том что заказ отправлен
         setItemsBasket([]);                        //очищаю корзину
     } catch (error) {
         alert('Sorry :( We can not create order');
     }
        seIsLoading(false);       //не важно выполнится или нет - останови загрузку
    }

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="basket-title">Basket</h2>
                <div onClick={() => onClickClose(false)} className="basket-close"><img src="/img/close.png"/></div>

                {itemsBasket.length === 0 ?
                    <Info
                        img={isOrderComplete ? 'img/delivery-end.png' : 'img/basket-empty.png'}
                        title={isOrderComplete ? 'Order is processed' : 'Basket is empty'}
                        description={ isOrderComplete ? `Your order №${orderId} will be handed over to the courier service` : 'Add some items to your basket and made order'}
                    />
                    :
                    <>
                        <ul className="flex">
                            {
                                itemsBasket.map(i => (
                                    <li key={i.id} className="basket-item d-flex justify-between align-center">
                                        <div>
                                            <img className="basket-img" width="80" src={i.url} alt="basket"/>
                                        </div>
                                        <div className="basket-info">
                                            <p className="basket-text">{i.title}</p>
                                            <span className="basket-price">{i.price} y.e.</span>
                                        </div>
                                        <img onClick={() => delItemInBasket(i)} src="/img/remove.png"
                                             alt="remove button"/>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="basket-sum">
                            <li className="basket-total d-flex">Total:
                                <div></div>
                                <span>{totalPrice} y.e.</span>
                            </li>
                            <li className="basket-total d-flex">Tax 5%:
                                <div></div>
                                <span>{totalPrice * 5 / 100} y.e.</span>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className="basket-btn">checkout</button>
                    </>
                }
            </div>
        </div>
    );
};

