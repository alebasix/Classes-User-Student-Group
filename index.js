class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  fullname() {
    return this.name + ` ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    let date = new Date();
    let yearNow = date.getFullYear();
    if (typeof year !== "number") {
      throw new TypeError("Type must be a number");
    }
    if (year > yearNow || yearNow - 5 > year) {
      throw new RangeError("Year out of range");
    }
    this._year = year;
  }

  getCourse() {
    let date = new Date();
    let yearNow = date.getFullYear();
    const course = yearNow - this.year;
    if (course === 0) {
      return course + 1;
    } else {
      return course;
    }
  }
}

const testStudent1 = new Student("Test1", "Test1", 2020);
const testStudent2 = new Student("Test2", "Test2", 2021);
console.log(testStudent1.fullname());
console.log(testStudent1.getCourse());

class Group {
  constructor(name, [...arrayOfStudents]) {
    this.name = name;
    this.arrayOfStudents = [...arrayOfStudents];
  }
  showStudents() {
    for (let obj of [...this.arrayOfStudents]) {
      return obj.surname + " " + obj.name[0] + ".";
    }
  }
}
const testGroup = new Group("Group", [testStudent1, testStudent2]);
console.log(testGroup.showStudents());
