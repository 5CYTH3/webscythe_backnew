<script>
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
</svelte:head>

<Navbar />
<main>
    <slot></slot>
</main>
<Footer />

<style lang="scss" global>
    @import '../sass/style.scss';
</style>