const TOTALNUMOFPOKEMON = 1015

function fetchPoke(a)
{
    url = `https://pokeapi.co/api/v2/pokemon/${a}`

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
}

fetchPoke(1)

// for(let i=1;i<=TOTALNUMOFPOKEMON;i++)
// {
//     fetchPoke(i)
// }