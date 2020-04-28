// JavaScript is technically is an object oriented programming language. It's very sloppy. JavaScript's loosey-goosey attitude towards object is aa feature, not a bug. Objects are used when we went tp create a cluster or related data for something. Objects are data models that allow us to conbine properties mand methods for a specific data set in a structured way.
// There have a several ways of defining of an object

// 1st way
var course = new Object();
course.title = 'Data Structure';
course.instructor = 'Hasan MOhammod Tareque';
course.level = 1;
course.published = true;
console.log(course);

// 2nd way
var othercourse = {
    title : 'Data Structure',
    instructor : 'Hasan MOhammod Tareque',
    level : 1,
    published : true,
    updateOtherCourse : function(params) {
        return ++this.level;
    }
}
console.log(othercourse.level);     // 1
othercourse.updateOtherCourse();    //  Value increased
console.log(othercourse.level);     // 2