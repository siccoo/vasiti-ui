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
            </section>
        </div>
    )
}

export default Home;