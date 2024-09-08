$(document).ready(function() {
    $('#ejecutar').click(function() {
        // Obtén los valores de los campos
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operacion = $('#operacion').val();
        var resultado;

        // Verifica si los números son válidos
         if (isNaN(num1) || isNaN(num2)) {
            $('#resultado').val('Ingrese números válidos.');
            return;
        }

        // Realiza la operación seleccionada
        switch (operacion) {
            case 'sumar':
                resultado = num1 + num2;
                break;
            case 'restar':
                resultado = num1 - num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            case 'dividir':
                if (num2 === 0) {
                    $('#resultado').text('No se puede dividir entre 0.');
                    return;
                }
                resultado = num1 / num2;
                break;
            default:
                $('#resultado').text('Operación no válida.');
                return;
        }

        // Muestra el resultado
        $('#resultado').val(resultado);
    });
});
