<!-- src/lib/components/ContactFormModal.svelte -->
<script>
    import {contactForm} from '$lib/stores/contact-form';
    import ContactForm from '$lib/components/contact/ContactForm.svelte';
    import {fade, fly} from 'svelte/transition';
    import '$lib/styles/contact-form.css';


    function handleClickOutside(event) {
        // Ensure we're clicking the overlay itself
        if (event.target === event.currentTarget) {
            contactForm.close();
        }
    }

    function handleClose() {
        contactForm.close();
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            contactForm.close();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if $contactForm.isOpen}
    <!-- Use event.currentTarget in the handler above to ensure we're clicking the overlay -->
    <div
            class="modal-overlay"
            on:mousedown={handleClickOutside}
            transition:fade={{ duration: 200 }}
    >
        <div
                class="modal-content"
                transition:fly={{ y: 20, duration: 150 }}
        >
            <div class="modal-header">
                <h2 class="modal-title">Contact Us</h2>
                <button
                        class="close-button"
                        on:click={handleClose}
                        aria-label="Close"
                >
                    ×
                </button>
            </div>
            <div class="modal-body">
                <ContactForm />
            </div>
        </div>
    </div>
{/if}