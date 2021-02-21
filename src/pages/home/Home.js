import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Home.css";

import Img1 from "../../images/Testimonial.svg";
import Img2 from "../../images/black-beautiful-ladies.svg";
import Img3 from "../../images/shoppingbag-card.svg";
import Slant from "../../images/slant-line.svg";
import Joseph from "../../images/Joseph.svg";
import Adetola from "../../images/Adetola.svg";
import Emmanuel from "../../images/Emmanuel.svg";
import Chisom from "../../images/Chisom.svg";
import Oluwa from "../../images/Oluwa.svg";
import Chidi from "../../images/Chidi.svg";
import Temi from "../../images/Temi.svg";
import Promise from "../../images/Promise.svg";
import Feyi from "../../images/Feyi.svg";
import Karen from "../../images/Karen.svg";
import Oluchi from "../../images/Oluchi.svg";
import Amos from "../../images/Amos.svg";
import Subscribe from "../../images/subscribeImg.svg";
import Member from "../../images/member.svg";

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
                        <div className="col-md-4 text-left">
                            <img src={Joseph} alt="portion4-img" className="portion4-img" />
                            <h3>Joseph Ike</h3>
                            <p className="portion4-area">In Ikeja &nbsp; <span>CUSTOMER</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Adetola} alt="portion4-img" className="portion4-img" />
                            <h3>Adetola Fashina</h3>
                            <p className="portion4-area">Ibadan &nbsp; <span>CUSTOMER</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Emmanuel} alt="portion4-img" className="portion4-img" />
                            <h3>Emmanuel Fayemi</h3>
                            <p className="portion4-area">In Akoka &nbsp; <span>CUSTOMER</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 text-left">
                            <img src={Chisom} alt="portion4-img" className="portion4-img" />
                            <h3>Chisom Obilor</h3>
                            <p className="portion4-area">In Magodo &nbsp; <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Oluwa} alt="portion4-img" className="portion4-img" />
                            <h3>Adunoluwa Adeyemi</h3>
                            <p className="portion4-area">Iwo Road &nbsp; <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Chidi} alt="portion4-img" className="portion4-img" />
                            <h3>Chidi Okeke</h3>
                            <p className="portion4-area">In Somolu &nbsp; <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                    </div>
                </div>
            </section>
            <section className="portion5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 text-left">
                            <h1>Josiah's Experience</h1>
                            <span>VENDOR</span>
                            <p className="paragraph">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                            <p className="story">Share your own story!</p>
                            <img src={Slant} alt="slant-line" className="slant-line" />
                        </div>
                        <div className="">
                            <div className="portion5-bg">
                                <img src={Img3} alt="portion5-img" className="portion5-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portion6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-left">
                            <img src={Temi} alt="portion6-img" className="portion6-img" />
                            <h3>Temi Obadofin</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Promise} alt="portion6-img" className="portion6-img" />
                            <h3>Promise Ejiofor</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Feyi} alt="portion6-img" className="portion6-img" />
                            <h3>Feyisola Arinola</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 text-left">
                            <img src={Karen} alt="portion6-img" className="portion6-img" />
                            <h3>Karen Ibeh</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Oluchi} alt="portion6-img" className="portion6-img" />
                            <h3>Oluchi Uzo</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={Amos} alt="portion6-img" className="portion6-img" />
                            <h3>Amos Okafor</h3>
                            <p className="portion6-area"> <span className="span">VENDOR</span></p>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>  
                        </div>
                    </div>
                </div>
            </section>
            <section className="portion7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={Subscribe} alt="portion7-img" className="portion7-img" />
                        </div>
                        <div className="col-md-7 text-left">
                            <h3>
                                Be a  member of our community
                                &nbsp;  <img src={Member} alt="member-img" className="member-img" />
                            </h3>
                            <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                            <div className="input-group">
                                <input type="email" name="email" id="email" className="" placeholder="Enter your email" />
                                <span className="input-group-btn">
                                    <button className="btn" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home;