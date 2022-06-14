let salary = prompt("What's your salary in euro ?");
console.log( " Your salary is: ")+ (salary + "Euro")
let employeecontribution = 5;
let taxedsalary =(salary - salary * employeecontribution /100 )
console.log(taxedsalary)
const taxUnder250euro = (6.80)
const taxUnder450euro = (16)
const taxGraterthan450euro = (taxedsalary - 450) * (10 /100)

if (taxedsalary>450){
    const netsalary =(taxedsalary )-( taxUnder250euro + taxUnder450euro + taxGraterthan450euro)
    console.log(netsalary)
}
else{
    console.log("Sorry We cant Calculate that for u")
}



// if (taxedsalary> 450){
//     const netsalary =(taxedsalary )-( taxUnder250euro + taxUnder450euro + taxGraterthan450euro)
//     console.log(netsalary)
// }
// else if(taxedsalary<=450 ){
//     const netsalary =(taxedsalary) - (taxUnder250euro + taxUnder450euro)
//     console.log(netsalary)
// }
// else if (taxedsalary<250 ){
//     const netsalary =(taxedsalary)- (taxUnder250euro)
//     console.log(netsalary)

// }
// else{
//     const netsalary =(taxedsalary )
//     console.log(netsalary)

// }
