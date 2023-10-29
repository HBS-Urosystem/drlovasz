<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	export let ix: Number;

  const formatBody = {
    marks: {
      internalLink: internalLink,
      link: Link,
    },
    listItem: {
      bullet: DefaultListItem,
      number: DefaultListItem
    },
  }
  //console.log({content})
</script>


<article class="prose gap-x-8 gap-y-0 grid-cols-{content.textBlock.length < 2 ? '1' : '2'}xs">
  {#if content.title}
    {#if ix == 0}
      <h1>{content.title}</h1>
    {:else}
      <h2>{content.title}</h2>
    {/if}
  {/if}
  <PortableText value={content.textBlock} components={formatBody}/>
</article>

<style>
  /*article {
    @apply mx-4;
  }*/
</style>
