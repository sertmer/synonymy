<script>
  import Synonym from '../Synonym/Synonym.svelte';
  export let synonyms
  export let originalWord

  const getSynonyms = (e) => {
		originalWord = e.detail
		fetch(
		 `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${originalWord}?key=67f08311-bb1f-477c-bd38-cc6dfb68104d`
		)
		.then(res => res.json())
		.then(data => synonyms = data[0].meta.syns[0])
		.catch(err => console.log(err))
	}
</script>

<h2>Synonyms for {originalWord}</h2> 
<div class="container">
  {#each synonyms as word}
  <Synonym 
    on:getsecondarysynonyms={getSynonyms}
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