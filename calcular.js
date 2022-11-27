// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            event.preventDefault ()
            const numero = document.querySelector('totalValor').value;
            const total = document.querySelector('#totalCompra');
            total.innerHTML = numero;
            }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  //Calcular ''

  const valorTicket= 1000;

  //Promociones

  let descuento365 = 0.80;
  let descuentoCredicoop = 0.50;
  let descuentoSantander = 0.15;

  //Valores de Entradas

  const cantidad = document.getElementById('cantidadEntradas');
  const categoria = document.getElementById('selectCategoria');
  const botonCalcular = document.getElementById('calcular');
  const botonReset = document.getElementById('reset');
  const total = document.getElementById('totalCompra');



  function totalaPagar(){

    let totalValor = (cantidad.value) * valorTicket;
    if(categoria.value ==1){
        totalValor = totalValor - (totalValor * descuento365);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoCredicoop);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoSantander);
    }else{
        totalValor = totalValor;
    }

    total.innerHTML = `Total a pagar: ARS ${totalValor}`; 
  }


  botonCalcular.addEventListener('click', totalaPagar);

  botonReset.addEventListener('click', ()=>{
    total.innerHTML = `Total a pagar: ARS `; 

  });
  