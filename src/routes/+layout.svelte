<script>
    // import {mediaSource} from '$lib/constants';
    import '../lib/styles/global.css';
    import {onMount} from 'svelte';

    // let backgroundImage = `${mediaSource}/lisa_background_cropped.jpg`;
    // let backgroundImageMobile = `${mediaSource}/lisa_background_mobile.jpg`;
    //console.log(backgroundImage)
    let isLargeScreen = false;


    // Function to check screen size
    const checkScreenSize = () => {
        isLargeScreen = window.innerWidth >= 768;
    };

    // Check on mount and add resize event listener
    onMount(() => {
        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    });

</script>

<div class={`main background_image ${isLargeScreen ? 'bg-[url(/media/lisa_background_cropped.jpg)]' : 'bg-[url(/media/lisa_background_mobile.jpg)]'}`}>
    <!--    <Navbar/>   -->
    <div class="holding_page_content ">
        <slot/>
    </div>
    <!--    <Footer/>   -->
</div>