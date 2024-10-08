import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
    return (
        <><nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <NavLink className="navbar-brand roboto-black-italic brandName" to="/">
                    Parth Parmar
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                            <NavLink className='nav-link active' to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link active' to='/'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link active' to='/project'>Project</NavLink>
                        </li>
                        <li className="nav-item phoneView">
                            <NavLink className='nav-link active' to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="desktopView contactButton">
                        <NavLink to='/contact'>
                        <div className='customButton'><i className="bi bi-telephone-fill px-1 me-1"></i>Contact</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
            <Outlet />
        </>
    );
}

export default Navbar;