import React, { useEffect } from "react";
import "./Share.css";

const Share = () => {
    useEffect(() => {
        document.title = "Vasiti | Share your amazing story";
    }, []);
    return (
        <div>
            <section className="portion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Share your amazing story</h3>
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="help">How May We Help You <span>*</span></label>
                                    <textarea name="message" cols="20" rows="5" className="upLabel"  placeholder="Tell us anything" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" />
                                </div>
                                <div className="col-md-7">
                                    <p>What did you interact with Vasiti as?</p>
                                </div>
                                <div className="col-md-5">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" for="inlineRadio1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2">2</label>
                                    </div>
                                </div>
                                <button type="submit" className="">Share your story!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Share;