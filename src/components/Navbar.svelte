<script>
    import { Link } from "svelte-routing";
</script>
<header id="header">
    <nav id="navbar" class="container">
        <Link to="/"><h1>Scythe</h1></Link>
        <div class="nav__menu">
            <ul class="nav__list" id="nav-list">
                <li><Link to="Contact" class="nav__link"><i class="uil uil-diary"></i>Contact</Link></li>
                <li><Link to="Skills" class="nav__link"><i class="uil uil-clipboard-alt"></i>Skills</Link></li>
                <li><a href="https://github.com/5CYTH3" class="nav__link"><i class="uil uil-github-alt"></i>Github</a></li>
            </ul>
        <i class="uil uil-bars"></i>
        </div>
    </nav>
</header>