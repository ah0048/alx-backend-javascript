export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate types upon creation
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    // Check if it's an array and all elements are strings
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
