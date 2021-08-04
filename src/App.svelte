<script>
import Navigation from "./components/Navigation.svelte";

</script>
<main>
	<section>
		<div class="main__container">
			<div class="text__container">
				<h2>Hi, I'm <span>Lucas</span></h2>
				<p>a young french Webdev based
					<br>in Brittany, in France.</p>
				<button>About</button>  
			</div>
			<img src="res/img/blobchibi.png" alt="">
		</div>
	</section>
	<section class="section__2">
		<div class="title__container">
			<h2>About me</h2>
		</div>
		<div class="main__second">
			<div class="para__container">
				<p>At the age of ten, I started to
					<br>discover the programmation with Java and Spigot. 
					<br>Two years later, I decided to put Spigot away and
					<br>improve my "pure" Java mastery. I also learnt the 
					<br>basics of python, which opened new doors of 
					<br>possibilities for me. At the age of fourteen, I
					<br>started to learn the front-end with HTML, CSS and 
					<br>then SASS. Actually, I am trying Svelte.js and I'm a
					<br>Flutter enthusiast.
				</p>
			</div>
			<img src="./res/img/dev_activity.svg" alt="">
		</div>
	</section>
	<section class="section__3">
		<div class="title__container">
			<h2>Latest projects</h2>
		</div>
		<div class="grid">
			<div class="grid__item">
				<div class="image__wrapper1"></div>
				<h3>The Tasko app</h3>
				<p>This app allows you to create task faster and easier than others. It is made in Flutter.</p>
				<a href="https://github.com/5CYTH3/tasko_rem" target="blank">Learn more</a>
			</div>
			<div class="grid__item">
				<div class="image__wrapper2"></div>
				<h3>Le Domaine Nantais</h3>
				<p>"Le Domaine Nantais" is a startup which provide rooms for weddings or meetings.</p>
				<a href="https://domaine-nantais.com/" target="blank">Learn more</a>
			</div>
			<div class="grid__item">
				<div class="image__wrapper3"></div>
				<h3>Le centre de la danse</h3>
				<p>This website has been a lot modified after I leave
					<br>but the foundations are still here !</p>
				<a href="https://lecentredeladanse.com/" target="blank">Learn more</a>
			</div>
		</div>
	</section>
	<section>
		<!-- Create languages section (for languages that i speak and master) -->
		<div>

		</div>

	</section>
	
	<footer>
		
	</footer>
</main>