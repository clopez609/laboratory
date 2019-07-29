$(document).ready(() => {
  $("#slt-equipos").prop("disabled", true);

  $("#slt-grupos").change(() => {
    $("p.error").html("");
    $("p.error-2").html("");
    $("table.ocultar").hide();

    var equipos = $("#slt-equipos");
    var grupos = $(this);

    var valor = $("#slt-grupos option:selected").val();

    if (!isNaN(valor)) {
      if (valor != 0) {
        var data = { id: valor };
        $.ajax({
          type: "GET",
          url: "loadmachine.php",
          data: data,
          success: response => {
            var jsonData = JSON.parse(response);
            if (jsonData.success == 1) {
              $("div.ocultar").show();

              equipos.find("option").remove();

              equipos.append(
                "<option selected value = 0 >Seleccione un Equipo...</option>"
              );

              $(jsonData[0]).each((index, valor) => {
                equipos.append(
                  "<option value=" +
                    valor.id +
                    ">" +
                    valor.descripcion +
                    "</option>"
                );
              });

              equipos.prop("disabled", false);

              equipos.focus();
            } else {
              $("p.error").append(
                '<div class="alert alert-danger" role="alert"> Error en la petición de datos. </div>'
              );
            }
          },
          error: response => {
            console.log(response);
          }
        });
      } else {
        $("p.error").append(
          '<div class="alert alert-danger" role="alert"> Debes seleccionar una opción primero. </div>'
        );
        $("div.ocultar").hide();
      }
    } else {
      $("p.error").append(
        '<div class="alert alert-danger" role="alert"> Error en el valor seleccionado, verifique. </div>'
      );
    }
  });

  $("#slt-equipos").change(() => {
    $("p.error-2").html("");
    $("#row").html("");
    var valor = $("#slt-equipos option:selected").val();

    if (!isNaN(valor)) {
      if (valor != 0) {
        var data = { id: valor };
        $.ajax({
          type: "GET",
          url: "loadrevisions.php",
          data: data,
          success: function(response) {
            var jsonData = JSON.parse(response);

            if (jsonData.success == 1) {
              $("table.ocultar").show();
              var tabla = $("#row");
              $(jsonData[0]).each((index, valor) => {
                tabla.append(
                  "<tr> <td>" +
                    valor.descripcion +
                    "</td>" +
                    "<td>" +
                    valor.fecha +
                    "</td>" +
                    "<td>" +
                    valor.fecha_usuario +
                    "</td>" +
                    "<td>" +
                    valor.resultado +
                    "</td> </tr>"
                );
              });
            }
          },
          error: response => {
            console.log(response);
          }
        });
      } else {
        $("p.error-2").append(
          '<div class="alert alert-danger" role="alert">' +
            "Debe seleccionar una equipo!" +
            "</div>"
        );
        $("table.ocultar").hide();
      }
    } else {
      $("p.error-2").append(
        '<div class="alert alert-danger" role="alert"> Error en el valor seleccionado, verifique. </div>'
      );
    }
  });
});
