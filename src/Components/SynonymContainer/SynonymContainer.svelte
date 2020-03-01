<script>
  import Synonym from '../Synonym/Synonym.svelte';
  let synonyms = [
    'hey',
    'guy',
    'sure',
    'hope',
    'yr',
    'life',
    'is',
    'nice',
    'hey',
    'guy',
    'sure',
    'hope',
    'yr',
    'life',
    'is',
    'nice',
    'hey',
    'guy',
    'sure',
    'hope',
    'yr',
    'life',
    'is',
    'nice',
  ]
</script>

<div class="container">
  {#each synonyms as word}
  <Synonym 
    word={word}
  />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    overflow: auto;

  }
</style>