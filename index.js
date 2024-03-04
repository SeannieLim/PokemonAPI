function fetchData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    }) //Convert to JSON
    .then(data => {
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }) //Return data of pokemon
    .catch(error => console.error(error));
}

//Using Async and Await to fetch resources
// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json(); // Returns Response 
//         console.log(data);
//         // const pokemonSprite = data.sprites.front_default;
//         // const imgElement = document.getElementById("pokemonSprite");
//         // imgElement.src = pokemonSprite;
//         // imgElement.style.display = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

    /*
    Body : Where data is located
    Ok : True if fetching data was okay
    Status Code : 200 (Successful)
    
    
    
    */