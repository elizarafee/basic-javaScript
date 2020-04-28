// Object constructors are templates for creating objects
// Object name starts with Uppercase letter
// To make a constructor for any object we start with function : function Course{};

// Constructor :
function Course(title, instructor, level, published) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.otherCourse = function() {
        ++level;
    };
}

// 1st way of creating object
var course01 = new Course('Mathematics', 'Eliza Hasan', 1, true);
var course02 = new Course('English', 'Hasan Tareque', 2, true);
console.log(course01.title);

// 2nd way of creating object
var courses = [
    new Course('Physics', 'Eliza Hasan', 3, true),
    new Course('Chemistry', 'Hasan Tareque', 4, true)
];
console.log(courses[0]);
console.log(courses[0].level);