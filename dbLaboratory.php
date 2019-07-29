 <?php

    class Gateway 
    {
        protected $connection = null;

        public function __construct()
        {
            $this->connection = new PDO("mysql:host=localhost; dbname=mantenimiento",'root','');
        }

        // Grupos
        public function loadGroup()
        {
            $sql = 'SELECT * FROM grupos';
            $rows = $this->connection->query($sql);

            return $rows;
        }

        // Equipos
        public function loadMachine($id)
        {
            $sql = 'SELECT e.id, e.descripcion FROM equipos AS e JOIN grupos AS g ON e.grupo_id = g.id WHERE e.grupo_id =' . (int) $id;
            
            $result = $this->connection->query($sql);

            if ($result == true){
                return $result->fetchAll(PDO::FETCH_ASSOC);
            } else {
                echo "error: ". $sql;
            }
        }

        // Revisiones
        public function loadRevisions($id)
        {
            $sql = 'SELECT e.descripcion, r.fecha, r.fecha_usuario, r.resultado FROM revisiones as r JOIN equipos as e ON r.equipo_id = e.id WHERE e.id ='. (int) $id;
            $result = $this->connection->query($sql);

            if ($result == true){
                return $result->fetchAll(PDO::FETCH_ASSOC);
            } else {
                echo "error: ". $sql;
            }
        }
    }
 ?>