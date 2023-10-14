import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="project-post">
                <div className="contact-container">
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/matthew-halas/" target="_blank">
                            <img src="/images/linkedin.png" width="150px" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:m.halas04@gmail.com">
                            <img src="/images/email.png" width="225px" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <div className="phone-container">
                            <img src="/images/phone.png" width="200px" />

                            <div className="phone-overlay">
                                <div className="phone-text">(587) 703-2998</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;