
var ranNum1, ranNum2, ranMult0, AnsGood, SolutionZ;

function RndA0() {
 //Generate a random number for multiplication test.
    var x = document.getElementById("Rnd0");
    ranNum1 = Math.floor((Math.random() * 100) + 1);
    x.innerHTML=ranNum1;
}

function RndB0() {
 //Generate a random number for multiplication test.
    var x = document.getElementById("Rnd1");
    ranNum2 = Math.floor((Math.random() * 100) + 1);
    x.innerHTML=ranNum2;
}

function multiply() {
    //Generate the true result for compare to use input.
    ranMult0 = ranNum1 * ranNum2;
    console.log('ranNum1 x ranNum2==>', ranNum1 * ranNum2);
    return(ranMult0);
    
}

function ResultChk() {
 //Compare the results to see if the user get it right or wrong.
 var answer0 = document.getElementById("myNumber").value;
 console.log('answer0 * 1==>', answer0 * 1);
 AnsGood = 0;
 if (answer0 == ranMult0) {
     // alert(true);
     AnsGood = "Correct ... !!! Horray !!!";
 } else {
     // alert(false);
     AnsGood = "Sorry .... Try your luck again ...";
 }
 AnsGoodZ.innerHTML = AnsGood;
 return(AnsGood);
}