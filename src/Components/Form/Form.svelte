<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  let word = ''
  let error = ''
  
  const onSubmit = e => {
    e.preventDefault();
    dispatch('submitword', word)
    word = ''
  }
 </script>
  
 <form class='input-container'>
  <input 
    type='text' 
    placeholder="enter your word" 
    bind:value={word}
  >
  {#if !word}
  <button 
    class='disabled-go' 
    type='submit'
    disabled
  >
    go
  </button>
  {:else}
  <button 
    class='go' 
    type='submit'
    on:click={onSubmit}
  >
    go
  </button>
  {/if}
 </form>
  
 <style>
  .input-container {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  input {
    margin: 1em;
    width: 10em;
    height: 3em;
    border: none;
    font-family: 'Quicksand';
    font-size: xx-large;
    color: #091543;
  }
  .go {
    width: 4em;
    height: 3em;
    background-color: #00C853;
    color: white;
    font-weight: bold;
    margin: 0;
    text-align: center;
    font-size: x-large;
    font-family: 'Quicksand';
  }
  .disabled-go {
    width: 4em;
    height: 3em;
    background-color: grey;
    color: white;
    font-weight: bold;
    margin: 0;
    text-align: center;
    font-size: x-large;
    font-family: 'Quicksand';
  }
 </style>
 