<script lang="ts">
	import '$src/app.postcss';
  //import { dev } from '$app/environment'
  import { page } from '$app/stores';
	import Themes from '$components/Themes.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

  $: lang = $page.data.language
  $: nav = data.navs.find(n => n.language == lang && n.slug?.current == 'main')
  $: translation = $page.data.translation[0]?.slug == 'index' ? '' : $page.data.translation[0]?.slug
</script>

<div class="navbar top-0 min-[840px]:-top-8 h-12 min-[840px]:h-24 gap-2 border-b-2 bg-primary">
  <!--<label class="swap absolute top-0 right-0">
    <input bind:checked={langswap} type="checkbox" />
    <a class="swap-on" href={translation}>EN</a>
    <a class="swap-off" href={translation}>HU</a>
  </label>-->
  <button class="swap btn btn-sm absolute top-0 right-0">
    <a href=/{translation || (lang == 'en' ? '' : 'en')} class="uppercase">{lang} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    </a>
  </button>

  <nav class="hidden min-[840px]:flex justify-center text-xl">
    <span>{nav.title}</span>
  </nav>

  <nav class="mx-auto text-primary-content justify-between">
    <!--<a href="/" class="flex-none btn btn-sm normal-case text-xl hover:btn-primary border-primary hover:border-base-100 font-normal p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height="24" width="24"><g id="home-1--home-house-roof-shelter"><path id="Vector 1" stroke="#000000" d="M20.625 20.625H1.875V10.3125l9.375 -8.4375 9.375 8.4375v10.3125Z" stroke-width="1.5"></path></g></svg>
    </a>-->

    <ul class="hidden min-[840px]:flex flex-1 menu menu-horizontal !justify-center menu-sm font-medium gap-4">
      {#each nav.pageBuilder as n}
        <li><a tabindex="0" class="btn btn-xs bg-neutral bg-neutral" href="/{n.link == 'index' ? '' : n.link}">{n.text}</a></li>
      {/each}
      <!--<li><a tabindex="0" class="btn btn-xs bg-neutral bg-neutral" href="/">Kezdőlap</a></li>
      <li><a tabindex="0" class="btn btn-xs bg-neutral" href="eletrajz">Szakmai életrajz</a></li>
      <li><a tabindex="0" class="btn btn-xs bg-neutral" href="talalmanyok">Találmányok</a></li>
      <li><a tabindex="0" class="btn btn-xs bg-neutral" href="ic-bps">IC/BPS</a></li>
      <li><a tabindex="0" class="btn btn-xs bg-neutral" href="publikaciok">Publikációk</a></li>
      <li><a tabindex="0" class="btn btn-xs bg-neutral" href="rendeles">Rendelési idők</a></li>-->
    </ul>

    <div class="min-[840px]:hidden text-xl">Dr. Lovász Sándor Ph.D</div>
    <div class="dropdown dropdown-end ml--auto min-[840px]:hidden">
      <div role="button" tabindex="0" aria-label="Dropdown menu" class="btn btn-ghost btn-sm p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul class="menu menu-sm dropdown-content mt-2 z-[999] p-2 shadow bg-primary rounded-box rounded-t-none join join-vertical">
        {#each nav.pageBuilder as n}
          <li><a tabindex="0" href="/{n.link == 'index' ? '' : n.link}">{n.text}</a></li>
        {/each}
        <!--<li><a tabindex="0" href="/">Kezdőlap</a></li>
        <li><a tabindex="0" href="eletrajz">Szakmai életrajz</a></li>
        <li><a tabindex="0" href="talalmanyok">Találmányok</a></li>
        <li><a tabindex="0" href="ic-bps">IC/BPS</a></li>
        <li><a tabindex="0" href="publikaciok">Publikációk</a></li>
        <li><a tabindex="0" href="rendeles">Rendelési idők</a></li>-->
      </ul>
    </div>
  </nav>
</div>

<main class="mb-12 p-2">
	<slot />
</main>


<footer class="footer footer-center flex-nowrap p-4 bg-primary text-base-content">
  <div>
    <p class="mx-auto w-max">
      Made with <svg
        data-sanity-icon="heart-filled"
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.2"
        /></svg
      >&nbsp;at&nbsp;<a href="https://www.urosystem.com/hu">UroSystem</a>
    </p>
  </div>
</footer>

<!--{#if dev}-->
  <!--<Themes/>-->
<!--{/if}-->


<style type="postcss">
  /*footer {
    display: none;
  }*/
	.navbar {
    position: sticky;
    /*top: -2rem;*/
    z-index: 999;
    font-weight:bold;
    flex-direction: column;
	}
	nav {
    max-width: 90ch;
    width: 100%;
    /*justify-content: space-between;*/
	}
  nav ul {
    justify-content: end;
    width: max-content;
    text-transform: uppercase;
  }

  /*nav > a {
    margin-top: -1rem;
  }*/

  /*li:last-child > a {
    padding-right: 0;
  }*/

  .swap {
    padding: var(--navbar-padding, 0.5rem);
  }
  .btn {
    line-height: 1rem;
    background: none;
    border: none;
  }

</style>
