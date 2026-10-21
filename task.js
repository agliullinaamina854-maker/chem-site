// Задача 1002: определить, какое число — положительное, отрицательное или ноль

var button = document.getElementById('solve');

button.onclick = function () {
  var text = document.getElementById('x').value;   // что ввёл пользователь
  text = text.replace(',', '.');                   // запятую заменяем на точку
  var x = Number(text);                            // превращаем текст в число

  var res  = document.getElementById('res');
  var act1 = document.getElementById('act1');
  var act2 = document.getElementById('act2');

  // если ввели не число (или ничего не ввели)
  if (text.trim() === '' || isNaN(x)) {
    res.innerText  = 'введите число';
    act1.innerText = 'число не прочитано';
    act2.innerText = '—';
    return;
  }

  act1.innerText = 'прочитано число x = ' + x;

  if (x > 0) {
    res.innerText  = x + ' — положительное число';
    act2.innerText = 'x > 0';
  } else if (x < 0) {
    res.innerText  = x + ' — отрицательное число';
    act2.innerText = 'x < 0';
  } else {
    res.innerText  = x + ' — ноль';
    act2.innerText = 'x = 0';
  }
};
