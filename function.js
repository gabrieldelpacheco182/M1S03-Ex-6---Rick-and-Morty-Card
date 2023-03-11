async function search() {
    let personagem = document.getElementById('personagem').value;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`)
    const data = await response.json()
    console.log(data)
    document.getElementById('name').innerHTML = data?.name
    document.getElementById('status').innerHTML = data?.status
    document.getElementById('specie').innerHTML = data?.species
    document.getElementById('figura').src = data?.image
}

