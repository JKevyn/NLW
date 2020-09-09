//Procurar o botão, quando clickar no botão executar uma ação: duplicar os campos.
document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada canto limpar
    fields.forEach(function(field) {

        field.value = ''

    })

    //Colocar os campos na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
