import './App.css';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">

            <Drawer/>
            <Header/>

            <section className="section-cards">
                <h1 className="title">All cards</h1>
                <p className="subtitle">truth is always at the crossroads</p>
                <div className="search-box">
                    <label>
                        <input className="search" placeholder="Search..."/>
                    </label>
                </div>
                <div className="d-flex flex-wrap justify-around">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </div>
    );
}

export default App;
