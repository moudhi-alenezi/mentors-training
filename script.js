function search(){
    let filter = document.getElementById('searchh').value.toUpperCase();
    let student = document.querySelectorAll('.student');
    let name = document.getElementsByTagName('h2');

    for ( var i=0;i<=name.length;i++){
        let m=student[i].getElementsByTagName('h2')[0];
        let value=m.innerHTML  
        if(value.toUpperCase().indexOf(filter) > -1  ){
            student[i].style.display= '';
        } else {
            student[i].style.display= 'none';
        }
    }
}

function calcGrades(){
    let CW = document.getElementById('cw').value;
    let HW = document.getElementById('hw').value;
    let FP = document.getElementById('fp').value;
    let myCalc = parseInt(CW) + parseInt(HW) + parseInt(FP);
    console.log(myCalc);
    document.getElementById(`rzlt`).innerHTML = myCalc;
    if (myCalc <= 10) {
        document.getElementById('red').style.cssText = 'opacity: 100%;';
        document.getElementById('yellow').style.cssText = 'opacity: 50%;';
        document.getElementById('green').style.cssText = 'opacity: 50%;';
    } else if (myCalc >= 11 && myCalc <=19) {
        document.getElementById('red').style.cssText = 'opacity: 50%;';
        document.getElementById('yellow').style.cssText = 'opacity: 100%;';
        document.getElementById('green').style.cssText = 'opacity: 50%;';
    } else if (myCalc >= 20 && myCalc <=30) {
        document.getElementById('red').style.cssText = 'opacity: 50%;';
        document.getElementById('yellow').style.cssText = 'opacity: 50%;';
        document.getElementById('green').style.cssText = 'opacity: 100%;';
    }
}

