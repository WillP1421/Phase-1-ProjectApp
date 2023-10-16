const animalKingdom = document.getElementById("Mammals")

const displayAnimals = () => {
    fetch("http://localhost:3000/Mammals")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((mammal) => {
        })
    })
}

displayAnimals()