<script>
    import { Link } from "svelte-routing";

</script>
<header id="header">
    <nav id="navbar" class="container">
        <Link to="/"><h1 id="title__header">Scythe</h1></Link>
        <div class="nav__menu">
            <ul class="nav__list" id="nav-list">
                <li id="contact__header"><Link to="Contact" class="nav__link"><i class="uil uil-diary"></i>Contact</Link></li>
                <li id="skills__header"><Link to="Skills" class="nav__link"><i class="uil uil-clipboard-alt"></i>Skills</Link></li>
                <li id="github__header"><a href="https://github.com/5CYTH3" class="nav__link"><i class="uil uil-github-alt"></i>Github</a></li>
            </ul>
        <i class="uil uil-bars"></i>
        </div>
    </nav>
</header>