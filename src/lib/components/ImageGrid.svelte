<!-- src/lib/components/ImageGrid.svelte -->
<script>
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { contactForm } from '$lib/stores/contact-form';
	import '$lib/styles/image-grid.css';

	export let images = [];
	export let title = '';
	export let columns = 3;
	export let gap = '1rem';
	export let padding = '1rem';
	export let maxWidth = 'none';
	export let classes = '';

	function handleImageClick(image) {
		if (image.isContactForm) {
			contactForm.open();
		} else if (image.link) {
			window.open(image.link, '_blank');
		}
	}
</script>

<div class="grid-wrapper" style="max-width: {maxWidth}">
	{#if title}
		<h3>{title}</h3>
	{/if}

	<div
			class="image-grid"
			style="grid-template-columns: repeat({columns}, 1fr); gap: {gap}; padding: {padding};"
	>
		{#each images as image}
			<div
					class="image-container"
					on:click={() => handleImageClick(image)}
					on:keydown={(e) => e.key === 'Enter' && handleImageClick(image)}
					role="button"
					tabindex="0"
			>
				<div class="image-aspect-container">
					<Image
							src={image.src}
							alt={image.alt}
							className="grid-image {classes}"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
