export interface Student {
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

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const thName = document.createElement('th');
const thLocation = document.createElement('th');
thName.textContent = 'Name';
thLocation.textContent = 'Location';
trHead.appendChild(thName);
trHead.appendChild(thLocation);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');


    nameCell.textContent = student.firstname;
    locationCell.textContent = student.location;


    tr.appendChild(nameCell);
    tr.appendChild(locationCell);


    tbody.appendChild(tr);
});


table.appendChild(tbody);


document.body.appendChild(table);
