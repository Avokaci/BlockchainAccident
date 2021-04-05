<?php
if(isset($_POST['submit'])){
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                       
        function get_data() {
            $name = 'gfg';
            $file_name=$name. '.json';
       
            if(file_exists("$file_name")) { 
                $current_data=file_get_contents("$file_name");
                $array_data=json_decode($current_data, true);
                                   
                $extra=array(
                    'Titel' => 'fahrzeugA',
                    'Ueberschrift' => 'Versicherungsnehmer/Versicherter',
                    'Name' => $_POST['versName'],
                    'Vorname' => $_POST['versVname'],
                    'Anschrift' => $_POST['versAddress'],
                    'PLZ' => $_POST['versPlz'],
                    'Land' => $_POST['versCountry'],
                    'BerechtigungZumVorsteuerabzug' => $_POST['versState'],
                    'TelefonOderEMail' => $_POST['versTelOrEmail'],

                    'Ueberschrift' => 'Fahrezeug',
                    'Marke_Typ' => $_POST['markeType'],
                    'Kennzeichen' => $_POST['kennzeichen'],

                    'Ueberschrift' => 'Versicherer',
                    'Versicherer' => $_POST['versicherer'],
                    'Vers_Nr' => $_POST['versNr'],
                    'Agent' => $_POST['agent'],
                    'NrDerGruenenKarte' => $_POST['greencardNr'],
                    'KarteGueltigBis' => $_POST['gueltigkeitsdatum'],
                    'Vollkasko' => $_POST['toggle'],

                    'Ueberschrift' => 'Fahrer',
                    'Name' => $_POST['fahrerName'],
                    'Vorname' => $_POST['fahrerVname'],
                    'Adresse' => $_POST['fahrerAdresse'],
                    'FuehrerscheinNr' => $_POST['fuehrerscheinNr'],
                    'Klasse' => $_POST['klasse'],
                    'Ausgestellt' => $_POST['ausgestellt'],
                    'GueltigAb' => $_POST['gueltigAb'],
                    'GueltigBis' => $_POST['bis'],

                    'SichtbareSchaden' => $_POST['sichtbareSchaden'],
                    'Bemerkungen' => $_POST['bemerkungen'],
                );
                $array_data[]=$extra;
                echo "file exist<br/>";
                return json_encode($array_data);
            }
            
        }
      
        $file_name='gfg'. '.json';
          
        if(file_put_contents("$file_name", get_data())) {
            echo 'success';
            header("Location: fahrzeugB.php");
        }                
        else {
            echo 'There is some error';                
        }
    }
}

?>