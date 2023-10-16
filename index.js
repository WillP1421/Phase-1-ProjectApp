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
const renderMammal = (mammal) => {
    const mammalImg = document.createElement('img')
    const mammalDiv = document.createElement('div')

    mammalImg.src = mammal.image_url
    mammalImg.alt = "photo of mammal"
mammalImg.addEventListener("click", () => {
    const detailImage = document.querySelector(".detail-image")
    detailImage.src = mammal.image_url;

    const mammalName = document.querySelector('.name')
    mammalName = mammal.name
    
    const mammalFacts = document.querySelector(".fun_fact")
    mammalFacts = mammal.fun_fact
})

mammalDiv.appendChild(mammalImg)
mammalDetail.appendChild(mammalDiv)

}

displayAnimals()