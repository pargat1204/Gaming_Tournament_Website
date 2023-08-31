function Hero() {
    return (
        <section
            className="section hero"
            id="home"
            aria-label="home"
            style={{ backgroundImage: 'url("./assets/images/hero.jpg")', width: '100%', height: '50%' }}
        >
            <div className="container">
                <div className="hero-content">
                    {/* <p className="hero-subtitle">World Gaming</p> */}
                    <h1 className="h1 hero-title">
                        Upcoming <span className="span">Tournament</span>
                    </h1>
                    {/* <p className="hero-text">
                        Find technology or people for digital projects in public sector and Find
                        an individual specialist develope researcher.
                    </p> */}
                    <h3 className="h2 hero-title">
                        TIME <span className="span">|</span> Friday, 22 Oct, 2023
                    </h3>
                    <button className="btn skewBg">JOIN</button>
                </div>
                <figure className="hero-banner img-holder">
                    <img src="./assets/images/hero_banner.png" width={700} height={700} alt="hero banner" className="w-100" />
                </figure>

            </div>
        </section>
    );
}

export default Hero;