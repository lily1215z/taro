import './App.css';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([]);
    const [itemsBasket, setItemsBasket] = useState([]);
    const [basket, setBasket] = useState(false);

    useEffect(()=> {
        fetch('https://62c95de9d9ead251e8bab5e5.mockapi.io/taroItems').then(res => {
            return res.json();
        })
            .then(json => {
                setItems(json);
            })
    }, [])

    const addItemInBasket = (obj) => {
        // setItemsBasket([...itemsBasket, obj])   //или след образом кот явл лучше
        setItemsBasket(prev => [...prev, obj]);

    }

    return (
        <div className="wrapper clear">
            {basket && <Drawer itemsBasket={itemsBasket} onClickClose={setBasket}/> }

            <Header onClickBasket={setBasket} />

            <section className="section-cards">
                <h1 className="title">All cards</h1>
                <p className="subtitle">truth is always at the crossroads</p>
                <div className="search-box">
                    <label>
                        <input className="search" placeholder="Search..."/>
                    </label>
                </div>
                <div className="d-flex flex-wrap justify-around">
                    {items.map(i => (
                        <Card
                            key={i.id}
                            title={i.title}
                            price={i.price}
                            url={i.url}
                            addItemInBasket={addItemInBasket}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
