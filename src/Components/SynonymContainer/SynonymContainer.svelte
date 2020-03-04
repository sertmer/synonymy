<script>
  import Synonym from '../Synonym/Synonym.svelte';
  import { fetchSynonyms } from '../../apiCalls.js';
  export let synonyms
  export let originalWord

  const getSecondSynonyms = (e) => {
		originalWord = e.detail
		return fetchSynonyms(originalWord)
		.then(data => synonyms = data[0].meta.syns[0])
		.catch(err => console.log(err))
	}
</script>

<h2>Synonyms for {originalWord}</h2> 
<div class="container">
  {#each synonyms as word}
  <Synonym 
    on:getsecondarysynonyms={getSecondSynonyms}
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
  h2 {
    font-family: 'Quicksand';
  }

</style>