import { Component } from "react";
import "./Footer.css"
export class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <body class="d-flex flex-column h-100">
            
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Fixed navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
                <main class="flex-shrink-0">
                   <div class="container">
                       <h1 class="mt-5">Template with dark fixed navbar and sticky footer</h1>
                       <p class="lead">Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with padding-top: 60px; on the main  .container.</p>
                   </div>
                </main>
                <footer class="footer mt-auto py-3 bg-light sticky-footer">
                    <div class="container-fluid text-center">
                        <span class="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>
            </body>
            </>
        );
    }
}
 
export default Footer;