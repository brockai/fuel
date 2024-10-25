// header.js
const Header = () => {
    return (
        <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center">

                <a href="index.html" class="logo d-flex align-items-center me-auto">
                    <img src="assets/img/logo.png" alt=""></img>
                    <h1 class="sitename">Bulk Fuel Mobile</h1>
                </a>

                <nav id="navmenu" class="navmenu">
                    <ul>
                        <li><a href="index.html" class="active">Home<br></br></a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <a class="btn-getstarted" href="get-a-demo.html">Get a Demo</a>

            </div>
        </header>
    );
};

ReactDOM.render(<Header />, document.getElementById('react-header'));
