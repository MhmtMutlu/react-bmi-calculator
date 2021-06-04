import React, {useState, useEffect} from "react"
import "./Calculate.css"
import { Link } from "react-router-dom";

function Calculate() {
    localStorage.setItem('weight',0);
    localStorage.setItem('height',0);

    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);

    useEffect(() => {
        localStorage.setItem('weight',weight);
        localStorage.setItem('height',height);
    },[weight,height]);

    return (
        <React.Fragment>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="mb-4 d-flex justify-content-center">
                            <h3 className="title">Body Mass Index Calculator</h3>
                        </div>
                        <div className="mb-3">
                            <input type="number" onChange={(e) => setHeight(e.target.value)} className="form-control rounded-pill" id="height" placeholder="Height (cm)" />
                        </div>
                        <div className="mb-5">
                            <input type="number" onChange={(e) => setWeight(e.target.value)} className="form-control rounded-pill" id="weight" placeholder="Weight (kg)" />
                        </div>
                        <div className="d-grid gap-2">
                            <Link to="/Result" className="btn btn-primary rounded-pill">Calculate</Link>
                            <Link to="/Info" className="btn btn-info rounded-pill">What is BMI?</Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Calculate