<script>
    import { fetchData } from "../dbAccess"
    import Card from '../components/card/Card.svelte'
    import { fade } from 'svelte/transition'
</script>

<section class="section__1">
    <div class="main__container">
        <div class="text__container">
            <h2 in:fade="{{delay: 100}}" out:fade>Hi, I'm <span>Scythe</span></h2>
            <h5 in:fade="{{delay: 200}}" out:fade>Front-End / Mobile Developer</h5>
            <p in:fade="{{delay: 300}}" out:fade>with open-minded code habits</p>
            <button in:fade="{{delay: 400}}" out:fade><a href="#about">About</a></button>
        </div>
        <img src="/img/blobchibi.png" alt="" in:fade="{{delay: 600}}" out:fade>
    </div>
</section>
<section class="section__2">
    <div id ="about" class="title__container">
        <h3>About me</h3>
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
        <img src="/img/illustrations/dev_activity.svg" alt="">
    </div>
</section>
<section class="section__3">
    <div class="title__container">
        <h3>Latest projects</h3>
    </div>
    <div class="grid">
        {#await fetchData('projects') then data}
            {#each data as { name, img_url, description, link }}
                <Card description={description} link={link} name={name} image_url={img_url} />
            {/each}
        {/await}
    </div>
</section>
<section class="section__4">
    <!-- Create languages section (for languages that i speak and master) -->
    <div>
        <div class="lang__container">
            <img src="/languages/France.png" alt="">
            <div>
                <h6>French<br class="responsive">(Native speaker)</h6>
            </div>
        </div>
        <div class="lang__container">
            <img src="/languages/USA.png" alt="">
            <div>
                <h6>American English <br class="responsive">(Fluent)</h6>
                <p>I am actually close to bilingual. <span>There's no problem for me to talk with English people and give informations</span></p>
            </div>
        </div>
        <div class="lang__container">
            <img src="/languages/Espana.png" alt="">
            <div>
                <h6>Spanish <br class="responsive"><span>(High School notions)</span></h6>
                <p>I can handle a short conversation with spanish speakers.</p>
            </div>
        </div>
    </div>
</section>

<style lang="scss" global>
    @import '../sass/views/index.scss';
</style>