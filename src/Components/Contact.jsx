import React from 'react';
import "../Styles/index.css";

const Contact = (props) => {

    const [data,setData] = React.useState({
        fullname:"",
        email:"",
        number:"",
        message:""
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        var answer = window.confirm('Please recheck your information again.')

        if (answer) {
            alert("Thank you for staying in touch with us.");
        } else {
            alert("Form submission terminated.");
        }
    }


    return (
        <>
        <div className="my-2">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                            <label for="validationDefault01" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="validationDefault01" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Your full name goes here" required/>
                        </div>
                        <div className="mb-3">
                            <label for="validationDefault02" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="validationDefault02" name="email" value={data.email} onChange={InputEvent} placeholder="someone@example.com" required/>
                        </div>
                        <div className="mb-3">
                            <label for="validationDefault03" className="form-label">Phone</label>
                            <input type="integer" className="form-control" id="validationDefault03" name="number" value={data.number} onChange={InputEvent} placeholder="+923XXXXXXX" required/>
                        </div>

                        <div className="mb-3">
                            <div className="col-md-3">
                                <label for="validationCustom04" className="form-label">Select Service</label>
                                <select className="form-select mx-10" id="validationCustom04" required>
                                <option selected disabled value="">Choose your service</option>
                                <option>Consultation for legal information and advice</option>
                                <option>Consultation to review documents</option>
                                <option>Mediation, arbitration, or other third party services</option>
                                <option>Preparation of documents</option>
                                <option>Representing clients in negotiations</option>
                                <option>Representing clients in court</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid Service.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                        <button className="btn btn-outline-primary my-3" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;