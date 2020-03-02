<script>
  import Synonym from '../Synonym/Synonym.svelte';
  export let synonyms
  export let originalWord
</script>

<h2>Synonyms for {originalWord}</h2> 
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
  h3 {
    font-family: 'Quicksand';
  }

</style>