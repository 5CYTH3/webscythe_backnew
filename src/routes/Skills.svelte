<script>
    export let location;
import SkillCard from '../components/SkillCard.svelte';
    import { fetchData } from '../dbAccess'
    console.log("?... Skills page loaded !");
</script>

<section class="section__1c">
    <div class="main__wrapper">
        <div class="title__wrapper">
            <div class="title__container">
                <h2>What I master ?</h2>
                <p>All the technologies that I've used and I'm familiar with</p>
            </div>
        </div>
        <div class="grid">
            {#await fetchData('skills') then data}
                {#each data as { langName, imgUrl, percentageValue}}
                    <SkillCard imgUrl={imgUrl} langName={langName} percentageValue={percentageValue} />
                {/each}
            {/await}
        </div>
    </div>
</section>
<section class="section__2c">
    <div class="grid">
        <div class="skill_wrapper">
            <img src="" alt="">
            <h3>Gulp</h3>
        </div>
        <div class="skill_wrapper">
            <img src="" alt="">
            <h3>Firebase</h3>
        </div>
        <div class="skill_wrapper">
            <img src="" alt="">
            <h3>Git</h3>
        </div>
        <div class="skill_wrapper">
            <img src="" alt="">
            <h3>Figma</h3>
        </div>
        <div class="skill_wrapper">
            <img src="res/lang/gopher.svg" alt="">
            <h3>Golang</h3>
        </div>
    </div>
</section>