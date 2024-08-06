import React from 'react'

function SubHeader({title}) {
  return (
    <div className="row justify-content-center mb-5">
        <div className="col-lg-4 col-md-12 text-center">
          <h1 className="mb-1">{title}</h1>
          <div className="d-flex justify-content-center">
            <div className="line"></div>
          </div>
        </div>
      </div>
  )
}

export default SubHeader