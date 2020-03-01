<script>
	import Header from '../Header/Header.svelte';
	import Form from '../Form/Form.svelte';
	import SynonymContainer from '../SynonymContainer/SynonymContainer.svelte';
</script>

<main>
 <Header />
 <Form />
 <SynonymContainer />
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>