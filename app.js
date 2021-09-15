let circle = document.querySelectorAll('.circle')

let chat = document.getElementById('chat')

chat.value = 'Type a message ...'
circle.forEach(item => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('active')
        
        if(e.target.id === '1') {
            chat.value = 'I want 30 minute walk please'
            circle[1].classList.remove('active') 
        } else if (e.target.id === '2') {
            chat.value = 'I want 1 hour walk please'
            circle[0].classList.remove('active') 
        }
    })
})