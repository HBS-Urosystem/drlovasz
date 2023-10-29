<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from '../../routes/$types';

	//export let data: PageData;
	export let content: PageData;
	export let ix: Number;
  //console.log({content})
</script>

<header class="prose mx-auto">
  {#if content.image}
    {@const image = content.image}
    <figure class="gap-x-8 gap-y-0 flex flex-1">
      <img
        class="object-contain"
        src={urlFor(image).url()}
        alt="Cover image for {image.alt}"
      />
      <figcaption>
        {#if ix == 0}
          <h1>{content.heading}</h1>
        {:else}
          <h2>{content.heading}</h2>
        {/if}
        {#if content.tagline}<h3 class="">{content.tagline}</h3>{/if}
      </figcaption>
    </figure>
  {:else}
    {#if ix == 0}
      <h1>{content.heading}</h1>
    {:else}
      <h2>{content.heading}</h2>
    {/if}
    {#if content.tagline}<h3 class="">{content.tagline}</h3>{/if}
  {/if}
  
  {#if content.excerpt}<h4 class="prose">{content.excerpt}</h4>{/if}
  {#if content.cta}
  <aside>
    <a href={`${content.cta.link}`}><button>[&thinsp;{content.cta.text}&thinsp;▶︎]</button></a>
  </aside>
  {/if}
</header>

<style>
  /*figure {
    display: grid;
    grid-template-columns: repeat(2, minmax(33ch, 1fr));
  }*/
</style>