
var ranNum1, ranNum2, ranMult0, AnsGood, SolutionZ;

function RndA0() {
    var x = document.getElementById("Rnd0");
    ranNum1 = Math.floor((Math.random() * 100) + 1);
    x.innerHTML=ranNum1;
}

function RndB0() {
    var x = document.getElementById("Rnd1");
    ranNum2 = Math.floor((Math.random() * 100) + 1);
    x.innerHTML=ranNum2;
}

function multiply() {
    ranMult0 = ranNum1 * ranNum2;
    console.log('ranNum1 x ranNum2==>', ranNum1 * ranNum2);
    return(ranMult0);
    
}

function ResultChk() {
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