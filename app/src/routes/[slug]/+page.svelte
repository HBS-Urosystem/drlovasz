<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import internalLink from '$lib/utils/internalLink.svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
  import { setContext } from 'svelte'


	export let data: PageData;
  //setContext('data', { data });

  const formatBody = {
    marks: {
      internalLink: internalLink,
      /*link: ({value, children}) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = value
        return blank ?
          `<a href=${href} target="_blank" rel="noopener">{children}</a>
          ` : `<a href=${href}>{children}</a>
          `
      }*/
    }
  }
</script>

<article class="post prose gap-xx-0 gap-y-0">

  {#if !!data.mainImage}
    <figure class="mainimg">
      <img
        class="post__contains"
        src={urlFor(data.mainImage).url()}
        alt="Cover image for {data.title}"
      />
    </figure>
  {:else}
    <p class="post__cover--none" />
  {/if}

    <h1 class="post__title">{data.title}</h1>
    {#if data.excerpt}<p class="post__excerpt">{data.excerpt}</p>{/if}
    <header>
      <h2 class="post__title">{data.title}</h2>
      {#if data.excerpt}<p class="post__excerpt">{data.excerpt}</p>{/if}
      {#if data.cta}
      <aside>
        <a href={`${data.cta.link}`}>[&thinsp;<button>{data.cta.text}]</button></a>
      </aside>
      {/if}
    </header>
    <date class="post__date text-sm">Frissítve: 
      {formatDate(data._createdAt)}
    </date>
    <PortableText value={data.body} components={formatBody} />
</article>

<style>
</style>

<!--<style data-global>
.post__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32ch, 1fr));
  grid-auto-flow: dense;
}
:global(.post__content) > * {
  margin-inline: auto;
  /* max-width: max(100%,29ch); */
  padding: 0 1vw;
  box-sizing: content-box;
  transition: all .25s;
  /* position: relative; */
  display: block;
  border-radius: 0.35rem;
  background-color: aliceblue;
  box-shadow: var(--shadow) 0 0 0.5rem;
}

</style>-->