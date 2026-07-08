function Navbar()
{
    return(
        <>
           <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">

        
        <a class="navbar-brand" href="#">
            My<span>Portfolio</span>
        </a>

        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarMenu">

            <ul class="navbar-nav mx-auto">

                <li class="nav-item">
                    <a class="nav-link active" href="#home">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>

            </ul>

            <a href="/resume 2.pdf"
                download class="btn btn-primary resume-btn">
                Download CV
            </a>

        </div>

    </div>
</nav>
 

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

        </>
    )
}

export default Navbar