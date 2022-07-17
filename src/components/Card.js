import React, {useContext} from 'react';
import {useState} from "react";
import ContentLoader from "react-content-loader";
import {AppContext} from "../App";

export const Card = ({
                         id,
                         title,
                         price,
                         url,
                         addItemInBasket,
                         onAddToFavorites,
                         favorite = false,
                         loading = false
                     }) => {

    // const [plus, setPlus] = useState(added);   //если не испол контекст то меняю вид(состояние) кнопки добавления через стейт

    //но т.к. использую контекст то не прокидываю пропсы а сразу достаю ф-ю isItemAdded из AppContext
    const { isItemAdded } = useContext(AppContext);
    // console.log(title, isItemAdded(id));   так могу посм какой т-р true/false

    const [favor, setFavor] = useState(favorite);  //меняю состояние сердечка (то что нравится)

    const onClickPlus = () => {
        addItemInBasket({id, title, price, url})
        // setPlus(!plus)
    }
    const onClickFavor = () => {
        onAddToFavorites({id, title, price, url})
        setFavor(!favor)
    }

    return (
        <article className="card">

            { loading ?
                    <ContentLoader
                        speed={2}
                        width={200}
                        height={275}
                        viewBox="0 0 200 275"
                        backgroundColor="#ebc1fd"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="5" ry="5" width="200" height="160"/>
                        <rect x="0" y="170" rx="5" ry="5" width="200" height="25"/>
                        <rect x="0" y="204" rx="5" ry="5" width="130" height="25"/>
                        <rect x="0" y="251" rx="5" ry="5" width="75" height="20"/>
                        <rect x="160" y="235" rx="15" ry="15" width="40" height="40"/>
                    </ContentLoader>
                    :
                    <>
                     { favor ?
                                   <img onClick={onClickFavor} className="like-card" width="30" src="/img/like-active.png" alt="like"/>
                                   :
                                   <img onClick={onClickFavor} className="like-card" width="30" src="/img/like.png" alt="like"/>
                           }
                           <div className="card-box-img">
                               <img className="card-img" width="180" height="300" src={url} alt="card"/>
                           </div>
                           <p className="title-card">{title}</p>
                           <div className="price-box d-flex justify-between">
                           <div>
                           <div className="price">Price:</div>
                           <div>{price} y.e.</div>
                           </div>
                       { isItemAdded(id) ?
                           <img onClick={onClickPlus} className="plus" src="/img/plus-active.png" alt="plus-active"/> :
                           <img onClick={onClickPlus} className="plus" src="/img/plus.png" alt="plus"/>
                       }
                           </div>
                           </>
                       }
                    </article>
                );
            };

