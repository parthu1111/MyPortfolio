import React from 'react'
import { NavLink } from 'react-router-dom'
import { email, github, linkedin } from '../../constant'

function Footer() {
    return (

        <div className="container-fluid">
            <div
                className="text-center text-lg-start text-white"
                style={{"background-color":'black'}}
            >
                <div className="container p-4 pb-0">
                    <div className="">

                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Parth Parmar
                                </h6>
                                <p>
                                Passionate software developer specializing in creating dynamic and efficient solutions. Explore my portfolio to see how I turn complex challenges into elegant, functional designs.
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful Link</h6>
                                <p>
                                    <NavLink className="footer_link" to={'/'}>Home</NavLink>
                                </p>
                                <p>
                                    <NavLink className="footer_link" to={'/projects'}>Project</NavLink>
                                </p>
                                <p>
                                    <NavLink className="footer_link" to={'/contact'}>Contact</NavLink>
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Shree ji road, Ahmedabad</p>
                                <p><i className="fas fa-envelope mr-3"></i> parth9785@gmail.com</p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact Me</h6>


                                <NavLink to={linkedin}><i className="bi bi-linkedin footerIcon"></i></NavLink>
                                <NavLink to={github}><i className="bi bi-github footerIcon"></i></NavLink>
                                <NavLink to={email}><i className="bi bi-envelope-fill footerIcon"></i></NavLink>
                            </div>
                        </div>

                    </div>

                </div>



                <div
                    className="text-center p-3"
                >
                    © 2020 Copyright:
                    <NavLink className="text-white" to="https://google.com/"
                    >portfolio.com</NavLink>
                </div>

            </div>

        </div>

    )
}

export default Footer