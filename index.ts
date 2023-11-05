#! /usr/bin/env node

import { ChildProcessWithoutNullStreams } from "child_process";
import inquirer from "inquirer";
// import chalk from "chalk";
// import chalkAnimation from "chalk-animation"; 

class school {
    name:string;
    student:student[]=[];

    Teacher:Teacher[]=[];
 

    addstudent(stdobj:student){
        this.student.push(stdobj)
    }

    addTeacher(Techobj:Teacher){
        this.Teacher.push(Techobj)
    }

    

    constructor(name:string){
        this.name=name;
    }
}



class student {
    name : string;
    age:number;
    schoolname:string;

    constructor (name:string,age:number,schoolname:string){
        this.name=name;
        this.age=age;
        this.schoolname=schoolname;
    } 
}



class Teacher extends student {}


let school1 = new school("Education")
let school2 = new school ("Smart")

let s1 = new student("Ayesha",17,school1.name)
let s2 = new student("Ramsha",18,school1.name)
let s3 = new student("Rahat",18,school2.name)
let s4 = new student("ujala",17,school2.name)



let t1 = new Teacher("hamzah",21,school1.name)
let t2 = new Teacher("okasha",20,school1.name)
let t3 = new Teacher("Hassa",24,school2.name)
let t4 = new Teacher("faiq",25,school2.name)

// add student 

school1.addstudent(s1)
school1.addstudent(s2)
school1.addstudent(s3)
school1.addstudent(s4)

// add Teacher

school1.addTeacher(t1)
school1.addTeacher(t2)
school1.addTeacher(t3)
school1.addTeacher(t4)

// add course

// school1.addcourses(c1)
// school1.addcourses(c2)
// school1.addcourses(c3)
// school1.addcourses(c4)

// console.log(t1)
// console.log(t1)
// console.log(t1)


console.log(school1);
console.log(school2);

