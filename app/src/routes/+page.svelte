<script lang="ts">
	//import Card from '../components/Card.svelte';
	//import Welcome from '../components/Welcome.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import internalLink from '$lib/utils/internalLink.svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
  //console.log(data.body)
  const formatBody = {
    marks: {
      internalLink: internalLink,
      /*link: ({value, children}) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = value
        return blank ?
          `<a href=${href} target="_blank" rel="noopener">{children}</a>
          ` : `<a href=${href}>{children}</a>
          `
      }*/
    }
  }
</script>

<!--
<section>
	{#if data.posts.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
-->

<article class="post prose gap-x-0 gap-y-0">

  {#if !!data.mainImage}
    <figure class="mainimg">
      <img
        class="post__contains"
        src={urlFor(data.mainImage).url()}
        alt="Cover image for {data.title}"
      />
    </figure>
  {:else}
    <p class="post__cover--none" />
  {/if}
  <header>
    <h2 class="post__title">{data.title}</h2>
    {#if data.excerpt}<p class="post__excerpt">{data.excerpt}</p>{/if}
    {#if data.cta}
    <aside>
      <a href={`${data.cta.link}`}>[&thinsp;<button>{data.cta.text}]</button></a>
    </aside>
    {/if}
  </header>
  <date class="post__date text-sm">Frissítve: 
    {formatDate(data._createdAt)}
  </date>
  <PortableText value={data.body} components={formatBody}/>
</article>

<style>
  article :global(p) {
    margin-block: 0;
  }

  /*article {
    @apply mx-4;
  }*/
</style>
