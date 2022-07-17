import {Card} from "../components/Card";

export const Home = ({
                         searchValue,
                         items,
                         addItemInBasket,
                         onAddToFavorites,
                         onChangeSearchInput,
                         setSearchValue,
                         isLoading
                     }) => {

    const renderItems = () => {
        return (
            isLoading ? [...Array(10)] :
                items
                    .filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(i => (
                        <Card
                            key={i.id}
                            // title={i.title}
                            // price={i.price}
                            // url={i.url}
                            loading={isLoading}
                            // это запись {...i} вместо title={i.title price={i.price} url={i.url}
                            {...i}
                            addItemInBasket={addItemInBasket}
                            onAddToFavorites={onAddToFavorites}
                        />
                    )))
    }

    return (
        <section className="section-cards">
            <h1 className="title">{searchValue ? `Search by request :  ${searchValue}` : 'All cards'}</h1>
            <p className="subtitle">truth is always at the crossroads</p>
            <div className="search-box">
                <label className='search-label'>
                    <input onChange={onChangeSearchInput} value={searchValue} className="search"
                           placeholder="Search..."/>
                    {searchValue && <img className='search-close' onClick={() => setSearchValue('')}
                                         src="/img/closeInput.png"
                                         alt="clear input"/>}
                </label>
            </div>
            <div className="d-flex flex-wrap justify-around">
                {
                    renderItems()
                }
            </div>
        </section>
    )
}