import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import "./Home.css";

import Img1 from "../../images/Testimonial.svg";

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
                        <div className="col-md-12">
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
                </div>
            </section>
            <section className="portion2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Amazing <br/>Experiences from Our Wonderful Customers</h1>
                            <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                        </div>
                        <div className="">
                            <div className="portion2-bg">
                                <img src={Img1} alt="portion2-img" className="portion2-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portion3">
                <div className="container">

                </div>
            </section>
        </div>
    )
}

export default Home;