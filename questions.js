//Question 2
let multi = [5,6,7,8,9,10,11,12]
for (let i = 0; i < multi.length; i++) {
    let n = multi[i]
    for (let i = 0; i < 12; i++) {
        console.log(n * i);
        
    }
}

//question 4
let likes = [10, 20, 15, 30];
let comments = [5, 10, 8, 15]
 function engage(n = [], n2 = []){
    let sum = []
    for (let i = 0; i < n.length; i++) {
        sum[i] = n[i] + n2[i]
        
    }
    return sum;
 }
 console.log(engage(likes, comments));

 //Question 7
 let school = {
    name : 'AnchorSoft',
    location : 'Ikeja',
    students: [
        {
            name: 'oba',
            age: 39,
            grade: 'A'

        },
        {
            name: 'mimi',
            age: 39,
            grade: 'A'

        },
        {
            name: 'Alex',
            age: 39,
            grade: 'A'

        }

    ]
 }
//Question 6
 function grade(g){
    if (g >= 80) {
        return 'A'
    }
    else if(g >= 70){
        return 'B'
    } 
    else if(g >= 50){
        return 'C'
    } 
    else if(g >= 20){
        return 'D'
    }
    else if(g < 20 ){
        return 'F'
    } else {
        return NaN;
    }
 }
 console.log(grade(59));

 function gradeSwitch(g){
    switch (true) {
         case g >= 80 :
            return 'A'
            break;
         case g >= 70 :
            return 'b'
            break;
         case g >= 50 :
            return 'c'
            break;
         case g >= 20 :
            return 'D'
            break;
         case g < 20 :
            return 'F'
            break;
            default:
                return 'Null';
        
       
 }
}

console.log(gradeSwitch(30));