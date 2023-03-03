// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//   message = `Insufficient funds!`;
// }
//   else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;}
//   return message;
// }
// console.log (makeTransaction(3000, 5, 23000));
// console.log (makeTransaction(1000, 3, 15000));
// console.log (makeTransaction(5000, 10, 8000));
// console.log (makeTransaction(2000, 8, 10000));
// console.log (makeTransaction(500, 10, 5000));


// console.log ('Hello')

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log (checkPassword("mangohackzor"));
// console.log (checkPassword("polyhax"));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
   
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
   
//     default:
//       message = "Access denied, wrong password!";

//     return message;
//       }
//       console.log (checkPassword("mangohackzor"));
//       console.log (checkPassword(null));
//       console.log (checkPassword("polyhax"));
//       console.log (checkPassword("jqueryismyjam"));
// }


// function checkPassword(password) {
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
  
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
   
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
   
//     default:
//       message = "Access denied, wrong password!";
//   }
//      return message;
//       }
//       console.log (checkPassword("mangohackzor"));
//       console.log (checkPassword(null));
//       console.log (checkPassword("polyhax"));
//       console.log (checkPassword("jqueryismyjam"));

// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }
// console.log (getShippingCost("Australia"));
// console.log (getShippingCost("Germany"));
// console.log (getShippingCost("China"));
// console.log (getShippingCost("Chile"));
// console.log (getShippingCost("Jamaica"));
// console.log (getShippingCost("Sweden"));

// function getSubstring(string, length) {
//   const substring = getSubstring.slice;

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   // const substring =
//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// for(let i=0; i < message.length; i+=1)
//   /// Change code above this line
//   return result;
// }
// console.log("Nunc sed turpis a felis in nunc fringilla", [20]);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if(result)
//   /// Change code above this line
//   return result;
// }
// console.log("Nunc sed turpis a felis in nunc fringilla", [20]);

// function checkForSpam(message) {
//   let result
//     // if ((message.toLowerCase()).includes("spam")) {
//     //   result = 'true';
//     // }
//     if ((message.toLowerCase()).includes("sale") || (message.toLowerCase()).includes("spam")) {
//       result = 'true';
//     }
//    else {
//     result = "false";
//   }
//   return result;
// }
// console.log('Latest technology news -',checkForSpam("Latest technology news"))
// console.log('JavaScript weekly newsletter -',checkForSpam("JavaScript weekly newsletter"))
// console.log('Get best sale offers now! -',checkForSpam("Get best sale offers now!"))
// console.log('Amazing SalE, only tonight! -', checkForSpam("Amazing SalE, only tonight!"))
// console.log('Trust me, this is not a spam message -', checkForSpam("Trust me, this is not a spam message"))
// console.log('Get rid of sPaM emails. Our book in on sale! -', checkForSpam("Get rid of sPaM emails. Our book in on sale!"))
// console.log('[SPAM] How to earn fast money? -', checkForSpam("[SPAM] How to earn fast money?"))
// console.log(checkForSpam("[SPAM] How to earn fast money?"))


// 2\32
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// 1-й вариант
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
// }

// 2-й вариант
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// 3\32
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// 1-й вариант
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 2-й вариант
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
//   }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 5\32
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];


// 6\32
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// 7\32
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// 8\32
// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// 9\32
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// function getExtremeElements(array) {

// const result1 = array[0];
// const result2 = array[array.length - 1];
// const result = [result1, result2];
//   return result;
// }

// 10\32
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// 11\32
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
//   let totalprice;
//   price = message.split(" ");
//   totalprice = (price.length * pricePerWord);
  
//   return totalprice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 12\32
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//   let string;
//  string= array.join(delimiter);
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// 13\32
// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"
// function slugify(title) {
//   const normalizedInput = title.toLowerCase();
//   slugs = normalizedInput.split(" ");
//   slug = slugs.join("-")
// return slug;

// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// 14\32
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// 15\32
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);


