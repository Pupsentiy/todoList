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
    //нуб нужно пофиксить сохранение элементов 10,02,22
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
        inp.style.display = 'none'
        butt.style.display = 'none'
    });
    // element.contentEditable = true
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
        // li.setAttribute('contenteditable', 'true')
    out.prepend(li)
    input.value = ''
}

function createListElement(textValue) {
    const checkbox = createChekbox()
        // const icon = createIcon()
    const text = createText(textValue)
    const del = creatDelet()
    const li = createListItem()
    li.append(checkbox, text, del)
    return li;
}

function createListItem() {
    const li = document.createElement('li')
        // li.classList.add('les', "lis")
    return li;
}

function creatDelet() {
    const del = document.createElement('button')
        // del.appendChild(document.createTextNode('delete'))
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



// function cheked() {
//     const res = document.querySelector('li')
//     const ul = document.querySelector('.completed')
//     ul.append(res)

// }

// function nochecked() {
//     const res2 = document.querySelector('li')
//     const ulu = document.querySelector(".out")
//     ulu.append(res2)
// }


// completed.addEventListener('click', (event) => {
//     if (event.target.classList.contains('delete')) {
//         removeTodo(event.target)
//     }
//     if (event.target.classList.contains('chk')) {
//         nochecked()

//     }
// })

//по чекбоксу перечеркнуть ли




// function createIcon() {
//     const icon = document.createElement('i')
//     icon.classList.add("fa", "fa-trash-o", "de")
//     return icon;
// }



// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     nul += element



// }
// input.addEventListener("input", ButtonED);

// function ButtonED() {
//     if (!input.value.length) {
//         addTask.disabled = true;
//     } else {
//         addTask.disabled = false;
//     }
// }
// ButtonED()


// const addbtn = document.querySelector('#addbtn2')

// addbtn.addEventListener('click', () => {
//     inputAdd()
// })

// function inputAdd() {
//     const dew = document.querySelector('.completed')
//     const inpt = input.value
//     const ivi = document.createElement('div')
//     ivi.innerText = inpt
//     dew.append(ivi)

//for / через методы 




// }
// if (input.value !== '') {
//     addTask.disabled = false
// } else {
//     addTask.disabled = true
// }

// input.value.length < 1 ? addTask.disabled = true : addTask.disable = false

// input.addEventListener('input', (e) => {
//     if (!e.target.value.length) {

//         document.querySelector('#btn').setAttribute('disabled')
//     } else {

//         document.querySelector('#btn').removeAttribute('disabled')
//     }
// })