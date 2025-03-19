let button = document.getElementById('dropdown-btn');
let menu = document.getElementById('dropdown-content');

button.addEventListener('click', function() {
    menu.classList.toggle('show');
});


const users = [
    { name: "Alice", activity: [30, 45, 50, 60, 20, 10, 0] }, 
    { name: "Bob", activity: [15, 30, 25, 10, 0, 40, 50] },
    { name: "Charlie", activity: [0, 0, 0, 0, 0, 0, 0] },
    { name: "David", activity: [10, 20, 30, 40, 50, 60, 70] },
    { name: "Eve", activity: [5, 10, 15, 20, 25, 30, 35] }
];

function totalActivityPerWeek(users) {
    let person = { name: "", sumActivity: 0 };
    for(let i = 0; i < users.length; i ++){
        let sum = 0 
        console.log(users[i].activity)
        users[i].activity.map((value) => {
            sum = value + sum;
        });
        if (person.sumActivity < sum) {
            person.sumActivity = sum;
        }
    }
    console.log(person)
}

totalActivityPerWeek(users)