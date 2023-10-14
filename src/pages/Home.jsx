import { Link } from "react-router-dom";

function Home() {
    return (
        <><div className="bio-container">
            <div className="bio-item">
                <h1 style={{ fontSize: "40pt" }}>Matthew Halas</h1>
                <hr width="100%" />
                <p style={{ fontSize: "large" }}>
                    Hello, I am a recently graduated mechanical engineer, currently gaining
                    hands on experience in the field as a Wind Turbine Technician. I am
                    passionate about the field of alternative energy, and love solving
                    challenging problems.
                </p>
            </div>
            <div className="bio-item" width="60%">
                <img src="/images/matt.jpg" className="bio-pic" />
            </div>
        </div>
            <div className="project-div">
                <div>
                    <h1>My Projects</h1>
                </div>
                <div className="project-container">
                    <div className="card">
                        <Link to="/projects/volvo">
                            <img src="images/cfd/combustor.gif" alt="Volvo" className="cardImage" />
                            <div className="container">
                                <h4><b>Validation of CFD solver in OpenFOAM</b></h4>
                                <p>
                                    Using the Volvo afterburner common research model to
                                    validate a new computational fluid dynamics solver
                                </p>
                            </div>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/projects/fluidSim">
                            <img src="images/cfd/preview.png" alt="CFD solver" className="cardImage" />
                            <div className="container">
                                <h4><b>Real time fluid simulator</b></h4>
                                <p>
                                    My take on a real time CFD solver written in javascript
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="project-div">
                <h1>Blog</h1>

                <ul>
                    <li className="post-list-item">
                        <Link to="/projects/bike-trip-week-1">Biking from Calgary to Vancouver - Week 1</Link>
                    </li>

                    <li className="post-list-item">
                        <Link to="/projects/bike-trip-week-2">Biking from Calgary to Vancouver - Week 2</Link>
                    </li>

                    <li className="post-list-item">
                        <Link to="/projects/bike-trip-week-3">Biking from Calgary to Vancouver - Week 3</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home