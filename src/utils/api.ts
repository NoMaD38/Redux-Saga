export const getCharacters = async () => {
    return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) =>response.json())
    .then((res) => res.results)
  };

export const getLocations = async () => {
  return fetch('https://rickandmortyapi.com/api/location/')
    .then((response) => response.json())
    .then((res) => res.results)
}
  
export const getEpisodes = async () => {
  return fetch('https://rickandmortyapi.com/api/episode/')
    .then((response) => response.json())
    .then((res) => res.results)
}