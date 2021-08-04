<script>
    import { Router, Link, Route } from "svelte-routing";
	import Contact from "./routes/Contact.svelte";
	import Skills from "./routes/Skills.svelte";
	import Home from "./routes/Home.svelte"

    export let url = "";

	console.log("?... App loaded !");

</script>

<main>
	<Router url="{url}">
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
		<div>
			<Route path="/"><Home /></Route>
			<Route path="Contact" component="{Contact}" />
			<Route path="Skills" component="{Skills}" />
		</div>
	</Router>
</main>