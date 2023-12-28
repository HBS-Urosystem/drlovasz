<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when redered
  export let portableText: MarkComponentProps<{
    slug?: { _type: string, current: string }
  }>

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: ({value} = portableText)
  //$: newWindow = value.newWindow || false
</script>

{#if value.slug}
  <a href={value.slug.current}>
    <button><slot /></button>
  </a>
{:else}
  <slot />
{/if}