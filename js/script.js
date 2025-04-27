const navigationBar = document.getElementById("navigation-bar");
navigationBar.innerHTML += `
<div class="container px-5">
    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">ganimtron_10</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
            <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
    </div>
</div>
`;


const footer = document.getElementById("footer");
footer.innerHTML += `
<div class="container px-5">
    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
            <div class="small m-0">Copyright &copy; Praneeth ${new Date().getFullYear()}</div>
        </div>
        <div class="col-auto">
            <a class="small" href="index.html">Home</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="resume.html">Resume</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="projects.html">Projects</a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="contact.html">Contact</a>
        </div>
    </div>
</div>
`;