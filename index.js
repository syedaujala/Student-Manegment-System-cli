#! /usr/bin/env node
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import chalk from "chalk";
// import chalkAnimation from "chalk-animation"; 
var school = /** @class */ (function () {
    function school(name) {
        this.student = [];
        this.Teachers = [];
        this.name = name;
    }
    school.prototype.addstudent = function (stdobj) {
        this.student.push(stdobj);
    };
    school.prototype.addTeacher = function (Techobj) {
        this.Teachers.push(Techobj);
    };
    return school;
}());
var student = /** @class */ (function () {
    function student(name, age, schoolname) {
        this.name = name;
        this.age = age;
        this.schoolname = schoolname;
    }
    return student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(student));
var school1 = new school("Education");
var school2 = new school("Smart");
var s1 = new student("Ayesha", 17, school1.name);
var s2 = new student("Ramsha", 18, school1.name);
var s3 = new student("Rahat", 18, school2.name);
var s4 = new student("ujala", 17, school2.name);
var t1 = new Teacher("hamzah", 21, school1.name);
var t2 = new Teacher("okasha", 20, school1.name);
var t3 = new Teacher("Hassa", 24, school2.name);
var t4 = new Teacher("faiq", 25, school2.name);
// add student 
school1.addstudent(s1);
school1.addstudent(s2);
school1.addstudent(s3);
school1.addstudent(s4);
// add Teacher
school1.addTeacher(t1);
school1.addTeacher(t2);
school1.addTeacher(t3);
school1.addTeacher(t4);
// console.log(t1)
// console.log(t1)
// console.log(t1)
console.log(school1);
console.log(school2);
