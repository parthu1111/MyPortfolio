
import logo from '../../Images/test.png';
const Home = () => {
    return (
        <div className="homePage">
            
            <div className="container homeBody">
                <div className="row justify-content-center align-content-center">
                    <div className="col-lg-6 col-md-12 order-1 justify-content-center align-content-center">
                        <div className="p-2">
                            <h1 className="mb-4">HEY, I AM <strong>PARTH PARMAR</strong></h1>
                            <div>
                                <p className="sortDesc">Passionate software developer specializing in creating dynamic and efficient solutions. Explore my portfolio to see how I turn complex challenges into elegant, functional designs.</p>
                            </div>
                            <div className="mediaLink_box">
                                <a href="#"><i class="bi bi-linkedin "></i></a>
                                <a href="#"><i class="bi bi-github"></i></a>
                                <a href="#"><i class="bi bi-envelope-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-md-1">
                        <div>
                            <img src={logo} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 
