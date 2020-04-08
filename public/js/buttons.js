
const no = document.getElementById(`nono`)

const yes = document.getElementById(`yes`)

// no.onclick = () => {
//     event.preventDefault()
//     console.log(`buttsnstuff`)
// }

no.addEventListener("click", () => {
    event.preventDefault()
    console.log(`buttsnstuff`)
    find()
})  