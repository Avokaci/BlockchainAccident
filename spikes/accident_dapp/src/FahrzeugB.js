import React, { Component } from 'react';

class FahrzeugB extends Component {

  render() {
    return (
        <div id="FahrzeugB" class="col-md-8">
        <h4 class="mb-3">FAHRZEUG B</h4>
        <form action="" method="post">
        <h5 class="mt-4">Versicherungsnehmer/Versicherter (siehe Versicherungsbescheinigung)</h5>
        <div class="row">
            <div class="col-12 mb-4">
            <label>Name</label>
            <div class="input-group">
                <input type="text" id="versNameB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Vorname</label>
            <div class="input-group">
                <input type="text" id="versVnameB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Anschrift</label>
            <div class="input-group">
                <input type="text" id="versAddressB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-md-2 mb-3">
            <label for="hw-classification">PLZ</label>
            <input type="text" id="versPlzB" class="form-control" placeholder="1170" value="" required></input>
            </div>
            <div class="col-md-5 mb-3">
            <label for="country">Land</label>
            <select class="custom-select d-block w-100" id="versCountryB" required>
            <option value="">Wählen...</option>
            <option>Belgien</option>
            <option>Bulgarien </option>
            <option>Dänemark</option>
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
            <option>Österreich</option>
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
                <select class="custom-select d-block w-100" id="versStateB" required>
                <option value="Yes">Ja</option>
                <option value="No">Nein</option>
                </select>
            </div>
        </div>           
        <div class="row">
            <div class="col-12 mb-4">
            <label>Telefon oder E-Mail</label>
            <div class="input-group">
                <input type="text" id="versTelOrEmailB" class="form-control" required></input>
            </div>
            </div>
        </div>
        <div class="row">
        <h4 class="mb-3">  <u>FAHRZEUG</u><br /> 
        </h4>                   
            <div class="col-12 mb-4">
            <label>Marke,Typ</label>
            <div class="input-group">
                <input type="text" id="markeTypeB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Amtl. Kennzeichen</label>
            <div class="input-group">
                <input type="text" id="kennzeichenB" class="form-control" required></input>
            </div>
            </div>
        </div>           
        <div class="row">
            <h4 class="mb-3">  <u>Versicherer</u><br /> 
        </h4>
            <div class="col-12 mb-4">
            <label>Versicherer</label>
            <div class="input-group">
                <input type="text" id="versichererB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Vers.-Nr:</label>
            <div class="input-group">
                <input type="text" id="versNrB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Agent</label>
            <div class="input-group">
                <input type="text" id="agentB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Nr. der Grünen Karte:</label>
            <div class="input-group">
                <input type="text" id="greencardNrB" class="form-control" required></input>
            </div>
            </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident">Versicherungsausweis oder Grüne Karte gültig bis</label>
            <input type="date" id="gueltigkeitsdatumB" class="form-control" id="dateofaccident" placeholder="" value="" required></input>
            </div>                
             <div class="col-md-2 mb-3">
                <label for="state">Besteht eine Vollkaskoversicherung?</label>
                <select class="custom-select d-block w-100" id="volkaskoB" required>
                <option value="Yes">Ja</option>
                <option value="No">Nein</option>
                </select>
            </div>   
        </div>            
            <div class="row">
            <h4 class="mb-3">  <u>Fahrer</u><br /><small>(siehe Führerscheindaten)</small><br /><br />                                  
        </h4>
            <div class="col-12 mb-4">
            <label>Name</label>
            <div class="input-group">
                <input type="text" id="fahrerNameB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Vorname</label>
            <div class="input-group">
                <input type="text" id="fahrerVnameB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Adresse</label>
            <div class="input-group">
                <input type="text" id="fahrerAdresseB" class="form-control" required></input>
            </div>
            </div>
                <div class="col-12 mb-4">
            <label>Führerschein-Nr:</label>
            <div class="input-group">
                <input type="text" id="fuehrerscheinNrB" class="form-control" required></input>
            </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident">Klasse</label>
                <input type="text" id="klasseB" class="form-control" required> </input>
            </div>
                <div class="col-md-6 mb-3">
            <label for="dateofaccident">ausgestellt durch</label>
                <input type="text" id="ausgestelltB" class="form-control" required></input>
            </div>                       
            </div>
            <div class="col-md-6 mb-3">
            <label for="dateofaccident"> gültig ab ((Für Omnibusse, Taxis usw.))</label>
            <input type="date" id="gueltigAbB" class="form-control" id="dateofaccident" placeholder="" value="" required></input>
            </div>
                <div class="col-md-6 mb-3">
            <label for="dateofaccident">bis</label>
            <input type="date" id="bisB" class="form-control" placeholder="" value="" required></input>
            </div> 
        </div>
            <div class="row">
                <h4 class="mb-3">  <u>Foto des Unfalls</u><br /> </h4>
                <div class="col-md-12 mb-3">                        
        <p>Klicken Sie auf den Button "Datei auswählen", um eine Datei hochzuladen:</p>
        <input type ='file'/>           
        </div>                        
        </div>
        <div class="row">
        <h4 class="mb-3">  <u>Sichtbare Schäden</u><br /> </h4>
            <div class="col-12 mb-4">
            <div class="input-group">
        <textarea placeholder=" Bemerkungen" id="sichtbareSchadenB"rows = "5" cols = "79" name = "description" class="form-control"></textarea></div>
            </div>
        </div>
            <div class="row">
        <h4 class="mb-3">  <u>Bemerkungen</u><br /> </h4>
            <div class="col-12 mb-4">
            <div class="input-group">
        <textarea placeholder=" Bemerkungen" id="bemerkungenB" rows = "5" cols = "79" name = "description" class="form-control"></textarea>
            </div>
            </div> 
        </div>      
        
        </form>
        </div>
    );
  }
}

export default FahrzeugB;



