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
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
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