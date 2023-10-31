// создание объекта с данными о посылке (база данных)
let packageInfo = {
  id: "1432HGF",
  codeNumber: "A001DFX0",
  cellNumber: 4,
  cost: 100,
};

// тестовые данные
let testCodeNumber = "A001DFX0";
let pochtamat = [null, null, null, "1432HGF", null];
let wallet = 500;

// проверяем наличие посылки в почтамате
console.log(pochtamat.includes(packageInfo.id))

// В условии проверьте, если  код  получения этой посылки в базе данных равен коду из смс, 
// то выдаем посылку - списываем средства
if ((packageInfo.codeNumber === testCodeNumber)) {
  newBalance = wallet - packageInfo.cost;
  console.log(
    `Заберите посылку ${packageInfo.id} из ячейки №${packageInfo.cellNumber}. Ваш счет составляет: ${newBalance}ед.`
  );
} else {
  console.log("Wrong code");
}
