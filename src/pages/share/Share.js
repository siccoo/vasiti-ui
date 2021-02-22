import React, { useEffect, useState } from "react";
import "./Share.css";

const Share = () => {
    useEffect(() => {
        document.title = "Vasiti | Share your amazing story";
    }, []);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [story, setStory] = useState("");
    const [item, setItem] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault();
        setItem([...item,{fname:fname, lname:lname, story:story}])
        setFname('')
        setLname('')
        setStory('')
      };

    return (
        <div>
            <section className="portion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">Share your amazing story</h3>
                            <form className="text-left" onSumbmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Upload your picture</label>
                                    <input type="image" id="image" placeholder="Choose image" />
                                    {/* <div class="image-input">
	                                    <input type="file" accept="image/*" id="imageInput" />
	                                    <label for="imageInput" class="image-button"> Choose image</label>
	                                    
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label for="first-name">First Name</label>
                                        <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Oluwatioluwalase" />
                                    </div>
                                    <div className="col">
                                        <label for="last-name">Last Name</label>
                                        <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Wellington" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="share">Share your story</label>
                                    <textarea name="story" value={story} onChange={(e) => setStory(e.target.value)} cols="20" rows="5" className="upLabel"  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" />
                                </div>
                                <div className="form-check form-check-inline ">
                                    <label>What did you interact with Vasiti as?</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" for="inlineRadio1">Customer</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2">Vendor</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn">Share your story!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Share;