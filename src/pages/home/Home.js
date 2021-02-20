import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        document.title = "Vasiti | Customer's satisfaction...";
    }, []);
    return (
        <div>
            <section className="header">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/" >MarketPlace</Link>
                                    </li>
                                    <li>
                                        <Link to="/" ></Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;