// 1111111111111111111111111111

type Admin = {
  name:string;
  permissions: string[];
}

type User = {
  name:string;
  email: string;
}

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Mykola",
  email: "19988221@gmail.com",
  permissions: ["read", "write", "exec"]
};

// 222222222222222222222222222222222

type Engine = {
  type: string;
    horsepower: number;
}
type Car = {
   make: string;
  model: string;
  engine: Engine;
  year?: number;
}

const car = {
  make: "aaaaaaa6",
  model: "AAA3",
  engine: {
    type: "jjjjj",
    horsepower: 333
  },
  year: 1986,
};


function getCarInfo(car: Car): void {
  console.log(
    `Марка: ${car.make}, Модель: ${car.model}, Двигатель: ${car.engine.type} (${car.engine.horsepower} л.с.)` +
      (car.year ? `, Год: ${car.year}` : "")
  );
}


// 3333333333333333333333333333333

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

const calculateDiscount:CalculateDiscount = (product, discount) =>{
  return product.price - product.price * (discount / 100);
}

console.log(calculateDiscount({name: "Audi", price: 30000 },20))

// 44444444444444444444444444444444444444

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Anna", salary: 3000 },
  { name: "Finn", salary: 2500 },
  { name: "Julian", salary: 4000 },
];


function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}

console.log(getSalaries(employees))

// 5555555555555555555555555555555555555

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Anna",
  lastName: "Bauer",
  grade: 1.3,
};

function printStudentInfo(student: Student): void {
  console.log(
    `Student: ${student.firstName} ${student.lastName}, Note: ${student.grade}`
  );
}

printStudentInfo(student);

// 6666666666666666666666666666666

interface ConcatStrings {
  (str1: string, str2: string): string;
}


const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};


console.log(concatStrings("Hallo, ", "Welt!"));