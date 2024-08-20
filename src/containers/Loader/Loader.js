import React from 'react'

function Loader() {
    return (
        <div className="container">
            <div className="row vh-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <div class="spinner-border loader" role="status">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader