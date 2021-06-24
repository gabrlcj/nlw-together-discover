import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botoes com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

//Pegar todos os botoes com a classe delete
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})


function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'

    modalTitle.innerHTML = `${text} essa pergunta`
    modalText.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} está pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
    const slug = check ? 'check' : 'delete'

    // Alterando o action do nosso form, para devolver os valores descritos
    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    
    modal.open()
}