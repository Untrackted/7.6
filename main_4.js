//Задача 4. Создание списка с карточками студентов при клике на кнопку
let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

// Ждём, пока HTML-документ полностью загрузится 
// DOMContentLoaded — событие, которое срабатывает, когда браузер построил DOM-дерево 
// Это важно, потому что до этого момента кнопки и другие элементы могут ещё не существовать
document.addEventListener('DOMContentLoaded', function(){
let button = document.querySelector('.btn'); // Ищем кнопку по классу .btn, чтобы повесить на неё обработчик клика
// Объявляем функцию onClick — это обработчик события 
// Она будет запускаться каждый раз, когда пользователь нажимает кнопку
function onClick(){
    createStudentsList(allStudents); // При клике вызываем функцию, которая создаёт список студентов
}
// Вешаем обработчик клика на кнопку 
// Когда пользователь нажмёт кнопку — выполнится функция onClick
button.addEventListener('click', onClick);
});

function createStudentsList(listArr){ // Функция, которая создаёт список карточек студентов
let ul = document.createElement('ul');
ul.classList.add('wrapper');
let text = "Возраст: "; 

for(let student of listArr){
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    h2.textContent = student.name;
    // Логика склонения слова "год"
    let result;
    let count = student.age % 100;
    if(count >= 11 && count <= 14){ // Проверяем исключения 11–14
        result = ' лет';
    }else{
        count = student.age % 10;
        if(count === 1){
            result = ' год';
        } else if(count >= 2 && count <= 4){
            result = ' года';
        }else{
            result = ' лет';
        }
    }
    span.textContent = text + student.age + result; // Формируем текст возраста с правильным окончанием

    li.classList.add('block');
    h2.classList.add('title');
    span.classList.add('age');

    li.append(h2);
    li.append(span);
    ul.append(li);
}
    document.body.append(ul);
   
}



//Задача 4. Вариант 2. Создание списка карточек студентов при клике на кнопку «Показать / Скрыть список»
let allStudents2 = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

// Функция для создания одной карточки студента
function createStudentCard(student){
let li = document.createElement('li');
li.classList.add('block');

let h2 = document.createElement('h2');
h2.classList.add('title');
h2.textContent = student.name;

let span = document.createElement('span');
span.classList.add('age');

// склонение слова "год"
let result;
let count = student.age % 100;
if(count >= 11 && count <= 14){ // Условие если ()
    result = 'лет';
}else{
    count = student.age % 10;
if(count === 1) // Условие если ()
    result = 'год';
else if (count >= 2 && count <= 4){ // Условие иначе если ()
result = 'года';
} else{
    result = 'лет';
}
}

span.textContent = `Возраст: ${student.age} ${result}`;
li.append(h2);
li.append(span);
return li;
}

// Функция для создания списка студентов
function createStudentsList(listArr){
let ul = document.createElement('ul');
ul.classList.add('wrapper');

for(let student of listArr){
ul.append(createStudentCard(student)); 
}
document.body.append(ul);
return ul;
}

// Ждём, пока весь HTML-документ загрузится и будет готов к работе с DOM
document.addEventListener('DOMContentLoaded', function(){
let button = document.querySelector('.btn'); // Находим кнопку по селектору .btn
let ul = null; // Создаём переменную для списка студентов, пока он ещё не создан

button.addEventListener('click', function(){ // Вешаем обработчик события "клик" на кнопку
// Если список ещё не создан (ul === null), создаём его один раз
if(!ul){ // Проверка if (!ul) означает: «если ul пустой (равен null), то создаём список»
// создаём список один раз
ul = createStudentsList(allStudents2); // После этого ul уже хранит ссылку на созданный <ul>. ul уже не null, а объект <ul>
}
// Переключаем класс .show у списка (показать/скрыть)
ul.classList.toggle('show'); 
if(ul.classList.contains('show')){ // Если список показан (имеет класс .show) → меняем текст кнопки
    button.textContent = 'Скрыть список';
}else{
    // Если список скрыт → меняем текст кнопки обратно
    button.textContent = 'Показать список';
}
});
});


    




