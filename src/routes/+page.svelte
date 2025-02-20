<script>
    import AboutOverviewHero from '$lib/components/content/about_overview_hero.svelte';
    import ContactUsInfo from '$lib/components/content/contact_us_info.svelte';
    import MainFooter from '$lib/components/footer.svelte';
    import MainContent from '$lib/components/content/main_content.svelte';
    import { onMount } from 'svelte';

    let topOffset = 0;
    let isDragging = false;
    let startY = 0;
    let windowHeight;

    onMount(() => {
        windowHeight = window.innerHeight;

        const handleKeyPress = (e) => {
            if (e.key === 'ArrowDown') {
                setOffset(windowHeight);
            } else if (e.key === 'ArrowUp') {
                setOffset(0);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    });

    function handleTouchStart(e) {
        isDragging = true;
        startY = e.touches ? e.touches[0].clientY : e.clientY;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        const currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const diff = startY - currentY;

        setOffset(topOffset + diff, false);
        startY = currentY;
    }

    function handleTouchEnd() {
        isDragging = false;

        if (topOffset > windowHeight / 2) {
            setOffset(windowHeight);
        } else {
            setOffset(0);
        }
    }

    function setOffset(value, animate = true) {
        topOffset = Math.max(0, Math.min(value, windowHeight));
    }
</script>

<svelte:window bind:innerHeight={windowHeight}/>

<div class="main background_image"
     on:touchstart={handleTouchStart}
     on:touchmove={handleTouchMove}
     on:touchend={handleTouchEnd}
     on:mousedown={handleTouchStart}
     on:mousemove={handleTouchMove}
     on:mouseup={handleTouchEnd}
     on:mouseleave={handleTouchEnd}>

    <!-- Content wrapper for mobile scroll -->
    <div class="main"
         style:transform="translateY(-{topOffset}px)"
         style:transition={isDragging ? 'none' : 'transform 0.3s ease-out'}>

        <div class="main_page_content left top" id="top">
            <div class="content_header gonw full">
                <h1>Lisa Jane Yoga</h1>
            </div>

            <div class="content_box gonw centered">
                <AboutOverviewHero/>
            </div>

            <div class="content_footer gonw centered">
                <ContactUsInfo/>
            </div>
        </div>

        <div class="main_page_content right bottom" id="bottom">
            <div class="content_header full gonw">
                <h1>About me</h1>
            </div>

            <div class="content_box full tall wong">
                <div class="about_me_text">
                    <MainContent/>
                </div>
            </div>

            <div class="content_footer full gonw">
                <MainFooter/>
            </div>
        </div>
    </div>

    <!-- Mobile scroll indicator -->
    <div class="scroll-indicator">
        <div class="indicator-dot" class:active={topOffset < windowHeight/2}></div>
        <div class="indicator-dot" class:active={topOffset >= windowHeight/2}></div>
    </div>
</div>
