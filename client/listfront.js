const baseURL = 'http://localhost:4000'

const kayaksContainer = document.querySelector('#kayaks-container')
const form = document.querySelector('form')
const postBtn = document.querySelector('#postBtn')
const farewellBtn = document.querySelector('#farewellBtn')


const errCallback = err => console.log(err)

const kayaksCallback = ({ data: kayaks }) => displayKayaks(kayaks)

const deleteKayak = id => axios.delete(`${baseURL}/kayak/${id}`).then
(kayaksCallback).catch(errCallback)

const postKayak = (e) => {
    e.preventDefault()
    const websiteInput = document.querySelector('#websiteInput')
    const imageInput = document.querySelector('#imageInput')
    const priceInput = document.querySelector('#priceInput')


    const kayakBody = {
        website: websiteInput.value,
        image: imageInput.value,
        price: priceInput.value
    }

    axios.post(`${baseURL}/kayak`, kayakBody)
        .then((res) =>{
            displayKayaks(res.data)
            console.log(res.data)
        })
}

const createKayakCard = (kayak) => {
    const kayakCard = document.createElement('div')
    const deleteBtn = document.createElement('button')

    kayakCard.classList.add('kayak-card')

    kayakCard.innerHTML = `<img alt='kayak cover image' src=${kayak.image}
    class="kayak-cover-image"/>
    <a class="website" href=${kayak.website} target="_blank">Purchase Link</a>
    <div class= "btns-container">
        <p class="kayak-price">${kayak.price}</p>
        </div>
        `
        deleteBtn.addEventListener('click', () => deleteKayak(kayak.id))
        deleteBtn.textContent = "Delete"
        kayakCard.appendChild(deleteBtn)
        kayaksContainer.appendChild(kayakCard)

}

const displayKayaks = (arr) => {
    kayaksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createKayakCard(arr[i])
    }
}

const farewellBtnFunc = () => {
    alert("Thank you for choosing to learn kayaking with me! I hope you enjoyed my site and share it with others so they can enjoy kayaking too!")
}


postBtn.addEventListener('click', postKayak)

farewellBtn.addEventListener('click', farewellBtnFunc)
