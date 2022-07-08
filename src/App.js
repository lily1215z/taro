import './App.css';

function App() {
    return (
        <div className="wrapper clear">
            <header className="header d-flex justify-between">
                <div className="d-flex ">
                    {/*<img className="logo" width={170} src='/img/logo.png'/>*/}
                    <img className="logo" width={320} src='/img/logo1.png'/>
                    <div className="box">
                        <h2 className="title">TarotMagic Everywhere</h2>
                        <p>The cards may give advice, but our fate is in our own hands.</p>
                    </div>
                </div>
                <ul className="user-block d-flex justify-between">
                    <li><img className="basket" src="/img/basket.png" /></li>
                    <li><span>800 y.e.</span></li>
                    <li><img className="user" src="/img/user.png" /></li>
                </ul>
            </header>
            <section className="section-cards">
                <h1 className="title">All cards</h1>
                <p className="subtitle">truth is always at the crossroads</p>
                <div className="d-flex flex-wrap justify-around">
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card06.jpg"/>
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

                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card02.jpg"/>
                        </div>
                        <p className="title-card">Flower tarothjh hkjhkl jk;l hkji</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img className="plus" src="/img/plus.png"/>
                        </div>

                    </article>
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card05.jpg"/>
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

                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card01.jpg"/>
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
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card03.jpg"/>
                        </div>
                        <p className="title-card">Flower tarot</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img src="/img/plus.png"/>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card04.jpg"/>
                        </div>
                        <p className="title-card">Flower tarot</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img src="/img/plus.png"/>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card07.jpg"/>
                        </div>
                        <p className="title-card">Flower tarot</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img src="/img/plus.png"/>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card08.jpg"/>
                        </div>
                        <p className="title-card">Flower tarot</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img src="/img/plus.png"/>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card-box-img">
                            <img className="card-img" width="180" height="300" src="/img/card10.jpg"/>
                        </div>
                        <p className="title-card">Flower tarot</p>
                        <div className="price-box d-flex justify-between">
                            <div>
                                <div className="price">Price:</div>
                                <div>20 y.e.</div>
                            </div>
                            <img src="/img/plus.png"/>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default App;
