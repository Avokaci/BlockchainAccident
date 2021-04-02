<!doctype html>
<html lang="en">
  <!-- head -->
  <?php include 'head.php';?>
  <!-- Body-->
<body class="bg-light">
  <div class="container">
    <!-- header -->
    <?php include 'header.php'; ?>
  <div class="row">
    <div class="col-md-4 mb-4">
      <!-- navbar -->
      <?php
      include 'navbar.php';
      include 'team.php';
      ?>
    </div>

    
<div class="col-md-8">
      <h4 class="mb-3">FAHRZEUG B</h4>
      <form action="umstaende.php" method="post">
        <h5 class="mt-4">Versicherungsnehmer/Versicherter (siehe Versicherungsbescheinigung)</h5>
        <div class="row">
          <div class="col-12 mb-4">
            <label>Name</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Vorname</label>
            <div class="input-group">
              <input type="text" class="form-control"required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Anschrift</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
                 <div class="col-md-2 mb-3">
            <label for="hw-classification">PLZ</label>
            <input type="text" class="form-control" placeholder="1170" value="" required>
          </div>
           <div class="col-md-5 mb-3">
            <label for="country">Land</label>
            <select class="custom-select d-block w-100" id="country" required>
              <option value="">W&#228hlen...</option>
              <option>Belgien</option>
            <option>Bulgarien	</option>
            <option>D&#228nemark</option>
            <option>Deutschland</option>
            <option>Estland</option>
            <option>Finnland</option>
            <option>Frankreich</option>
            <option>Griechenland</option>
            <option>Irland</option>
              <option>Italien</option>
            <option>Kroatien</option>
            <option>Lettland</option>
            <option>Litauen</option>
            <option>Luxemburg</option>
            <option>Malta</option>
            <option>Niederlande</option>
            <option>&#214sterreich</option>
              <option>Polen</option>
            <option>Rumaenien</option>
            <option>Schweden</option>
            <option>Slowakei</option>
            <option>Slowenien</option>
            <option>Spanien</option>
            <option>Tschechien</option>
            <option>Ungarn</option>
            <option>Zypern</option>
            </select>
          </div>
             <div class="col-md-2 mb-3">
              <label for="state">Besteht Berechtigung zum Vorsteuerabzug??</label>
              <select class="custom-select d-block w-100" id="state" required>
                <option value="Yes">Ja</option>
                <option value="No">Nein</option>
              </select>
          </div>
        </div>

        <div class="row">
          <div class="col-12 mb-4">
            <label>Telefon oder E-Mail</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
        </div>
 <div class="row">
       <h4 class="mb-3">  <u>FAHRZEUG</u><br /> 
        </h4>
        
          <div class="col-12 mb-4">
            <label>Marke,Typ</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Amtl. Kennzeichen</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
        </div>

        <div class="row">
            <h4 class="mb-3">  <u>Versicherer</u><br /> 
        </h4>
          <div class="col-12 mb-4">
            <label>Versicherer</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Vers.-Nr:</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Agent</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
                <div class="col-12 mb-4">
            <label>Nr. der Grünen Karte:</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident">Versicherungsausweis oder Grüne Karte gültig bis</label>
            <input type="date" class="form-control" id="dateofaccident" placeholder="" value="" required>
          </div>
     
 <div class="col-md-2 mb-3">
            <label>Besteht eine Vollkaskoversicherung? </label> 
            <div class="input-group">
              <div class="btn-group btn-block" role="group">
                        <input id="toggle-on" name="toggle" type="radio" required>
                     <label for="toggle-on">Ja</label>
                     <input id="toggle-off" name="toggle" type="radio" required>
                       <label for="toggle-off">Nein</label>
              </div>
            </div>
          </div>
</div>

          <div class="row">
            <h4 class="mb-3">  <u>Fahrer</u><br /><small>(siehe Führerscheindaten)</small><br /><br />

               
        </h4>
          <div class="col-12 mb-4">
            <label>Name</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Vorname</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
              <div class="col-12 mb-4">
            <label>Adresse</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
          </div>
                <div class="col-12 mb-4">
            <label>Führerschein-Nr:</label>
            <div class="input-group">
              <input type="text" class="form-control" required>
            </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident">Klasse</label>
                          <input type="text" class="form-control" required>
          </div>
              <div class="col-md-6 mb-3">
            <label for="dateofaccident">ausgestellt durch</label>
                          <input type="text" class="form-control" required>
          </div>
            
          </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident"> gültig ab ((Für Omnibusse, Taxis usw.))</label>
            <input type="date" class="form-control" id="dateofaccident" placeholder="" value="" required>
          </div>
                <div class="col-md-6 mb-3">
            <label for="dateofaccident">bis</label>
            <input type="date" class="form-control" id="dateofaccident" placeholder="" value="" required>
          </div> 
</div>
                <div class="row">
                 <h4 class="mb-3">  <u>Foto des Unfalls</u><br /> </h4>
              <div class="col-md-12 mb-3">
          
  <p>Klicken Sie auf den Button "Datei auswählen", um eine Datei hochzuladen:</p>


   </div>
           
    </div>
           <div class="row">
       <h4 class="mb-3">  <u>Sichtbare Sch&#228den</u><br /> </h4>
          <div class="col-12 mb-4">
            <div class="input-group">
<textarea placeholder=" Bemerkungen" rows = "5" cols = "79" name = "description" class="form-control"></textarea>            </div>
          </div>
        
           
        </div>
             <div class="row">
       <h4 class="mb-3">  <u>Bemerkungen</u><br /> </h4>
          <div class="col-12 mb-4">
            <div class="input-group">
      <textarea placeholder=" Bemerkungen" rows = "5" cols = "79" name = "description" class="form-control"></textarea>
            </div>
          </div>
           
        </div>
      
        <hr class="mb-4">

        <div class="row">
          <div class="col-6 text-left">
        <input type="button" name="b1" value="Back"  onclick="location.href='fahrzeugA.php'">

          </div>
          <div class="col-6 text-right">
           
            <input type="submit" value="Next">
 
          </div>
        </div>


      </form>
    </div>




    </div>
  <!-- footer -->
  <?php include 'footer.php';?>
</body>
</html>