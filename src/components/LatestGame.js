function LatestGame() {
    return (
        <section className="section latest-game" aria-label="latest game">
            <div className="container">
                <p className="section-subtitle">Latest Releases</p>
                <h2 className="h2 section-title">
                    Create &amp; <span className="span">Manage</span>
                </h2>
                <ul className="has-scrollbar">
                    <li className="scrollbar-item">
                        <div className="latest-game-card">
                            <figure className="card-banner img-holder" style={{width:400, height: 470}}>
                                <img
                                    src="./assets/images/latest-game-1.jpg"
                                    width={400}
                                    height={470}
                                    loading="lazy"
                                    alt="White Walker Daily"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Zombie
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        White Walker <span className="span">Daily</span>
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
                            <figure className="card-banner img-holder" style={{width:400, height: 470}}>
                                <img
                                    src="./assets/images/latest-game-2.jpg"
                                    width={400}
                                    height={470}
                                    loading="lazy"
                                    alt="Hunter Killer II"
                                    className="img-cover"
                                />
                            </figure>
                            <div className="card-content">
                                <a href="#" className="card-badge skewBg">
                                    Adventure
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Hunter Killer <span className="span">II</span>
                                    </a>
                                </h3>
                                <p className="card-price">
                                    Entry Fee : <span className="span">$25.00</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="scrollbar-item">
                        <div className="latest-game-card">
                            <figure className="card-banner img-holder" style={{width:400, height: 470}}>
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
                                    Action
                                </a>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Cyberpunk <span className="span">Daily</span>
                                    </a>
                                </h3>
                                <p className="card-price">
                                    Entry Fee : <span className="span">$25.00</span>
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