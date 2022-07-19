import {Card} from "../components/Card";
import {useContext} from "react";
import {AppContext} from "../App";

export const Favor = () => {
    const {addItemInBasket, favorites, onAddToFavorites} = useContext(AppContext);

    return (
        <section className="section-cards">
            <h1 className="title bookmark">My bookmarks</h1>

            <div className="bookmark d-flex flex-wrap justify-around">
                    {
                        favorites.map(i => (
                            <Card
                                key={i.id}
                                // id={i.id}
                                // title={i.title}
                                // price={i.price}
                                // url={i.url} чтоб всё не передавать по отдельности то пишу {...i}
                                {...i}
                                favorite={true}
                                onAddToFavorites={onAddToFavorites}
                                addItemInBasket={addItemInBasket}
                            />
                        ))
                    }

            </div>
        </section>
    )
}