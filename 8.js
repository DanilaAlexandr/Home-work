/*
Напишите код который проверит правильность username и password и выводит следующие сообщения:
Привет, если совпадает username и password
Неправильный пароль если username введен правильно а пароль нет
Неправильный username, если введен неправильный username
Ошибка Валидации, если ничего не введено

*/
alert('Введите логин и пароль');

username = prompt('Введите ваш логин');
password = prompt('Введите ваш пароль');

let checkProfile = (username == 'Dunger999' & password == '123456') ? alert('Верно') : 
(username != 'Dunger999' & password == '123456') ? alert('Неверный логин') : 
	alert('Неверный пароль');