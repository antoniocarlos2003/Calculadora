function calcular() {

    var operacao = document.getElementById('operacao').value;

    var num1 = document.getElementById('num1').value;

    var num2 = document.getElementById('num2').value;



    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = null;






    switch (operacao) {
        case '1':
            resultado = num1 - num2;
            
            break;

            case  '2':
                resultado = num1 + num2;
            break;


            case  '3':
                resultado = num1 * num2;
            break;


            case  '4':
                resultado = num1 / num2;
            break;

        default:
            alert('opcao selecionada invalida');
            return false;
    }

   document.getElementById('resultado').value = resultado;
    
}