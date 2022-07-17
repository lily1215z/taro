import React, {useContext} from 'react';
import {AppContext} from "../App";

//сщздали кастомный хук. вернуть могла не только обьект но и массив. Далее просто достаю от сюда в нужной компоненте и не дублирую код
export const useCart = () => {
            const { itemsBasket, setItemsBasket } = useContext(AppContext);
            const totalPrice = itemsBasket.reduce((sum, i) => sum + i.price, 0);

            return { itemsBasket, setItemsBasket, totalPrice };
};