// 16\32
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength)
//   {
//     newArray = newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// 17\32
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18\32
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//  let result = 0;
//  for (let i = 1; i <= number; i += 1) {
//    result = result + i;
//   }
//  return result;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());


// 19\32
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20\32
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total = total + order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21\32
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//   let stringArray = string.split(" ");
//   let LongestWord = stringArray[0];
//   for (let i = 0; i < stringArray.length; i +=1) {
//     if (stringArray[i].length > LongestWord.length) {
//     LongestWord = stringArray[i];
//     }
//   }
// return LongestWord;

//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// 22\32
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i +=1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// 23\32
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// function filterArray(numbers, value) {
//     const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       newNumbers.push(numbers[i]);
//     }
// }
  
//   return newNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([[12, 24, 8, 41, 76], 38]));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 24\32
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// НЕ ПОКАЗЫВАЕТ В ИНСПЕКТОРЕ

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(fruits.includes("plum"));
// console.log(fruits.includes("mandarin"));
// console.log(fruits.includes("pear"));
// console.log(fruits.includes("Pear"));
// console.log(fruits.includes("apple"));

// 25\32
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// НЕ ПОКАЗЫВАЕТ В ИНСПЕКТОРЕ
// function getCommonElements(array1, array2) {
//  const newArray = [];
//   for (const array of array1) {
//     if (array2.includes(array)) {
//       newArray.push(array);
//     }
//   }

// return newArray;

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));


// 26\32
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (element of order) {
//   // for (let i = 0; i < order.length; i += 1)
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 27/32
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
// for (number of numbers) {
//   // for (let i = 0; i < numbers.length; i += 1) {
//     // const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 28\32
// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// 5 % 1 = 0;
// // 5, поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7 ;
// const e = 8 % 3;


// 29\32
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
   
//   let result = [];
// for (let i = start; i <= end; i +=1) {
//   if (i % 2 === 0) {
//     result.push(i);
//     }
//   }
// return result;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// 30\32
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


// 31\32
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// function findNumber(start, end, divisor) {
  
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return number = i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// 32 / 32
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
  
//   // Change code below this line
// for (let i = 0; i < array.length; i +=1) {
//   if array[i] = value {
//     return true;
//   }
// }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



// +++++++++ NEW MODULE 3 ++++++++
// 16/41
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// console.log(salaries);
// const values = Object.values(salaries);
// console.log(values);
//    for (const value of values) {
//   totalSalary += value
//    }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// 17\41
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // console.log(hexColors);
// // console.log(rgbColors);

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);



// Завдання 18/41
// Напиши функцію getProductPrice(productName), яка приймає один параметр
// productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям
// (властивість name) в масиві products і повертає його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let result = null;
//   for (const i of products) {
    
//     if (i.name === productName) {
//       result = i.price;
//     }
//   }
//   return result;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


// 19\41
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.log(products);
// function getAllPropValues(propName) {
//   let result = [];
//   for (let i = 0; i < products.length; i += 1) {
//     if (products[i][propName]) {
//       result.push(products[i][propName]);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// ИЗ Конспкта
// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   });

// function doStuffWithBook({
//     title,
//     numberOfPages,
//     downloads,
//     rating,
//     isPublic,
//   }) {
//     console.log(title);
//     console.log(numberOfPages);
//   }

// CONSPECT

// const userA = {
//   username: "Mango",
//   age: 20,
// };
// const userB = userA;
// userB.age = 30;
// console.log(userA.age, userB.age);


// ======================================
// ======================================

// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }

// console.log(user.languages.React_Native);
// console.log(user['languages']["React Native"]);

// for (const key in user){
// console.log(user.key);

//     console.log(key);
//     console.log(user[key]);
//     // console.log(user[key]);
// }
// const test = 3;
// const test2 = 45;
// const value = 'start'
// const value2 = 'End'
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     },
//     // [value + value2] : 'some value',
//     // result : test + test2,

