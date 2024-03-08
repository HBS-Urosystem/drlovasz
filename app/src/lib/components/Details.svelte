<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { PortableText } from '@portabletext/svelte';
	import internalLink from '$lib/utils/internalLink.svelte';
	import Link from '$lib/utils/Link.svelte';
  import DefaultListItem from '$lib/utils/DefaultListItem.svelte'

	export let content: PageData;
	export const ix: Number = 0;

  const formatBody = { /// TODO: move to utils and import
    marks: {
      internalLink: internalLink,
      link: Link,
    },
    listItem: {
      normal: DefaultListItem,
      bullet: DefaultListItem,
      number: DefaultListItem
    },
  }
  //console.log({content})
</script>


  {#if content.details}
  <section class="prose gap-x-8 gap-y-0 card max-w-prosee text-base-content bg-neutral">
    <div class="card-body collapse collapse-arrow">
      <input type="checkbox" name="details" /> 
      <p class="collapse-title">
        {content.summary}
      </p>
      <div class="collapse-content text-sm"> 
        <PortableText value={content.details} components={formatBody}/>
      </div>
    </div>
  </section>
  {:else}
  <section class="prose gap-x-8 gap-y-0 card max-w-prosee bg-base-200 text--neutral-content">
    <p class="card-body">{content.summary}</p>
  </section>
  {/if}

  <style>
    /*.collapse[open] > .collapse-title, .collapse-open > .collapse-title, .collapse:focus:not(.collapse-close) > .collapse-title, .collapse:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title, .collapse:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title {
      font-weight: bold;
    }*/
  </style>