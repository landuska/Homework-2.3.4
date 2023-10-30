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

if ((packageInfo.codeNumber === testCodeNumber)) {
  newBalance = wallet - packageInfo.cost;
  console.log(
    `Заберите посылку ${packageInfo.id} из ячейки №${packageInfo.cellNumber}. Ваш счет составляет: ${newBalance}ед.`
  );
} else {
  console.log("Wrong code");
}
