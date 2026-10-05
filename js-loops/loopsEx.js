// to print 1 2 3 4 5
// let i=10;
// while(i<=50){
//     console.log(i);
//     i=i+10;
// }

// let i=4;
// while(i<=16){
//     console.log(i);
//     i=i+3;
// }

// let i=10;
// while(i>=1){
//     console.log(i);
//     i=i-1;
// }


// let i=95;
// while(i>=5){
//     console.log(i);
//     i=i-5;
// }


// let sum=0;
// for (let i=2;i<=4;i=i+1){
//     //console.log(i);
//     sum=sum+i;
// }
// console.log("sum of above sequence",sum);

// let i=2;
// let sum=0
// while(i<=4){
//     sum=sum+i
//     i=i+1
// }
// console.log(sum)


//find the sum of first n natural numbers
// let sum=0
// let n=5
// let i=0
// while(i<=n){
//     sum=sum+i
//     i=i+n
// }
// console.log(sum)

// let fact=1
// let n=3
// let i=1
// while(i<=3){
//     fact=fact*i
//     i=i+1
// }
// console.log(`factorial of ${n}=${fact}`);


// let start=parseInt(document.getElementById("Enter a Start:"));
// let end=5;
// for(let i=start;i<=end;i=i+1){
//      document.write(i);
// }


// let output="";
// for(let i=1;1<=3;i++){
//     output=output+i;
// }
// console.log(output);

//display even numbers in the range of 1 to 10
// for(let i=1;i<=10;i++){
//     let n=i
//     if(n%2===0){
//         console.log(n); 
// }
// }


//Display the factorial of each number in the sequence 1 to 5
// for(let j=1;j<=5;j++){
//     let fact=1
//     let n=j
//     for (let i=n;i>=1;i=i-1){
//         fact=fact*i;
//     }
//     console.log("factorial of ",n,"is =",fact);
    
// }


//print the first 10 numbers using for loop
// for (let i=1;i<=10;i++){
//     console.log(i);
//     if(i===5){
//         break;
//     }
// }


//print 1 to 5 at 3rd place it has to stop,3rd place should display using while loop
// let i=1;
// while (i<=5){
//     console.log(i);
//     if (i===3){
//         break;
//     }
//     i++;
// }


//logics using break statements
//Display the first divisible of 5 in the range of 22 to 30
// for(let i=22;i<=30;i++){
//     if(i%5===0){
//         console.log(i);
//         break;
//     }
// }


// let i=22;
// while(i<=30){
//     if(i%5===0){
//         console.log(i);
//         break;
//     }
//     i++;
// }


//Display the last divisible of 4 in the range of 50 to 60
// for(i=59;i>=50;i=i-1){
//     if(i%4===0){
//         console.log(i);  
//         break;
//     }
// }

//Display first 3 numbers in given range
// let start=10;
// let end=20;
// let count=0;
// for (i=start;i<=end;i++){
//     count++;
//     if(count===3){
//         break;
//     }
//     console.log(i);
// }

//Display the first 2 even numbers in the range of 25 to 13
// let evencount=0
// for(let i=25;i>=13;i=i-1){
//     if(i%2==0){
//         console.log(i);
//         evencount++
//     }
//     if(evencount==2){
//         break;
//     }
// }

//skip the 5th number in the range of 1 to 10
// for(let i=1;i<=10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

//skip the 13th number in the range of 10 to 20
// for(let i=10;i<=20;i++){
//     if(i===13){
//         continue;
//     }
//     console.log(i);
// }

//skip the unluckey year in the range of 2000 to 2026
// let unluckey=2021
// for(let i=2000;i<=2026;i++){
//     if(i===unluckey){
//         continue;
//     }
//     console.log(i);
// }


// for(let i=1;i<=5;i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }


// let i=1;
// while(i<=5){
//     if(i===3){
//         i=i+1;
//         continue;
//     }
//     console.log(i);
//     i=i+1;
// }


// let unluckey=2021
// for(let i=2000;i<=2026;i++){
//     if(i===unluckey){
//         continue;
//     }
//     console.log(i);
// }

// let i=2000;
// let unluckey=2021
// while(i<=2026){
//     if(i===unluckey){
//         i=i+1;
//         continue;
//     }
//     console.log(i);
//     i=i+1;
// }

//Do while
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let i=1;
// do{
//     console.log(i);
//     i=i+1;
// }while(i<=5);

// let i=10;
// do{
//     console.log(i);
//     i=i-1;
// }while(i>=5);

let ans;
do{
    let n=parseInt(prompt("Enter a number to check even or not"));
    if(n%2===0){
        alert("Even");
    }else{
        alert("Not Even");
    }
    ans=prompt("Do you want to check any other number?(Y/N)");
}while(ans==="y");
