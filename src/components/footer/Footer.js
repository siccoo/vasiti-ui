import React from "react";
// import { Link } from "react-router-dom;";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <section className="footer">
                    <div class="container">
                    <div class="row text-left">
                        <div class="col-2-5">
                            <div class="footer-col middle" id="about">
                                <h4>Company</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://academy.salesruby.com/about-us/">About Us</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://academy.salesruby.com/courses">Leadership Training</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://rubyhiring.com">Recruitment</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://academy.salesruby.com">Academy Training</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div class="col-2-5">
                            <div class="footer-col middle">
                                <h4>Our Events</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://events.salesruby.com">Sales Leadership Conference</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://fc.salesruby.com">Founders Conference</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://rubyhiring.com">Ruby Hiring</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://therubyhub.com">The Ruby Hub</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div class="col-2-5">
                            <div class="footer-col middle">
                                <h4>Platform</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <div class="media-body"> 
                                            <a class="white" href="#">Leads Management</a>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="#">Contact Management</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="#">Deals Management</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="#">Sales Funnel</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                        <br />
                        <div class="col-2-5">
                            <div class="footer-col middle">
                                <h4>Resources</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://therubyhub.com">Blog</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://therubyhub.com">E-book</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> <a class="white" href="https://therubyhub.com">The Ruby Hub</a></div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"> 
                                            <a class="white" href="https://therubyhub.com">News</a></div>
                                    </li>
                                </ul>
                            </div> 
                        </div> 
                        <div class="col-2-5">
                            <div class="footer-col last">
                                <h4>Contact</h4>
                                <ul class="list-unstyled li-space-lg p-small">
                                    <li class="media">
                                        <div class="media-body">14a Amara-Olu Street, Ikeja, <br/>Lagos, Nigeria</div>
                                    </li>
                                    <li class="media">
                                        <div class="media-body"><a class="white" href="mailto:sales@salesruby.com">sales@salesruby.com</a>
                                        </div>
                                    </li>
                                    <li class="media">  
                                        <div class="media-body">
                                            <a class="white" href="tel:+2349070047688">+2349070047688</a>
                                        </div>
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

export default Footer;