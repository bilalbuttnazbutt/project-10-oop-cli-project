#! /usr/bin/env node
import inquirer from "inquirer"

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class person{
   Students:Student[]=[]
   addStudent(obj:Student){
       this.Students.push(obj)
   }
}

const persons = new person()

const programStart =async(persons:person)=>{
    do{
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["staff","student","exit"]
    })
    if(ans.select == "staff"){
        console.log("You approach the staff room. please feel free to ask any question.");
    }
    else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message:"Enter the student's name you wish to engage with:"
        })
        const student = persons.Students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.Students);
        }else {
            console.log(`Hello i am ${student.name}.Nice to see you again!`);
            console.log("Exiting student list:");
            console.log(persons.Students);
        }
    }else if (ans.select == "exit"){
        console.log("Exiting the programe...");
        process.exit()
    }  
}while(true)
}

programStart(persons)