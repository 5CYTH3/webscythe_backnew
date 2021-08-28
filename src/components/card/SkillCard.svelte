<script>

    export let langName;
    export let imgUrl;
    export let percentageValue;

</script>

<div class="grid__item">
    <div class="top__container">
        <h4>{langName}</h4>
        <img src="{imgUrl}" alt="">
    </div>
    <div class="perc__container">
        <div class="percentage1" style="width: {percentageValue};"></div>
    </div>
    <p>{percentageValue}</p>
</div>