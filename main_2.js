//Задача 2. Создание карточки студента c использованием объекта
let studentObj = {
    name: 'Ваня',
    age:  17
}

function createStudentCard(name, age){
let newDiv = document.createElement('div');
let h2 = document.createElement('h2');
let span = document.createElement('span');
h2.textContent = name; // вставляем в <h2> текст из свойства name объекта studentObj
span.textContent = `Возраст: ${age} лет`;  // вставляем в <span> строку "Возраст: 17 лет"
document.body.append(newDiv);
newDiv.classList.add('block');
newDiv.append(h2);
h2.classList.add('title');
newDiv.append(span);
span.classList.add('age');
}

createStudentCard(studentObj.name, studentObj.age); // вызываем функцию, передавая имя и возраст из объекта studentObj