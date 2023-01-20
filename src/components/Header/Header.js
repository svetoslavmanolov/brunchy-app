import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className="main-header-div">
            <div className="header-text-div">
                <Link to="/" style={{ textDecoration: 'none' }}> <span className="brunchy">BRUNCHY</span> </Link>
            </div>
            <nav className="navigation-header">
                <p className="about"><a href="https://www.dreamshot.bg" target="_blank" style={{ textDecoration: 'none', color: '#797979' }}>About</a></p>
                <p className="call-us"><a href="https://www.dreamshot.bg" target="_blank" style={{ textDecoration: 'none', color: '#797979' }}>Call Us</a></p>
                <div className="free-delivery-div">
                    <div className="test-div">
                        <div className="free-delivery-inner-div">
                            <p className="free-delivery-text">Free Delivery</p>
                        </div>
                        <div className="free-delivery-img-div">
                            <img className="image-1" src="./images/image-1.png" alt="delivery-img" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;