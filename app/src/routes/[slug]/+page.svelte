<script lang="ts">
	import Comps from '$components/Comps.svelte';
	//import Text from '$components/Text.svelte';
	//import Welcome from '../components/Welcome.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>


{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
  <!--{#if ix == 0}
  {/if}-->
{/each}
