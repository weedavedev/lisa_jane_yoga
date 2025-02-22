<!-- src/lib/components/content/contact_us_info.svelte -->
<script>
    import { contactusinfo_images } from "$lib/data/social-images.js";
    import ImageGrid from "$lib/components/ImageGrid.svelte";
    import { contactForm } from '$lib/stores/contact-form';
    import ContactFormModal from '$lib/components/ContactFormModal.svelte';
</script>

<div class="social_container">
    <h3>More info / connect via</h3>
    <ImageGrid
            images={contactusinfo_images}
            columns={4}
            gap="0.5rem"
            padding="0.5rem"
            maxWidth="750px"
            classes="social-icons"
    />
</div>

<ContactFormModal />