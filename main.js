const input = document.querySelector('#inp');
const addTask = document.querySelector('#btn');
const out = document.querySelector('.out');
const completed = document.querySelector('.completed');

function cheked(element) {
    const chek = element.parentNode
    completed.append(chek)

}

function unchecked(element) {
    const unchek = element.parentNode
    out.append(unchek)
}

completed.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        removeTodo(event.target)
    }
    if (event.target.type === 'checkbox') {
        unchecked(event.target)
    }
    if (event.target.classList.contains('textLi')) {
        edit(event.target)
    }

})

let butt = document.querySelector('.buttonSave') || null;

function edit(element) {
    const pText = element.innerText
    let LiLi = element.parentNode
    const inputText = document.createElement('input')
    const buttSave = document.createElement('button')
    buttSave.classList.add('buttonSave')
    buttSave.innerHTML = 'X'
    LiLi.firstChild.insertAdjacentElement('afterEnd', buttSave)
    inputText.classList.add("inpText")
    LiLi.firstChild.insertAdjacentElement('afterEnd', inputText)
    inputText.value = pText
    element.innerText = ''
    butt = document.querySelector('.buttonSave')

    butt.addEventListener('click', () => {
        const inp = document.querySelector('.inpText')
        const textEdit = inputText.value
        let el = element
        el.innerText = textEdit
        LiLi.firstChild.insertAdjacentElement('afterEnd', el)
        inp.remove()
        butt.remove()
    });
}

out.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        removeTodo(event.target)
    }
    if (event.target.classList.contains('chk')) {
        cheked(event.target)
    }
    if (event.target.classList.contains('textli')) {
        edit(event.target)
    }
})

function removeTodo(element) {
    element.parentNode.remove()
}

function addTodo() {
    const inpValue = input.value;
    const li = createListElement(inpValue)
    out.prepend(li)
    input.value = ''
}

function createListElement(textValue) {
    const checkbox = createChekbox()
    const text = createText(textValue)
    const del = creatDelet()
    const li = createListItem()
    li.append(checkbox, text, del)
    return li;
}

function createListItem() {
    const li = document.createElement('li')
    return li;
}

function creatDelet() {
    const del = document.createElement('button')
    del.classList.add("delete")
    del.innerText = 'delete'
    return del;
}

function createChekbox() {
    const checkbox = document.createElement('input')
    checkbox.classList.add("chk")
    checkbox.setAttribute('type', 'checkbox')
    return checkbox;
}

function createText(text) {
    const textValue1 = document.createElement('p')
    textValue1.classList.add('textli')
    textValue1.innerText = text
    return textValue1;
}

addTask.addEventListener('click', () => {
    if (!input.value) {
        return
    }
    addTodo()
})



