const mammalDetail = document.getElementById("mammal-detail")

const displayAnimals = () => {
    fetch("http://localhost:3000/Mammals")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((mammal) => {
            renderMammal(mammal)
        })
    })
}


displayAnimals()