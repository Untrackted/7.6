//Задача 1.Создание карточки студента
let name = 'Игорь';
let age =  17;

function createStudentCard (name, age) { // объявляем функцию createStudentCard с параметрами name и age
  let newDiv = document.createElement('div'); // создаём новый элемент <div>
  let h2 = document.createElement('h2');
  let span = document.createElement('span');
  h2.textContent = name; // вставляем в <h2> текст из параметра name
  span.textContent = "Возраст: " + age + " лет"; // вставляем в <span> текст из параметра age
  document.body.append(newDiv); // добавляем созданный <div> в конец <body> страницы
  newDiv.classList.add('block'); // добавляем CSS‑класс "block" к <div>
  newDiv.append(h2); // вставляем <h2> внутрь <div>
  h2.classList.add('title'); // добавляем CSS‑класс "title" к <h2>
  newDiv.append(span);  // вставляем <span> внутрь <div>
  span.classList.add('age'); // добавляем CSS‑класс "age" к <span>
}


createStudentCard (name, age); // вызываем функцию: создаём карточку студента с именем "Игорь" и возрастом из переменной age






