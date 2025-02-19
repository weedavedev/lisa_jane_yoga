<script>
    import AboutOverviewHero from '$lib/components/content/about_overview_hero.svelte';
    import ContactUsInfo from '$lib/components/content/contact_us_info.svelte';
    import MainFooter from '$lib/components/footer.svelte';
    import MainContent from '$lib/components/content/main_content.svelte';
</script>

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

    <div class="content_footer full gonw ">
        <MainFooter/>
    </div>

</div>

