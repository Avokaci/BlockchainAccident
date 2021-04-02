
<div class="col-md-8">
      <h4 class="mb-3">Standort & Datum </h4>
      <form action="fahrzeugA.php" method="post">      
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="dateofaccident">Datum  des Unfalles</label>
            <input type="date" class="form-control" id="dateofaccident" placeholder="" value="" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="timeofaccident">Uhrzeit</label>
            <input type="time" class="form-control" id="timeofaccident" placeholder="" value="" required>
          </div>
        </div>
        <div class="row">
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
              <label for="state">Verletzte?</label>
              <select class="custom-select d-block w-100" id="state" required>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="email">Unfallort</label>
            <input type="text" class="form-control" id="email" placeholder="(Straße, Haus-Nr. bzw. Kilometerstein)" required>
          </div>
          <div class="col-md-2 mb-3">
            <label for="hw-classification">PLZ</label>
            <input type="text" class="form-control" placeholder="1170" value="" required>
          </div>
          
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="node1">Zeugen (Name, Anschrift, Telefon; Insassen von A und B unterstreichen)</label>
       <textarea placeholder=" Zeugen..(Name, Anschrift, Telefon; Insassen von A und B unterstreichen)" rows = "5" cols = "79" name = "description" class="form-control"></textarea>

          </div>
        
             <div class="col-md-2 mb-3">
            <label>Andere Sachschäden als an den Fahrzeugen A u. B </label>
            
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
 
        

  
 

        <hr class="mb-4">

        <div class="row">
          <div class="col-6 text-left">      
          </div>
          <div class="col-6 text-right">           
             <input type="submit" value="Next">
          </div>
        </div>


      </form>
    </div>


