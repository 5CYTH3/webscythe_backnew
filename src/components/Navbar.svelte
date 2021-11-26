<script>
    import { slide } from 'svelte/transition'

    $: asideShown = false;

    function toggleAside() {
        if(asideShown == true) {
            asideShown = !asideShown
        } else {
            asideShown = !asideShown
        }

    }

</script>
<header id="header">
    <nav id="navbar" class="container">
        <a id="title__header" href="/">Scythe</a>
        <div class="nav__menu">
            <ul class="nav__list" id="nav-list">
                <li id="contact__header"><a href="/Contact" class="nav__link"><i class="uil uil-diary"></i>Contact</a></li>
                <li id="skills__header"><a href="/Skills" class="nav__link"><i class="uil uil-clipboard-alt"></i>Skills</a></li>
                <li id="github__header"><a href="https://github.com/5CYTH3" class="nav__link"><i class="uil uil-github-alt"></i>Github</a></li>
            </ul>
            <i class="uil uil-bars" on:click={toggleAside}></i>
        </div>
    </nav>
</header>
{#if asideShown == true}
    <ul class="side-nav__list" id="side-nav-list" transition:slide>
        <li id="contact__header"><a href="Contact" class="nav__link"><i class="uil uil-diary"></i>Contact</a></li>
        <li id="skills__header"><a href="Skills" class="nav__link"><i class="uil uil-clipboard-alt"></i>Skills</a></li>
        <li id="github__header"><a href="https://github.com/5CYTH3" class="nav__link"><i class="uil uil-github-alt"></i>Github</a></li>
    </ul>
{/if}

<style lang="scss" global>
    @import '../sass/views/components/header.scss';
</style>