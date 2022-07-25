const students = [{name: 'Vasya', mark: 3.8, email: 'vasya@gmail.com', isAdmin: false},
    {name: 'Helen', mark: 3.4, email: 'helen@gmail.com', isAdmin: false},
    {name: 'Marina', mark: 4.0, email: 'marina@gmail.com', isAdmin: true},
    {name: 'Alex', mark: 4.2, email: 'alex@gmail.com', isAdmin: false},
    {name: 'Martin', mark: 4, email: 'martin@gmail.com', isAdmin: true},
    {name: 'Denys', mark: 3.7, email: 'denys@gmail.com', isAdmin: false},
    {name: 'Daniel', mark: 4.8, email: 'daniel@gmail.com', isAdmin: true},
    {name: 'John', mark: 3.6, email: 'jogn@gmail.com', isAdmin: false},
    {name: 'Phil', mark: 4.5, email: 'phil@gmail.com', isAdmin: false},
    {name: 'Anna', mark: 3.8, email: 'anna@gmail.com', isAdmin: false}];

console.log(students);

function logAdmins(students) {
    //вернуть из функции список тех, у кого поле isAdmin: true
    return students.filter(function(admin) {
        return admin.isAdmin;
    })
}
console.log(logAdmins(students));

function filterByMark(students) {
    //ввести оценку через prompt
    //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее
    let inputMark = prompt('Enter mark ');
    return students.filter(function(filterMark) {
        return filterMark.mark >= inputMark;
    })
}
console.log(filterByMark(students));

function renderStudents(students) {
    //по аналогии с курсами валют
    return students.map(function(renderStudent) {
        return `<tr><td>${students.indexOf(renderStudent)+1}</td><td>${renderStudent.name}</td><td>${renderStudent.mark}</td><td>${renderStudent.email}</td><td>${renderStudent.isAdmin}</td></tr>`
    }).join('');
}
document.querySelector('.students tbody').innerHTML = renderStudents(students);

function getAverageMark(students) {
    //вернуть среднюю оценку (2 знака после запятой) из списка students
    let markSum = students.reduce(function(acc, averageMark) {
        return acc + averageMark.mark;
    }, 0) / students.length;
    return markSum.toFixed(2);
}
console.log(getAverageMark(students));

function getEmailList(students) {
    //вернуть список состоящий из только поля email студентов
    // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']
    return students.map(function(justEmail) {
        return justEmail.email;
    })
}
console.log(getEmailList(students));

function getDataList(students) {
    //вернуть список, состоящий из name и email студентов
    //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]
    return students.map(function(dataList) {
        return {
            name: dataList.name,
            email: dataList.email
        }
    })
}
console.log(getDataList(students));
