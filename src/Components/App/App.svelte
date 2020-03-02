<script>
	import Header from '../Header/Header.svelte';
	import Form from '../Form/Form.svelte';
	import SynonymContainer from '../SynonymContainer/SynonymContainer.svelte';
	
	let synonyms = []
	let originalWord = ''

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
	
 <main>
 <Header />
 <Form on:submitword={getSynonyms}/>
 {#if synonyms.length}
 <SynonymContainer originalWord={originalWord} synonyms={synonyms}/>
 {:else}
 <p>Search for a word to view synonyms</p>
 {/if}
 </main>
	
 <style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	
	p {
		font-family: 'Quicksand';
		font-size: xx-large;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
 </style>