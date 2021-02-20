import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import "./Home.css";

import Img1 from "../../images/Testimonial.svg";
import Img2 from "../../images/black-beautiful-ladies.svg";
import Slant from "../../images/slant-line.svg";
import Joseph from "../../images/Joseph.svg";
import Adetola from "../../images/Adetola.svg";
import Emmanuel from "../../images/Emmanuel.svg";

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
                    <div className="row">
                        <div className="">
                            <div className="portion3-bg">
                                <img src={Img2} alt="portion3-img" className="portion3-img" />
                            </div>
                        </div>
                        <div className="col-md-5 text-left">
                            <h1>Tolu & Joy’s Experience</h1>
                            <span>CUSTOMER</span>
                            <p className="paragraph">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                            <p className="story">Share your own story!</p>
                            <img src={Slant} alt="slant-line" className="slant-line" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="portion4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Joseph} alt="profile-img" className="profile-img" />  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;