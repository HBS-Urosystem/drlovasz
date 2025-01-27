<script lang="ts">
	import Comps from '$components/Comps.svelte';
	// import Updated from '$components/Updated.svelte';
	import type { PageData } from './$types';

  //import { onMount } from 'svelte'
  //import { page } from '$app/stores';
	export let data: PageData;
  /*onMount(() => {
    //document.querySelector('html').lang = $page.data.language
    console.log($page.data.language)
	})*/
</script>

{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
{/each}
<!-- <Updated {data}/> -->
