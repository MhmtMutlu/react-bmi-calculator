import React from "react";
import "./Info.css"
import { Link } from "react-router-dom";

function Info() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card firstCard mb-1">
          <div className="card-body">
            <h5 className="card-title">What is Body Mass Index?</h5>
            <p className="card-text">
              Body mass index (BMI) is a person’s weight in kilograms divided by
              the square of height in meters. BMI is an inexpensive and easy
              screening method for weight category—underweight, healthy weight,
              overweight, and obesity. BMI does not measure body fat directly,
              but BMI is moderately correlated with more direct measures of body
              fat. Furthermore, BMI appears to be as strongly correlated with
              various metabolic and disease outcome as are these more direct
              measures of body fatness.
            </p>
            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" className="card-link">
              For more information
            </a>
          </div>
        </div>
        <div className="d-grid gap-2">
            <Link to="/" className="btnHome btn btn-info">Home Page</Link>
        </div>
        <div className="card secondCard mt-1">
          <div className="card-body">
            <h5 className="card-title">How is BMI calculated?</h5>
            <p className="card-text">
            Formula: weight (kg) / [height (m)]2. With the metric system, the formula for BMI is weight in kilograms divided by height in meters squared. Because height is commonly measured in centimeters, divide height in centimeters by 100 to obtain height in meters.
            Example: Weight = 68 kg, Height = 165 cm (1.65 m)
            Calculation: 68 ÷ (1.65)2 = 24.98
            </p>
            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" className="card-link">
              For more information
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Info;
