/*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert
*/
n = prompt('Введите число:\n');
if (n>0) {
	alert('1');
}else if (n<0) {
	alert('-1');
}else if (n==0) {
	alert('0');
}else{
	alert('Ошибка');
}