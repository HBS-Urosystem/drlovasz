<script lang="ts">
  import { formatDate } from '$lib/utils';
	import type { PageData } from '../../routes/$types';

	export let data: PageData;
</script>

<aside class="mx-auto text-center">
  <date class="text-sm">Frissítve: 
    {formatDate(data._updateAt || data._createdAt)}
  </date>
</aside>
