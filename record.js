document.querySelector("form").addEventListener("submit",myFunction) 
function myFunction (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let ed = document.querySelector("#employeeID").value;
    let depar = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let mail = document.querySelector("#email").value;
    let mobile = document.querySelector("#mbl").value;
    
     var tr = document.createElement("tr");

     var td1 = document.createElement("td");
     td1.innerText= name;
     var td2 = document.createElement("td");
     td2.innerText = ed;
     var td3 = document.createElement("td");    
     td3.innerText= depar;
     var td4 = document.createElement("td");
     td4.innerText=exp;
     var td5 = document.createElement("td");
     td5.innerText= mail
     var td6 = document.createElement("td")
     td6.innerText = mobile;
     var td7 = document.createElement("td");
     if (Number(exp)>5) {
         td7.innerText = "Senior";
     }
     else if (Number(exp)>=2 && Number(exp)<=5) {
        td7.innerText = "Junior"
     }
     else {
        td7.innerText = "Fresher"
     }
     var td8 = document.createElement("td");
     td8.innerText="Delete";
     td8.style.backgroundColor="red";
     
     

     tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
     document.querySelector("tbody").append(tr);

     document.querySelector("#mbl input").addEventListener("click", delFunction) 
     function delFunction() {
      td1.innerText = ""
      td2.innerText = ""
      td3.innerText = ""
      td4.innerText = ""
      td5.innerText = ""
      td6.innerText = ""
      td7.innerText = ""
      td8.innerText = ""
      
     }

     
    


}