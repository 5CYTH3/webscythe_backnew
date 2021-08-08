<script>
    import gsap from 'gsap';

    const containerProject = document.querySelector('.section__3');
    const TL = gsap.timeline({paused: true});

    export function animateHeader(nodes) {
        
        TL.from(nodes, {top: -50, opacity: 0, ease: "power2.out"}, 0.3).play();

    }
</script>