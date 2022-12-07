const formulario = document.getElementById("busqueda");
const inputNombre = document.getElementById("nombre");
const divResultados = document.querySelector(".resultados");
const urlCharacters = "https://rickandmortyapi.com/api/character/"

async function getCharactersByName(name)
{
    const urlFetch = urlCharacters + "?name=" + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}


formulario.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombre.value.trim();
    getCharactersByName(name)
        .then(characters => {
            console.log(characters)

            characters.results.forEach(element => {
                console.log(element.name);
            });
        });
});
