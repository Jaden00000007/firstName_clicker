let t = document.createElement("title")
t.innerHTML = "Student Couninng Website"
document.head.appendChild(t)

let numStudents = 0

function increment(){
    numStudents++
    students = document.getElementById("count-el")
    students.innerHTML = numStudents
}

function save(){
    
}