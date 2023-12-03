<?php

$hostname = 'localhost';
$username = 'user_garage'; 
$password = 'Dlfelkf9Za';
$database = 'garage';

try {
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ];
    $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password, $options);
    //echo "Connexion réussie"; //pour vérifier la connexion ) la bdd

} catch (PDOException $PDOException) {
    echo "Impossible de se connecter à la base de donnée";
    exit('Erreur : '.$PDOException->getMessage());
}

if(isset($_GET['id'])){
    $critere=$_GET['id'].'%';
    $req=$conn->prepare("SELECT * FROM cars WHERE id LIKE ?");
    $req->execute(array($critere));
    $table=$req->fetchAll(PDO::FETCH_OBJ);
    if(count($table)>0){
        echo"<h3>".count($table)." résultats trouvés</h3>";
        foreach($table as $ligne){
            $id=$ligne->id;
            $price=$ligne->price;
            $year=$ligne->year;
            echo"ID : $id, Prix : $price, Année : $year";
        };
    }else echo"<p>Aucun résultat ne correspond</p>";
}
