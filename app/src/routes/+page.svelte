<script lang="ts">
	import Comps from '$components/Comps.svelte';
	// import Updated from '$components/Updated.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
{/each}
<!-- <Updated {data}/> -->
