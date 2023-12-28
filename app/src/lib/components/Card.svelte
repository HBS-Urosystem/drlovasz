<script lang="ts">
	import Comps from '$components/Comps.svelte';
	import type { PageData } from '../../routes/$types';

  export let content: PageData;
	let ix: Number;

  //console.log(content)
</script>

<section class="card bg-neutral tw-prose-bold t-ext-neutral-content max-w-prose" class:min-[840px]:hidden={content.mobile}>
  <div class="card-body">
    {#if content.title}
      <div class="prose card-title">
        {#if ix == 0}
          <h1 class="font-semibold">{content.title}</h1>
        {:else}
          <h2 class="font-medium">{content.title}</h2>
        {/if}
      </div>
    {/if}
    {#each content.pageBuilder as c, ix}
      <Comps content={c} ix={0}/>
    {/each}
  </div>
</section>

<style>
  /*:global(article + h1) {

  }*/
  /*.card {
    width: 100%;
  }*/
  /*.card-body {
    max-width: max-content;
    margin-inline: auto;
  }*/

  .card-title {
    margin-block-end: .75rem;
  }

</style>