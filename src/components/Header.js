function Header() {
    return (
        <div>
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="countdown-text">
                            Exclusive Black Friday ! Offer <span className="span skewBg">10</span>{" "}
                            Days
                        </div>
                        <div className="social-wrapper">
                            <p className="social-title">Follow us on :</p>
                            <ul className="social-list">
                                <li>
                                    <a href="https://github.com" className="social-link">
                                        <ion-icon name="logo-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com" className="social-link">
                                        <ion-icon name="logo-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com" className="social-link">
                                        <ion-icon name="logo-pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com" className="social-link">
                                        <ion-icon name="logo-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom skewBg" data-header="">
                    <div className="container">
                        <a href="https://github.com" className="logo">
                            P3S OFFICIAL
                        </a>
                        <nav className="navbar" data-navbar="">
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <a href="#home" className="navbar-link skewBg" data-nav-link="">
                                        Home
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#live" className="navbar-link skewBg" data-nav-link="">
                                        Live
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#features" className="navbar-link skewBg" data-nav-link="">
                                        Features
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#shop" className="navbar-link skewBg" data-nav-link="">
                                        Shop
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#blog" className="navbar-link skewBg" data-nav-link="">
                                        Blog
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="https://github.com" className="navbar-link skewBg" data-nav-link="">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-actions">
                            <button className="cart-btn" aria-label="cart">
                                <ion-icon name="cart" />
                                <span className="cart-badge">0</span>
                            </button>
                            <button
                                className="search-btn"
                                aria-label="open search"
                                data-search-toggler=""
                            >
                                <ion-icon name="search-outline" />
                            </button>
                            <button
                                className="nav-toggle-btn"
                                aria-label="toggle menu"
                                data-nav-toggler=""
                            >
                                <ion-icon name="menu-outline" className="menu" />
                                <ion-icon name="close-outline" className="close" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}


export default Header;