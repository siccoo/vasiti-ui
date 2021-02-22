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
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" id="email" placeholder="name@example.com" />
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" placeholder="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="help">How May We Help You <span>*</span></label>
                                    <textarea name="message" cols="20" rows="5" className="upLabel"  placeholder="Tell us anything" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Share;