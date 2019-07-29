$(document).ready( () =>{

    $('#slt-equipos').prop('disabled', true);

    $('#slt-grupos').change( () => {

        $('p.error').html('');
        $('p.error-2').html('');
        $('table.ocultar').hide();


        var equipos = $("#slt-equipos");
        var grupos = $(this);

        var valor = $("#slt-grupos option:selected").val()
        if( valor != 0) {
            var data = { 'id': valor };
            $.ajax({
                type: "GET",
                url: 'loadmachine.php',
                data: data,
                success: function(response)
                {
                    $('div.ocultar').show();

                    equipos.find('option').remove();

                    var jsonData = JSON.parse(response);

                    equipos.append("<option selected value = 0 >Seleccione un Equipo...</option>");

                    $(jsonData).each( (index, valor) => {
                        equipos.append(
                            "<option value="+ valor.id +">"+ valor.descripcion +"</option>"
                            );   
                        }
                    );
                    
                    equipos.prop('disabled', false);
                    equipos.focus();
                },
                error: (response) => {

                    var jsonError = JSON.parse(response);
                    console.log(response);
                }
           });
        } else {
            $('p.error').append(
                '<div class="alert alert-danger" role="alert">'+ 'Debe seleccionar una Grupo!' + '</div>'
            )

            $('div.ocultar').hide();

        }
    });

    $('#slt-equipos').change(() => {

        $('p.error-2').html('');
        $('#row').html('');
        var valor = $("#slt-equipos option:selected").val()

        if( valor != 0) {
            var data = { 'id': valor };
            $.ajax({
                type: "GET",
                url: 'loadrevisions.php',
                data: data,
                success: function(response)
                {
                    $('table.ocultar').show();

                    var jsonData = JSON.parse(response);
                    //console.log(jsonData);
                    var tabla = $('#row');
                    $(jsonData).each( (index, valor) => {
                            tabla.append(
                                "<tr> <td>" + valor.descripcion + "</td>" +
                                "<td>" + valor.fecha + "</td>" +
                                "<td>" + valor.fecha_usuario + "</td>" +
                                "<td>" + valor.resultado + "</td> </tr>" 
                            );
                        }
                    );
                },
                error: (response) => {
                    console.log(response);
                }
           });
        }  
        else {
            $('p.error-2').append(
                '<div class="alert alert-danger" role="alert">'+ 'Debe seleccionar una equipo!' + '</div>'
            )
            $('table.ocultar').hide();

        }

    })
});