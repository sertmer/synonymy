import { fetchSynonyms } from './apiCalls';

describe('apiCalls', () => {

  describe('fetchSynonyms', () => {
    let mockResponse, mockOriginalWord 

    beforeEach(() => {
      mockResponse = {
        data: [
          {
            meta: {
              syns: [
                [
                  'bootlick',
                  'fawn',
                  'fuss',
                  'kowtow'
                ]
              ]
            }
          }
        ]
      }

      mockOriginalWord = 'apple'

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      fetchSynonyms(mockOriginalWord)

      expect(window.fetch).toHaveBeenCalledWith(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${mockOriginalWord}?key=67f08311-bb1f-477c-bd38-cc6dfb68104d`)
    })

    it('should return an object containing the images and info', () => {
      expect(getNasaImages()).resolves.toEqual(mockResponse)
    })

    it.skip('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getNasaImages()).rejects.toEqual(Error('error fetching nasa images'))
    })

    it.skip('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getNasaImages()).rejects.toEqual(Error('fetch failed'))
    })
  })
})