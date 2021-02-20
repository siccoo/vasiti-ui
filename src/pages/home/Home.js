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
            <section>
                <Navbar />
            </section>
            <section className="portion1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="menu-outer">
                                <div className="rectangle">
                                    <ul id="horizontal-list">
                                        <li>
                                            <Link to="/" >MarketPlace</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Wholesale Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Seller Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Internships</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Events</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;