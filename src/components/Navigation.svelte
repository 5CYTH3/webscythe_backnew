<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Blog from "./routes/Blog.svelte";
  
    export let url = "";
</script>
  
 

<header id="header">
    <nav id="navbar" class="container">
        <a href="index.html"><h1>Scythe</h1></a>
        <div class="nav__menu">
            <ul class="nav__list" id="nav-list">
                <Router url="{url}">
                    <li><Link href="#" class="nav__link"><i class="uil uil-diary"></i>Contact</Link></li>
                    <li><Link href="#" class="nav__link"><i class="uil uil-clipboard-alt"></i>Skills</Link></li>
                    <li><Link class="nav__link"><i class="uil uil-github-alt"></i>Github</Link></li>
                </Router>
            </ul>
        <i class="uil uil-bars"></i>
        </div> 
    </nav>
</header>

