<script>
    import { Router, Route } from "svelte-routing";
	import Contact from "./routes/Contact.svelte";
	import Skills from "./routes/Skills.svelte";
	import Home from "./routes/Home.svelte"
	import Navbar from './components/Navbar.svelte'
	import Footer from './components/Footer.svelte'
    export let url = "";

	console.log("?... App loaded !");
</script>

<main>
	<Router url="{url}">
		<Navbar />
		<div>
			<Route path="/"><Home /></Route>
			<Route path="Contact" component="{Contact}" />
			<Route path="Skills" component="{Skills}" />
		</div>
		<Footer/>
	</Router>
</main>