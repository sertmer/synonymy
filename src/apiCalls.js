export const fetchSynonyms = (originalWord) => {
  return fetch(
    `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${originalWord}?key=67f08311-bb1f-477c-bd38-cc6dfb68104d`
  )
    .then(res => {
      if (!res.ok) {
        throw Error('Error fetching synonyms')
      }
      return res.json()
    })
}