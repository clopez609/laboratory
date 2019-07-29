<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="./jquery/jquery-3.4.1.min.js"></script>

    <title>Final-2</title>
</head>
<body>
    <div class="container">
        <h6 class="text-center mt-4">
            Ejecicio 2 - Final Laboratorio
        </h6>
        <form id="form-groups" method="POST">
            <div class="form-group">
                <label for="slt-grupos">Grupos</label>
                <select name="id" class="form-control" id="slt-grupos">
                    <option selected value = 0 >Seleccione un Grupo...</option>
                    <?php
                        require_once "dbLaboratory.php";

                        $gateway = new Gateway();
                        $grupos = $gateway->loadGroup();
                        
                        foreach ($grupos as $key => $value) {
                            echo "<option value=$value[0]> $value[1] </option>";
                        }
                    ?>
                </select>
            </div>
            <p class="error">
            </p>
        </form>
        <form id="form-machines" method="POST">
            <div class="form-group ocultar">
                <label for="lt-equipos">Equipos</label>
                <select name="id" class="form-control" id="slt-equipos">
                </select>
            </div>
            <p class="error-2">
            </p>
        </form>
        <div class="result">
            <table class="table table-striped ocultar">
                <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Fecha</th>
                    <th>Fecha-Usuario</th>
                    <th>Resultado</th>
                </tr>
                </thead>
                <tbody id="row">
                </tbody>
            </table>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>