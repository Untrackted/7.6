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



//Задача 4. Вариант 2. Создание списка с карточками студентов при клике на кнопку «Показать / Скрыть список»


    




