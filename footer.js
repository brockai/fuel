// footer.js
const Footer = () => {
    return (
        <footer id="footer" class="footer dark-background">

            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-5 col-md-12 footer-about">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <span class="sitename">Bulk Fuel Mobile</span>
                        </a>
                        <h6>Mobile Bulk Fuel Delivery for Professional Operators</h6>
                        <div class="social-links d-flex mt-4">
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html#about">About us</a></li>
                            <li><a href="index.html#features">Features</a></li>
                            <li><a href="index.html#service-details">Services</a></li>
                            <li><a href="tos.html">Terms of service</a></li>
                            <li><a href="privacy.html">Privacy policy</a></li>
                        </ul>
                    </div>

                    {/* <div class="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div> */}

                    <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p class="mt-4"><strong>Phone:</strong> <span>+1 403 465 2151</span></p>
                        <p><strong>Email:</strong> <span>brock@brockai.com</span></p>
                    </div>

                </div>
            </div>

            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">Logis</strong> <span>All Rights Reserved</span>
                </p>
                <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>

        </footer>
    );
};

ReactDOM.render(<Footer />, document.getElementById('react-footer'));
