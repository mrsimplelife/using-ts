interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}
// Employee 확장 타입만 돼!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const youme = new FullTimeEmployee();
const bob = new PartTimeEmployee();
youme.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(youme);
const bobAfterPay = pay(bob);
youme.workFullTime();
bob.workPartTime();

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕
// T의 키를 확장한 K
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
