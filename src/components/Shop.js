function Shop() {
    return (
        <section
            className="section shop"
            id="shop"
            aria-label="shop"
            style={{ backgroundImage: 'url("./assets/images/shop-bg.jpg")' }}
        >
            <div className="container">
                <h2 className="h2 section-title">
                    Gaming Product <span className="span">Corner</span>
                </h2>
                <p className="section-text">
                    Compete with 100 players on a remote island for winner takes showdown
                    known issue where certain skin strategic
                </p>
                <ul className="has-scrollbar">
                    <li className="scrollbar-item">
                        <div className="shop-card">
                            <figure className="card-banner img-holder">
                                <img
                                    src="./assets/images/shop-img-1.jpg"
                                    width={300}
                                    height={260}
                                    loading="lazy"
                                    alt="Women Black T-Shirt"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    t-shirt
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Women Black T-Shirt
                                    </a>
                                </h3>
                                <div className="card-wrapper">
                                    <p className="card-price">$29.00</p>
                                    <button className="card-btn">
                                        <ion-icon name="basket" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="shop-card">
                            <figure className="card-banner img-holder">
                                <img
                                    src="./assets/images/shop-img-2.jpg"
                                    width={300}
                                    height={260}
                                    loading="lazy"
                                    alt="Gears 5 Xbox Controller"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    x-box
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Gears 5 Xbox Controller
                                    </a>
                                </h3>
                                <div className="card-wrapper">
                                    <p className="card-price">$29.00</p>
                                    <button className="card-btn">
                                        <ion-icon name="basket" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="shop-card">
                            <figure className="card-banner img-holder">
                                <img
                                    src="./assets/images/shop-img-3.jpg"
                                    width={300}
                                    height={260}
                                    loading="lazy"
                                    alt="GeForce RTX 2070"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Graphics
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        GeForce RTX 2070
                                    </a>
                                </h3>
                                <div className="card-wrapper">
                                    <p className="card-price">$29.00</p>
                                    <button className="card-btn">
                                        <ion-icon name="basket" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="shop-card">
                            <figure className="card-banner img-holder">
                                <img
                                    src="./assets/images/shop-img-4.jpg"
                                    width={300}
                                    height={260}
                                    loading="lazy"
                                    alt="Virtual Reality Smiled"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    VR-Box
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Virtual Reality Smiled
                                    </a>
                                </h3>
                                <div className="card-wrapper">
                                    <p className="card-price">$29.00</p>
                                    <button className="card-btn">
                                        <ion-icon name="basket" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Shop;