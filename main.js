const maximo = 990;
const minimo = 10;

let cuentas = [
    { nombre: "Oliver", saldo: 305, password: "3895"}, 
    { nombre: "Gesela", saldo: 457, password: "8398"}, 
    { nombre: "Andrea", saldo: 93, password: "6782" } 
  ];
  
document.querySelector("#username").addEventListener("change",leerPersona)
document.getElementById("options").style.display = "none"
  
function leerPersona(){
    let indice = parseInt(document.querySelector("#username").value);
    let nombre = cuentas[indice].nombre;
    document.getElementById("user-password").style.display = "block"
}
  
function entrar(){
    let indice = parseInt(document.querySelector("#username").value);
    let recibida = document.getElementById("password").value;
    let contra = cuentas[indice].password;
  
    if (recibida === contra) {
      document.getElementById("options").style.display = "block"
      document.getElementById("user-password").style.display = "none"
      document.getElementById("ingresar").style.display = "none"
      document.getElementById("username").style.display = "none"
    } else {
      document.getElementById("options").style.display = "none"
        alert("Incorrecto. Intentarlo de nuevo.")
    } 
}
  
  document.getElementById("addMoney").addEventListener("submit",ingreso)
  function ingreso(e){
    e.preventDefault()
    let indice = parseInt(document.querySelector("#username").value);
    let saldo = cuentas[indice].saldo;
    let enteredAmount =  Number(document.querySelector("#addingAmount").value);
    document.querySelector("#enteredAmount").innerHTML = "Tu monto ingresado es de: " + enteredAmount;
    let newBalance = (saldo += enteredAmount);
    if (newBalance <= maximo) {
      cuentas[indice].saldo = newBalance;    
    document.querySelector("#newBalance").innerHTML = "Tu saldo actual:" + newBalance;     
    } else {
      alert("El límite de tu cuenta es de $990")
    }
  }
  
  document.getElementById("withdrawMoney").addEventListener("submit",retiro)
  function retiro(e){
    e.preventDefault()
    let indice = parseInt(document.querySelector("#username").value);
    let saldo = cuentas[indice].saldo;
    let moneyWithdraw =  Number(document.querySelector("#addingAmountb").value);
    document.querySelector("#moneyWithdraw").innerHTML = "Tu monto retirado es: " + moneyWithdraw;
    let newBalance = saldo - moneyWithdraw;
    if (newBalance >= minimo) {
      cuentas[indice].saldo = newBalance;    
    document.querySelector("#newBalanceA").innerHTML = "Tu monto total despues de retirar es: " + newBalance;     
    } else {
      alert("El límite es de $10 y tu saldo actual es de: "+ saldo)
    }
  }
  
  function check(){
    let indice = parseInt(document.querySelector("#username").value);
    let saldo = cuentas[indice].saldo;
    
    document.querySelector("#currentBalance").innerHTML = "Saldo actual: " + saldo;
  }
  
  function logout() {
    window.location.reload()
  }