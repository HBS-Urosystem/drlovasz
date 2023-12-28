<script lang="ts">
	import Comps from '$components/Comps.svelte';
	//import Text from '$components/Text.svelte';
	//import Welcome from '../components/Welcome.svelte';
	//import { PortableText } from '@portabletext/svelte';
	//import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

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
<aside class="mx-auto my-8 text-center">
  <date class="text-sm text-accent-content">Frissítve: 
    {formatDate(data._updateAt || data._createdAt)}
  </date>
</aside>
