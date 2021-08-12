<script>
    import SkillCard from '../components/card/SkillCard.svelte';
    import SkillCardRandom from '../components/card/SkillCardRandom.svelte';
    import { fetchData } from '../dbAccess'

    export let location;

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
        {#await fetchData('random-skills') then data}
            {#each data as { name, img_url }}
                <SkillCardRandom img_url={img_url} name={name} />
            {/each}
        {/await}
    </div>
</section>