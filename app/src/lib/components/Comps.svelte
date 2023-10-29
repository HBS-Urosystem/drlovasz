<script lang="ts">
	import Heading from '$components/Heading.svelte';
	import Text from '$components/Text.svelte';
	import Cta from '$components/Cta.svelte';
	import Updated from '$components/Updated.svelte';
	import type { PageData } from '../../routes/$types';

  const comps: PageData = {
    heading: Heading,
    body: Text,
    cta: Cta,
    xcta: Cta,
    updated: Updated,
  }

  export let content: PageData;
	export let ix: Number;

  //console.log({content})
</script>

<svelte:component this={comps[content._type]} {content} {ix}/>
