<?php

if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
//  To redirect form on a particular page
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
          
        function get_data() {
            $datae = array();
            $datae[] = array(
            	'Titel' => 'Standort&Datum',
                'Dateofaccident' => $_POST['dateofaccident'],
                'Timeofaccident' => $_POST['timeofaccident'],
                'Country' => $_POST['country'],
                'State' => $_POST['state'],
                'Email' => $_POST['email'],
                'Plz' => $_POST['plz'],
                'Zeugen' => $_POST['zeugen'],
                'Toggle' => $_POST['toggle'],
            );
            return json_encode($datae);
        }
        $name = "gfg";
		$file_name = $name . '.json';  
        if(file_put_contents(
            "$file_name", get_data())) {
                echo $file_name .' file created';
                header("Location: fahrzeugA.php");
            }
        else {
            echo 'There is some error';
        }
    }
}

?>