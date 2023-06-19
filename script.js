let Students = [
    { id: 0, pic: new URL('https://mentorly.fra1.digitaloceanspaces.com/1664710648591-1e84be07-5465-41da-99f3-fa6e07ec6887.JPG'), name: 'Sara Mohammad Almutairi', snack: 'Chocolate', email: 'sara0moha78@gmail.com', track:'Web' },
    { id: 1, pic: new URL('https://mentorly.fra1.digitaloceanspaces.com/1659874289928-C3FC633C-19FA-48BF-839A-0DB76F8D0F48.jpeg'), name: 'Noor Khalid Ajlaan', snack: 'Chips', email: 'nona2005k@gmail.com',track:'Python' },
    { id: 2, pic: new URL('https://mentorly.fra1.digitaloceanspaces.com/1662918987755-2721742E-CB01-45C9-B59B-002F3F10C1CE.jpeg'), name: 'Dhuha Abdulaziz Mansi', snack: 'Apple', email: 'tuha89@hotmail.com', track:'Web' }
  ];
  
Students.forEach((student) => {
    document.getElementById('list').innerHTML += `
      <div onclick="studentCard(${student.id})" class="student"><div class="pic" style="background-image: url('${student.pic}'); background-size: cover;"></div>
      <div class="name"><h2>${student.name}</h2><h4>${student.email}</h4></div>
      </div>
    `;});
    
// search
function search(){
    let filter = document.getElementById('srch').value.toUpperCase();
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
        document.getElementById('srch').style.boxShadow = '0px 0px 5px 1px #EFD3D7';
    } 
}

function kyd(){
    document.getElementById('srch').style.boxShadow = '0px 0px 5px 0px #EFD3D7';}
    
function calcGrades(){
    let CW = document.getElementById('cw').value;
    let HW = document.getElementById('hw').value;
    let FP = document.getElementById('fp').value;
    let myCalc = parseInt(CW) + parseInt(HW) + parseInt(FP);
    console.log(myCalc);
    document.getElementById(`rzlt`).innerHTML = myCalc;
    document.getElementById('rzlt').style.cssText = 'display: block;';

    if (myCalc <= 10) {
        document.getElementById('BAD').style.cssText = 'opacity: 100%; box-shadow: 0px 0px 20px 5px #a34a32;';
        document.getElementById('MEH').style.cssText = 'opacity: 50%;';
        document.getElementById('GRT').style.cssText = 'opacity: 50%; ';
    } else if (myCalc >= 11 && myCalc <=19) {
        document.getElementById('BAD').style.cssText = 'opacity: 50%;';
        document.getElementById('MEH').style.cssText = 'opacity: 100%; box-shadow: 0px 0px 20px 5px #a39f32;';
        document.getElementById('GRT').style.cssText = 'opacity: 50%;';
    } else if (myCalc >= 20 && myCalc <=30) {
        document.getElementById('BAD').style.cssText = 'opacity: 50%;';
        document.getElementById('MEH').style.cssText = 'opacity: 50%;';
        document.getElementById('GRT').style.cssText = 'opacity: 100%; box-shadow: 0px 0px 20px 5px #3aa332;';
    }
}

function studentCard(id) {
    document.getElementById('gradingContainer').style.cssText = 'display: block;';
    let student = Students.find((student) => student.id == id);

    if (student) {   
        document.getElementById('stuInfoCard').innerHTML = ` 
            <div style="background-image: url('${student.pic}'); background-size: cover;" id="studentPic"></div> 
            <div id="nameBx"><h3>My Name is <i>${student.name}</i></h3></div>
            <div id="trackBx"><h3>My track is <i>${student.track}</i></h3></div>
            <div id="snackBx"><h3>My Fav snack is <i>${student.snack}</i></h3></div>        
        `;
        document.getElementById('emailBx').innerHTML = ` 
            <h4>Email me :</h4>
            <a href="mailto:${student.email}"> 
            <i class="bi bi-pencil-square" style="font-size: 3rem; position: fixed; top: 83%; right: 36.5%; "></i></a>      
        `;
        console.log(student.id);
    }
}

function dlt(){
    document.getElementById('gradingContainer').style.cssText = 'display: none;';
    document.getElementById('cw').value = ''; 
    document.getElementById('hw').value = ''; 
    document.getElementById('fp').value = '';
    document.getElementById('rzlt').style.cssText = 'display: none;';
    document.getElementById('BAD').style.cssText = 'opacity: 50%;';
    document.getElementById('MEH').style.cssText = 'opacity: 50%;';
    document.getElementById('GRT').style.cssText = 'opacity: 50%; ';
}
   