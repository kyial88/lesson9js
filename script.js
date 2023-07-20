const handleResponse=() => {
        fetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(data => {
            fetch("https://swapi.dev/api/vehicles/14/")
                .then(response=>response.json())
                .then(vehicles =>{
                  fetch('https://swapi.dev/api/starships/22/')
                      .then(response => response.json())
                      .then( starships => alert(`hello ${data.name} ${data.birth_year} ${vehicles.name} ${starships.name}`))
                })
        })
            .catch(error => console.log(error))
}

handleResponse()


// function handleName (array) {
//     let find = document.getElementById('Асман');
//     find.style.background = 'blue';
//
// }
// console.log()
//
// alert(find)