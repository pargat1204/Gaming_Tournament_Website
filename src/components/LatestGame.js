function LatestGame() {
    return (
        <section className="section latest-game" aria-label="latest game">
            <div className="container">
                <p className="section-subtitle">Upcoming Tournaments</p>
                <h2 className="h2 section-title">
                    Coming <span className="span">Soon</span>
                </h2>
                <ul className="has-scrollbar">
                    <li className="scrollbar-item">
                        <div className="latest-game-card">
                            <figure className="card-banner img-holder" style={{ width: 400, height: 470 }}>
                                <img
                                    src="./assets/images/pes.jpg"
                                    width={400}
                                    height={470}
                                    loading="lazy"
                                    alt="White Walker Daily"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Sports
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        EFootball PES <span className="span">2023</span>
                                    </a>
                                </h3>
                                <p className="card-price">
                                    Entry Fee : <span className="span">Free</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="latest-game-card">
                            <figure className="card-banner img-holder" style={{ width: 400, height: 470 }}>
                                <img
                                    src="./assets/images/pubg.jpg"
                                    width={400}
                                    height={470}
                                    loading="lazy"
                                    alt="Hunter Killer II"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Action
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        BATTLEGROUNDS MOBILE <span className="span">INDIA</span>
                                    </a>
                                </h3>
                                <p className="card-price">
                                    Entry Fee : <span className="span">Free</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="latest-game-card">
                            <figure className="card-banner img-holder" style={{ width: 400, height: 470 }}>
                                <img
                                    src="./assets/images/latest-game-3.jpg"
                                    width={400}
                                    height={470}
                                    loading="lazy"
                                    alt="Cyberpunk Daily"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Strategy
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Cyberpunk <span className="span">Daily</span>
                                    </a>
                                </h3>
                                <p className="card-price">
                                    Entry Fee : <span className="span">Free</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default LatestGame;