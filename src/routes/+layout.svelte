<script>
    import '../lib/styles/global.css';
    import MobileNavigation from '$lib/components/mobileNavigation.svelte';
</script>

<div class="main background_image">
    <div class="holding_page_content">
        <slot/>
    </div>
    <MobileNavigation />
</div>