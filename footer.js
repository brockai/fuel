const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">Bulk Fuel Mobile</span>
                        </a>
                        <h6>Mobile Bulk Fuel Delivery for Professional Operators</h6>
                        <div className="social-links d-flex mt-4">
                            <a href="https://www.linkedin.com/in/brock-clayton-403" target="new"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/brockai" target="new"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html#about">About us</a></li>
                            <li><a href="index.html#testimonials">Testimonials</a></li>
                            <li><a href="index.html#features">Features</a></li>
                            <li><a href="index.html#service-details">Services</a></li>
                            <li><a href="index.html#pricing">Pricing</a></li>
                            <li><a href="tos.html">Terms of service</a></li>
                            <li><a href="privacy.html">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact</h4>
                        <p className="mt-4"><strong>Phone:</strong> <span>+1 403 465 2151</span></p>
                        <p><strong>Email:</strong> <span>bclayton403@gmail.com</span></p>
                        <br></br>
                        <span className="footer-links">
                            <ul>
                                <li><a href="constact.html">Contact Us</a></li>
                                <li><a href="demo.html">Det a Demo</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
ReactDOM.render(<Footer />, document.getElementById('react-footer'));
