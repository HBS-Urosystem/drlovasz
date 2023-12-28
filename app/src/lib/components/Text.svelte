<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	let ix: Number;

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


<article class="prose mx-auto gap-x-8 gap-y-0 {content.textBlock.length < 2 || !content.twocols ? 'block' : 'min-[520px]:grid'}">
  {#if content.title}
    {#if ix == 0}
      <h1 class="font-semibold">{content.title}</h1>
    {:else}
      <h2 class="font-medium">{content.title}</h2>
    {/if}
  {/if}
  <PortableText value={content.textBlock} components={formatBody}/>
</article>
