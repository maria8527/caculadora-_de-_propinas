
function propina(){
    let propina= document.getElementById ("Ppropina").value; 
    const conver= 100;
    let division= (propina/conver);
    let cuenta= parseInt(document.getElementById ("cuentatotal").value);
    let multiplicacion= parseInt(division*cuenta);
    solidaridad.value= `${multiplicacion}`; 
    totalcuenta.value = `${cuenta}`
    let totalpagar= cuenta+multiplicacion; 
    console.log(totalpagar)
    pago.value= `${totalpagar}`
}

