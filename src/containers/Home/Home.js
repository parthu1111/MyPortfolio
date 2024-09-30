
import { NavLink } from 'react-router-dom';
import logo from '../../Images/test.png';
import { email, github, linkedin } from '../../constant';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    let sequence=[
        'PARTH PARMAR',
        1000,
        'SOFTWARE DEVELOPER',
        1000
      ]
    return (
        <div className="homePage">
            
            <div className="container homeBody">
                <div className="row justify-content-center align-content-center">
                    <div className="col-lg-6 col-md-12 order-1 justify-content-center align-content-center">
                        <div className="p-2">
                            <div className="mb-4 heading animate__animated animate__fadeInLeftBig inline-block">HEY, I AM&nbsp;</div><TypeAnimation sequence={sequence} wrapper="div" speed={50} repeat={Infinity} className="secondaryColor heading inline-block"></TypeAnimation>
                            {/* <h1 className="mb-4 animate__animated animate__fadeInLeftBig inline-block">HEY, I AM&nbsp;</h1><h1 className='inline-block animate__animated animate__zoomInDown'>PARTH PARMAR</h1> */}
                            <div className='animate__animated animate__fadeInLeftBig'>
                                <p className="sortDesc">Passionate software developer specializing in creating dynamic and efficient solutions. Explore my portfolio to see how I turn complex challenges into elegant, functional designs.</p>
                            </div>
                            <div className="mediaLink_box animate__animated animate__fadeInUpBig">
                                <NavLink to={linkedin}><i class="bi bi-linkedin secondaryColor"></i></NavLink>
                                <NavLink to={github}><i class="bi bi-github secondaryColor"></i></NavLink>
                                <NavLink to={email}><i class="bi bi-envelope-fill secondaryColor"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-md-1">
                        <div className='animate__animated animate__fadeInRightBig'>
                            <img src={logo} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 
