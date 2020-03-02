<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let word

  const clickHandler = e => {
    e.preventDefault();
    dispatch('getsecondarysynonyms', word)
  }
</script>

<div on:click={clickHandler}>
  <p>{word}</p>
</div>

<style>
  div {
    margin: 1.5em;
    background-color: #091543;
    color: whitesmoke;
    border-radius: 3px;
    width: 19%;
    font-family: 'Quicksand';
    font-size: x-large;
    font-weight: bold;
    padding: .25em;
  }
</style>