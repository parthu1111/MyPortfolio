import React from 'react'

function Contact() {
  return (

    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="card col-lg-4 col-md-11 m-3 p-3">
          <div className="my-2">
            <h2 className="text-center">Contact Form</h2>
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">Message</label>
              <div className="form-floating">
                <textarea className="form-control textAreaHeight" id="floatingTextarea" ></textarea>
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

  )

}
export default Contact