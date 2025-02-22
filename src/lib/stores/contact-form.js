// $lib/stores/contact-form.js
import { writable } from 'svelte/store';

function createContactFormStore() {
    const { subscribe, set } = writable({ isOpen: false });

    return {
        subscribe,
        open: () => set({ isOpen: true }),
        close: () => set({ isOpen: false })
    };
}

export const contactForm = createContactFormStore();