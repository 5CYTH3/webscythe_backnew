<script>
    export let name;
    export let link;
    export let description;
    // export let image_url;
</script>

<div class="grid__item">
    <div class="image__wrapper1"></div>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link} target="blank">Learn more</a>
</div>