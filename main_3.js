//Задача 3. Создание списка с карточками студентов
let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

// Объявляем функцию, которая создаёт список студентов на основе переданного массива
function createStudentsList(listArr){ // listArr - это параметр, в который попадает то, что передаем при вызове: createStudentsList(allStudents);
let ul = document.createElement('ul');   // Создаём элемент <ul>, который будет обёрткой для всех карточек. Это контейнер, который создаётся один раз
ul.classList.add('wrapper');

for(let i = 0; i < listArr.length; i++){ // Запускаем цикл по массиву студентов
let li = document.createElement('li');   // Создаём элемент <li> — карточку одного студента
li.classList.add('block');   // Добавляем класс 'block' для стилизации карточки
let h2 = document.createElement('h2');  // Создаём заголовок <h2> для имени студента
let span = document.createElement('span');  // Создаём элемент <span> для возраста студента

h2.textContent = listArr[i].name;  // Заполняем <h2> именем текущего студента
h2.classList.add('title'); // Добавляем класс 'title' для стилизации имени

span.textContent = "Возраст: " + listArr[i].age + " лет";  // Заполняем <span> текстом с возрастом студента
span.classList.add('age');

// Вставляем <h2> и <span> внутрь <li>
li.append(h2);
li.append(span);
ul.append(li); // Вставляем <li> внутрь <ul>
}
// Почему document.body.append(ul) стоит после цикла, а не внутри?
// ✅ 1. <ul> — это контейнер, который создаётся один раз
// Он должен существовать как пустой список, в который ты будешь добавлять <li>.
// Если бы ты вставляла <ul> в body внутри цикла, то:
// на каждой итерации ты бы пыталась снова вставить один и тот же <ul>
// браузер бы просто перемещал его, но это бессмысленно
// логика нарушается: <ul> должен быть добавлен в DOM один раз
// ✅ 2. В цикле создаются только элементы, которые повторяются — <li>
// ✅ 3. Вставлять <ul> после цикла — логично и чисто
// ✅ 4. Вставка в DOM — дорогая операция
// Каждый append в document.body — это перерисовка страницы.
// ✅ 5. Это стандартный паттерн DOM‑построения
document.body.append(ul); // После цикла вставляем весь <ul> в <body> страницы
// return здесь не нужен, функция создаёт DOM-элементы и ничего не вычисляет
}

createStudentsList(allStudents); // Вызываем функцию, передавая ей массив студентов


// Как получить имя и возраст второго студента
console.log(allStudents[1].name); // Способ 1. Через доступ к свойствам объекта (самый правильный)
console.log(allStudents[1].age);
console.log();

let {name, age} = allStudents[1]; // Способ 2. Через деструктуризацию
console.log(name);
console.log(age);
console.log();

let student = allStudents[1]; // Способ 3. Через временную переменную
console.log(student.name);
console.log(student.age);
console.log();

function showStudent({name, age}){ // Способ 4. Через деструктуризацию прямо в параметрах функции (Это уже уровень «как в React»)
    console.log(name, age);
}

showStudent(allStudents[1]);    



//Задача 3. Вариант 2. Создание списка карточек студентов  
let allStudents2 = [
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

function createStudentsList (listArr) { // Объявляем функцию, которая принимает массив студентов и создаёт список карточек
    let ul = document.createElement ('ul'); // Создаём элемент <ul>, который будет контейнером для всех карточек
    ul.classList.add('wrapper');

    let text = "Возраст:";  
   
    for (let student of listArr) {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        let span = document.createElement('span');
        
        li.classList.add('block');
        h2.classList.add('title');
        span.classList.add('age');

        h2.textContent = student.name;
        // склонение
        let result; // Переменная для правильного склонения слова "год"
        let count = student.age % 100; // Берём последние две цифры возраста
        if (count >= 11 && count <= 14) { // Проверяем исключения 11–14
            result = 'лет';
        }else {
            count = student.age % 10; // Берём последнюю цифру возраста
            if (count === 1) { // Определяем правильное окончание
                result =  'год';
            }else if(count >= 2 && count <= 4) {
                result =  'года';
            }else {
                result =  'лет';
            }
        }
        span.textContent =  `${text} ${student.age} ${result}`; // Формируем текст возраста с правильным склонением

        li.append(h2);
        li.append(span);
        ul.append(li);
    }
        document.body.append(ul);
        
// return listArr в этой функции не нужен. Функция ничего не вычисляет — она создаёт DOM‑элементы
  
}

    createStudentsList (allStudents2);