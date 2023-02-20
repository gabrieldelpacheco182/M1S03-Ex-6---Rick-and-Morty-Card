async function search() {
    const response = await fetch('https://rickandmortyapi.com/api/character/215')
    const data = await response.json()
    console.log(data)
    document.getElementById('name').innerHTML = data?.name
    document.getElementById('status').innerHTML = data?.status
    document.getElementById('specie').innerHTML = data?.species
    document.getElementById('figura').innerHTML = data?.image
}
search();
