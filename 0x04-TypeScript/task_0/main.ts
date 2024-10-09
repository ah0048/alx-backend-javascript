interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    location: 'USA'
};
let student2: Student = {
    firstname: "Jane",
    lastname: "Doe",
    age: 22,
    location: 'UK'
};
let studentsList: Student[] = [student1, student2];