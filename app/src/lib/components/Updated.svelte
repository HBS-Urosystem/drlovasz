<script lang="ts">
  import { formatDate } from '$lib/utils';
	import type { PageData } from '../../routes/$types';

	export let data: PageData;
</script>

<aside class="mx-auto my-8 text-center">
  <date class="text-sm text-accent-content">
    {#if data.language == 'hu'}Frissítve: {:else}Updated at: {/if}
    {formatDate(data._updatedAt || data._createdAt, data.language)}
    <!--{data._updatedAt}-->
  </date>
</aside>
