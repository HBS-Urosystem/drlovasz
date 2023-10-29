<script lang="ts">
	import Comps from '$components/Comps.svelte';
	//import Text from '$components/Text.svelte';
	//import Welcome from '../components/Welcome.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>


{#each data.pageBuilder as content, ix}
  <Comps {content} {ix}/>
  {#if ix == 1}
    <aside class="mx-auto text-center">
      <date class="text-sm">Frissítve: 
        {formatDate(data._updateAt || data._createdAt)}
      </date>
    </aside>
  {/if}    
{/each}
