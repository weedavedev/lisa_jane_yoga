<script>
    import '../lib/styles/global.css';
    import MobileNavigation from '$lib/components/mobileNavigation.svelte';
</script>

<div class="main background_image">
    <slot/>

    <MobileNavigation/>
</div>