// };
// console.log(user.result);

// user.age = 29;
// user.age += 1

// user.city = 'VN';
// console.log(user);
// // // console.log(user.age);


// delete user.city
// console.log(user);




// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };


// // Object.freeze(user);
// user.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
// user.age = 100;
// console.log(user);





// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };
// // // Object.freeze(user);

// const user2 = Object.create(user);
// user2.age = 33
// console.log(user2);
// console.log(user);




// for (const key in user2) {
//     if (user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     }
// }

// console.log('All', user2[key]);
// const user = {
//     score: false
// }

// if (user.hasOwnProperty('score')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if ('score' in user) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// if (user.score) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//       html: false,
//       css: false,
//       js: true,
//       ReactNative: false,
//   },
//    sayHello() {
//      console.log(`My name ${this.name}`);
//  },
//   iKnow() {
//       // const keys = Object.keys(this.languages);
//       // const values = Object.values(this.languages);
//       // const entries = Object.entries(this.languages);
//       const keys = Object.keys(this);
//       for(const key of keys){
//           if(typeof this[key] === 'function'){
//               continue;
//           }else{
//               console.log(key);
//           }
//       }
//       console.log(keys);
      // console.log(values);
      // console.log(entries);
      // for (const key of keys) {
      //     console.log(key);
      //     if (this.languages[key]) {
      //         // console.log(key);
      //     }
      // }
      // console.log(keys);
      // for(const key in this.languages){
      //     if(this.languages[key])
      //     console.log(key);
      // }
//   }
// }
// user.iKnow()
// const user2 = Object.create(user);
// user2.name = 'Den';
// console.log(user2);
// user2.sayHello()
// user.sayHello()







// Example 1 - Основи об 'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об 'єкта user у форматі ключ:значення
// використовуючи Object.keys() та for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.skills = {
//     run: true
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// // user['premium'] = false;
// const key = 'premium';
// user[key] = false;
// console.log(user);
// for (const key in user) {
//     console.log(user[key]);
// }
// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(user[key]);
// }
// console.log(keys);


// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат
// у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній,
//  то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for(const value of values){
//     sum += value
//     // console.log(value);
// }
// console.log(sum);
// for (const key in salaries) {
//     console.log(key);
//     sum += salaries[key]
//     console.log(salaries[key]);
// }
// console.log(sum);





// Example 3 - Масив об 'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об 'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта


// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {

//     for (const stone of stones) {
//         // if (stone.name === stoneName) {
//         //     result = stone.price * stone.quantity;
//         //     break;
//         // }
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//         console.log(stone.name);
//     }
//     return 'Empty';
//     // return result;
// }
// console.log(calcTotalPrice(stones, 'asdas'));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// // Transaction.DEPOSIT = 'asdnasjkdnjasdjn'
// // console.log(Transaction);
// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: 16,
//         amount: 145,
//         type: 'deposit'
//     }, ],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'недостатньо коштів';
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;

//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Empty';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }

//         return sum;
//     },
// };
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// account.withdraw(123);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
// // Перерва до 21:15


// const arr = ['a', 'b', 'c']
// const idx = arr.indexOf('asdas');

// function foo() {
//     if (idx === -1) {
//         console.log("немає");
//         return;
//     }
//     arr.splice(idx, 1)
// }
// foo()

// console.log(idx);
// console.log(arr);


// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//   const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));





// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   let result = 0;
//   for (const product of products) {
//       if (product.name === productName) {
//       result = product.price * product.quantity;
//     }
//   }
//   return result;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// 21\42
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);



// ==============   31\42   =========

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const result = {
//     category: category,
//     priority: priority,
//     ...data,
//     completed: completed,
//   };

//   // Change code above this line

// return result;
// }
// console.log(makeTask({}));
// console.log(makeTask({category: "Homemade", priority: "Low",
// text: "Take out the trash"}));


// 6\46
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Change code above this line
  return filteredNumbers;
}