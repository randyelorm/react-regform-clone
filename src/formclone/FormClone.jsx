import React, { Component } from 'react';
import "./formstyles.css"
import image1 from "../Images/pic.png"

class FormClone extends Component {
    render() {
        return (
<section className ="">
    <form className= "col-lg-6">
            <div className ="divs top-div">
                <h2>Codetrain Registration Form</h2>   
                <p>
                    This form is the first step to register for Codetrain's program 
                    starting on 25th July 2020. Our admissions 
                    team will reach out to you after 
                    successfully submitting your form. <br /> <br />
                    <span className ="required"> * Required</span> 
                </p>
            </div>

            <br />
            <div className ="divs">
                <label htmlFor="email"> 
                    <h5>Email <span className ="required">*</span> </h5>

                    <input type="email"  name ="email" placeholder="Your email" required = "required" size ="40"/>
                </label>
            </div>

            <br />
            <div className ="divs">
                <label htmlFor="fullname"> 
                    <h5>Full Name <span className ="required">*</span> </h5>

                    <input type="text" name ="fullname" placeholder="Your answer" required = "required" size ="40" />
                </label>
            </div>

            <br />

            <div className ="divs number-divs">
                <label htmlFor="number1"> 
                    <h5> Phone Number <span className ="required">*</span> </h5>

                    <input type="number" name ="number1" placeholder="Your answer" required = "required" size ="40" />
                </label>
            </div>

            <br />
            <div className ="divs number-divs">
                <label htmlFor="number2"> 
                    <h5> Phone number of next of kin </h5>
                    <h6>
                        Phone number of someone we can reach out to in case your phone 
                        is off or not reachable. Eg, your parent, 
                        guardian or sibling, or spouse
                    </h6>

                    <input type="number" name ="number2" />
                </label>
            </div>

            <br />

            <div className ="divs">
                <label htmlFor="check1"> 
                    <h5> 

                        Can you pay 60% or more of the full Codetrain fees 
                        (GHS6000 for Ghanaian applicants or $1,200 for international applicants)
                         <span className ="required">*</span> </h5> <br />

                    <input type="checkbox" name ="check1" /> No <br /> <br />
                    <input type="checkbox" name ="check1" /> Yes
                </label>
            </div>


            <br />

            <div className ="divs">
                <label htmlFor="check2"> 
                    <h5> 

                    Please indicate who is going to pay your fees 
                         <span className ="required">*</span> </h5> <br />

                    <input type="checkbox" name ="check1" /> Yes    <br /> <br />
                    <input type="checkbox" name ="check1" /> Parent / Sponsor <br /> <br />
                    <input type="checkbox" name ="check1" /> Organization
                </label>
            </div>

            <br />

            <div className ="divs">
                <label htmlFor="location"> 
                    <h5>Location<span className ="required">*</span> </h5>

                    <input type="text" name ="location" placeholder="Your answer" required = "required" size ="40"  />
                </label>
            </div>

            <br />
            <div className ="divs">
                <label htmlFor="current"> 
                    <h5>Current or previous school<span className ="required">*</span> </h5>

                    <input type="text" name ="current"  placeholder="Your answer" required = "required" size ="40" />
                </label>
            </div>

            <br />
            <div className ="divs">
                <label htmlFor="why-join"> 
                    <h5>Why do you want to join Codetrain <span className ="required">*</span> </h5>

                    <input type="text" name ="why-join" placeholder="Your answer" required = "required" size ="40"  />
                </label>
            </div>

            <br />

            <div className ="divs">
                <label htmlFor="how-hear"> 
                    <h5>How did you hear about Codetrain ? <span className ="required">*</span> </h5>

                    <input type="text" name ="how-hear" placeholder="Your answer" required = "required" size ="40"  />
                </label>
            </div>
            
            <br />

            <p className="a-copy">A copy of your responses will be emailed to the address you provided.</p> <br />

          
           <div className="submit-nd-page">
               <button type="submit" className="">Submit</button> 
            
             <span className ="bar-progress">  <span className="green-line progress-bar" ></span> Page 1 of 1</span>
               
            
            </div> 
    </form>

    <br />

    <p className="never-submit">Never submit passwords through Google Forms.</p>

    <div className ="recap-div">
       <span> <img src={image1} className ="img" alt="" /> <span className ="recap">reCAPTCHA</span> </span> <br />
       <span>
            <a href="">Privacy</a>
            <a href="">Terms</a>
        </span>
    </div>

            <br />
    <div className ="this-content-box">
        This content is niether created nor endorsed by Google. 
        <a href="">Report Abuse</a> -
        <a href="">Terms of Service</a> -
        <a href="">Privacy Policy</a>
    </div>

    <h3 className="google">Google Forms</h3>
   

    </section>
        );
    }
}

export default FormClone;
