export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  console.log(teacher3);

export interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);


  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  };
  
  export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework() {
      return 'Currently working';
    }
    displayName() {
      return this.firstName;
    }
  }

  const student: StudentClassInterface = new StudentClass('John', 'Doe');
  console.log(student.displayName()); // Output: John
  console.log(student.workOnHomework()); // Output: Currently working