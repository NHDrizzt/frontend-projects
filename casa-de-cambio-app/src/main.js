import '../style.css'
import Swal from 'sweetalert2'

const mainButton = document.querySelector('.input-field')
const mainDiv = document.querySelector('.content-card-container')
const pesquisa = document.querySelector('.pesquisar')
const mainTitle = document.querySelector('.main-title')
const URL = 'https://api.exchangerate.host/latest?base='
mainButton.addEventListener('change', () => {
    console.log(mainButton.value)
})

pesquisa.addEventListener('click', () => {
    mainDiv.innerHTML = ''
    fetch(`${URL}${mainButton.value}`)
        .then((response) => response.json())
        .then((data) => {
            const myKeys = Object.keys(data.rates)
            if(!myKeys.includes(mainButton.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            } else {
                const myValues = Object.values(data.rates)
                const mainH2 = document.createElement('h2')
                mainH2.innerHTML = `Valores referentes a 1 ${mainButton.value}`
                mainTitle.appendChild(mainH2)
                myKeys.forEach((item, index) => {
                    const myEle = document.createElement('div')
                    const firstImg = document.createElement('img')
                    const firstP = document.createElement('p')
                    const secondP = document.createElement('p')
                    myEle.classList.add('card-api')
                    firstImg.src = 'coins-svgrepo-com%201.png'
                    firstP.innerHTML = item
                    secondP.innerHTML = myValues[index]
                    secondP.style.color = '#FFE713';
                    myEle.appendChild(firstImg)
                    myEle.appendChild(firstP)
                    myEle.appendChild(secondP)
                    mainDiv.appendChild(myEle)
                })
            }
        })
        .catch((e) => console.log(e.message))
})




