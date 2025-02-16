<script>
    import AboutOverviewHero from '$lib/components/content/about_overview_hero.svelte';
    import ContactUsInfo from '$lib/components/content/contact_us_info.svelte';
    import MainFooter from '$lib/components/footer.svelte';
    import MainContent from '$lib/components/MainContent.svelte';
</script>

<div class="main_page_content left top">
    <div class="content_header gonw full">
        <h1>Lisa Jane Yoga</h1>
    </div>

    <div class="box gonw centered">
        <AboutOverviewHero />
    </div>

    <div class="box gonw centered">
        <ContactUsInfo />
    </div>
</div>


<div class="main_page_content right bottom">
    <div class="content_header gonw full">
        <h2>About me</h2>
    </div>
:
    <div class="about_me_text full tall wong">
        <MainContent />
    </div>

    <div class="full content_footer gonw">
        <MainFooter />
    </div>

</div>

