<!-- src/lib/components/content/contact_us_info.svelte -->
<script>
    import { contactusinfo_images } from "$lib/data/social-images.js";
    import ImageGrid from "$lib/components/ImageGrid.svelte";
</script>

<h3>More info / connect via</h3>
<div class="social_container">
    <ImageGrid
            images={contactusinfo_images}
            title="Certificates and partnership."
            columns={3}
            gap="1rem"
            padding="1rem"
            maxWidth="750px"
            classes="w-10 h-10"
    />
</div>