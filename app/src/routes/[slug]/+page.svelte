<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.desc} />
  <meta name="keywords" content={data.keywords} />
</svelte:head>

{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
{/each}
<aside class="mx-auto my-8 text-center text-accent-content">
  <date class="text-sm">Frissítve: 
    {formatDate(data._updateAt || data._createdAt)}
  </date>
</aside>
