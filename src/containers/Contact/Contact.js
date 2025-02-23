import React, { useState } from 'react'
import { useFetchState } from '../../customHook/useFetchState';
import { useNavigate } from 'react-router-dom';
import {app_baseURL} from '../../constant.js';
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('click submit');
    console.log(formData.name);
    console.log(formData.email);
    
    let body={
      "LastName": formData.name,
      "Email":formData.email,
      "Description":formData.comment
    }
    let response = await fetch(`${app_baseURL}/api/v1/sendemail`, {
      method: 'POST',                     // HTTP method (POST)
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify(body)          // Convert body object to a JSON string
    });
    console.log(JSON.stringify(response));
    
  }
  
  return (


      <div className="container my-4">
      <div className="row justify-content-center">
        <div className="card col-lg-4 col-md-11 m-3 p-3 contact_card">
          <div className="my-2">
            <h2 className="text-center">Contact Form</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input required type="text" className="form-control" id="name" name='name' value={formData.name} onChange={handleChange} aria-describedby="emailHelp" />
              
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input required type="email" className="form-control" id="email" name='email' value={formData.email} onChange={handleChange} aria-describedby="emailHelp" />
              
            </div>
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">Message</label>
              <div className="form-floating">
                <textarea  required className="form-control textAreaHeight" id="comment" name='comment' value={formData.comment} onChange={handleChange}></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
            </div>
            <div className='d-flex justify-content-left mb-3'>
              <button type="submit" className="btn btn-outline-dark">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  

  );

}
export default Contact