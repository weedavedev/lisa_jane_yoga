<!-- src/lib/components/MobileNavigation.svelte -->
<script>
    let activeSection = 'top';

    function scrollToSection(section) {
        const element = document.querySelector(`.${section}-section`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            activeSection = section;
        }
    }
</script>

<div class="mobile-nav">
    <button
            on:click={() => scrollToSection('top')}
            class="nav-button {activeSection === 'top' ? 'active' : ''}"
            aria-label="Scroll to top section"
    >
        <!-- Simple arrow using CSS -->
        <span class="arrow up"></span>
    </button>
    <button
            on:click={() => scrollToSection('bottom')}
            class="nav-button {activeSection === 'bottom' ? 'active' : ''}"
            aria-label="Scroll to bottom section"
    >
        <span class="arrow down"></span>
    </button>
</div>

<style>
    .mobile-nav {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .nav-button {
        padding: 0.5rem;
        border-radius: 9999px;
        background-color: rgba(255, 255, 255, 0.8);
        color: rgb(60, 107, 59);
        border: none;
        cursor: pointer;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-button.active {
        background-color: rgb(60, 107, 59);
        color: white;
    }

    .arrow {
        border: solid currentColor;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 4px;
    }

    .up {
        transform: rotate(-135deg);
    }

    .down {
        transform: rotate(45deg);
    }

    @media (min-width: 768px) {
        .mobile-nav {
            display: none;
        }
    }
</style>