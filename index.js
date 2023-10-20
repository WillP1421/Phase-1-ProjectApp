document.addEventListener("DOMContentLoaded", () => {

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
    mammalName.textContent = mammal.name

    const mammalFacts = document.querySelector(".fun_fact")
    mammalFacts.textContent = ''
     detailImage.addEventListener("mouseover", () => {
    mammalFacts.textContent = mammal.fun_fact;
    
})

   
})


 mammalDiv.appendChild(mammalImg)
mammalDetail.appendChild(mammalDiv)

}
const audio = new Audio("https://cdn.discordapp.com/attachments/1158415233400979667/1164935289836425327/Untitled-video.mp3?ex=65450588&is=65329088&hm=452edda46ec8af5146d7b5d2a53fff237ce5e6520294b3badd746535f909a339&")
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    })
})
const form = document.getElementById("new-animal")

const createAnimal = () => {
    const newAnimal = {
        id:0,
        name: form.name.value,
        image_url:form.image.value,
        fun_fact: form.funFact.value
    }
    renderMammal(newAnimal)
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    createAnimal()
    form.reset()
})
displayAnimals()

})


