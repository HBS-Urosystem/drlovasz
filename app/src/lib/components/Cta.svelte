<script lang="ts">
	import type { PageData } from '../../routes/$types';
	export let content: PageData;
	//export let ix: Number;
  //console.log({content})
  let ext = content.href.indexOf('http') > -1;
</script>

<aside class="mx-auto text-center">
  <a href={content.href} rel={ext ? 'extarnal noopener' : ''} target={ext ? '_blank' : ''}>
    <button class="btn btn-sm bg-primary text-primary-content hover:text-accent-content hover:bg-accent">
      {content.text}
    </button>
  </a>
</aside>

<!--
  <button class="btn btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path fill="none" stroke="#000" stroke-miterlimit="10" d="M10 2C6.7 2 4 4.8 4 8.2c0 2.7 3.6 7.4 5.2 9.4.4.5 1.1.5 1.5 0 1.6-2 5.2-6.8 5.2-9.4C16 4.8 13.3 2 10 2zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
  </svg>
  Térkép
</button>
-->
