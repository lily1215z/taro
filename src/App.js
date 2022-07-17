import './App.css';
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Favor} from "./pages/Favor";
import {Orders} from "./pages/Orders";

export const AppContext = createContext({})

function App() {
    const [items, setItems] = useState([]);  //стейт д/всех т-в что выводим на стр
    const [itemsBasket, setItemsBasket] = useState([]);  //стецт д/хранения того что положили в корзину
    const [favorites, setFavorites] = useState([]);   // стейт д/хранения любимых т-в
    const [searchValue, setSearchValue] = useState('');  //стейт д/поиска в инпуте
    const [basket, setBasket] = useState(false);  // стейт для закрытия корзины
    const [isLoading, setLoading] = useState(true); //храним сотсояние готовности загрузки
    // const [totalSum, setTotalSum] = useState(0);       //храним  общую сумму корзины

    // console.log(itemsBasket.reduce((sum, i) => sum + i.price, 0));

    useEffect(() => {
        // // fetch('https://62c95de9d9ead251e8bab5e5.mockapi.io/taroItems').then(res => {
        // //     return res.json();
        // // })
        // //     .then(json => {
        // //         setItems(json);
        // //     })
        // //===========   or    ==========
        //
        // axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/taroItems').then(res => {
        //     setItems(res.data)
        // })
        //
        // axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/cart').then(res => {
        //     setItemsBasket(res.data)
        // })
        //
        // axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/favorites').then(res => {
        //     setFavorites(res.data)
        // })

        // ========= но чтоб внутри испол async нужно ее запси в ф-ю и потом вызывть
        async function fetchData() {

            // setLoading(true)
            const basketResponse = await axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/cart');
            const favorResponse = await axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/favorites');
            const itemsResponse = await axios.get('https://62c95de9d9ead251e8bab5e5.mockapi.io/taroItems');

            setLoading(false)

            //здесь обязательная поочередность должна быть
            setItemsBasket(basketResponse.data)
            setFavorites(favorResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData();

    }, [])

    const addItemInBasket = (obj) => {

        //решаю проблему того ч то в корзине дублируются т-ры
        try {
            //если в корзине найдешь хлтя бы 1 такой же айди кот был при клике на кнопку Плюс то удалять т-р
            if (itemsBasket.find(i => Number(i.id) === Number(obj.id))) {
                //удали и с сервера тоже
                axios.delete(`https://62c95de9d9ead251e8bab5e5.mockapi.io/cart/${obj.id}`);

                //т.е. замени стейт: замени его на, если есть хотя бы одно совпадение то исключи его из этого массива
                setItemsBasket(prev => prev.filter(i => Number(i.id) !== Number(obj.id)))
                // setTotalSum(itemsBasket.reduce((sum, i) => sum + i.price, 0))

            } else {
                //если не нашел в корзине то создай этот т-р
                axios.post('https://62c95de9d9ead251e8bab5e5.mockapi.io/cart', obj);

                // setItemsBasket([...itemsBasket, obj])   //или след образом кот явл лучше
                setItemsBasket(prev => [...prev, obj]);  //визуально отображать инфу
            }
        } catch (error) {
            alert('Can not add in favorites')
        }
    }

    const onAddToFavorites = async (obj) => {
        //удаляем при клике из избранных
        try {
            if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
                await axios.delete(`https://62c95de9d9ead251e8bab5e5.mockapi.io/favorites/${obj.id}`);
                setFavorites(prev => prev.filter(i => Number(i.id) !== Number(obj.id)))
                //если пишем эту строку то удаляем визуально и со стр. но обычно достаточно удалить с бека а в браузере оставить
                // setFavorites(prev => prev.filter(i => i.id !== obj.id))  но мы удалили и со стр
            } else {
                //если не писать async/await т.е. обязательно дождить ответа от сервера axios.pos и только потом иди дальше
                //т.к. идет перемешка и в общей куче т=р имеет один id а в избранных он меняется. Чтоб не менялся
                //это тоже самое что и написать с then
                // чтоб передать результат await axios.post без лишних конфигураций и настроек то делаем детсруктуризацию
                //я говорю вытащи из обьекта axios ответ из сервера и он хранится в data
                const {data} = await axios.post('https://62c95de9d9ead251e8bab5e5.mockapi.io/favorites', obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert('Can not add in favorites')
        }
    }

    const delItemInBasket = (obj) => {
        axios.delete(`https://62c95de9d9ead251e8bab5e5.mockapi.io/${obj}`);
        setItemsBasket(itemsBasket.filter(i => i !== obj))
    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.currentTarget.value)
    }

    //буду коньролировать кнопку добавления не через стейта а через контекст
    const isItemAdded = (id) => {
        return itemsBasket.some(i => Number(i.id) === Number(id));
    }

    // в контекст закидываю те данные с кот буду работать
    return (
        <AppContext.Provider
            value={{items, favorites, isItemAdded, onAddToFavorites, setBasket, setItemsBasket, itemsBasket}}>
            <>
                }
                <div className="wrapper clear">
                    <Header onClickBasket={setBasket}/>

                    {basket && <Drawer
                        itemsBasket={itemsBasket}
                        onClickClose={setBasket}
                        delItemInBasket={delItemInBasket}
                    />
                    }

                    <Routes>
                        {/*тут в пропсі передавали 2 єл но потом воспользовалась контекстом*/}
                        <Route path="/favor" element={<Favor />}/>
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/" element={
                            <Home
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                items={items}
                                onChangeSearchInput={onChangeSearchInput}
                                addItemInBasket={addItemInBasket}
                                onAddToFavorites={onAddToFavorites}
                                itemsBasket={itemsBasket}
                                isLoading={isLoading}
                            />}/>
                    </Routes>

                </div>
            </>
        </AppContext.Provider>
    )
        ;
}

export default App;
