<script lang="ts">
	import type { PageData } from '../../routes/$types';
	export let content: PageData;
	//export let ix: Number;
  //console.log({content})
  let ext = content.href.indexOf('http') > -1;
</script>

<aside class="mx-auto text-center">
  <a href={content.href} rel={ext ? 'extarnal noopener' : ''} target={ext ? '_blank' : ''}>
    <button class="btn">
      [&thinsp;{content.text}&thinsp;▶︎]
    </button>
  </a>
</aside>
