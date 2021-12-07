import React, { Component } from 'react';

class StandortDatum extends Component {

  render() {
    return (    
        <div id="StandortDatum" class="col-md-8">
            <h4 class="mb-3">Standort & Datum </h4>
            <form action="" method="post">      
            <div class="row">
                <div class="col-md-6 mb-3">
                <label for="dateofaccident">Datum des Unfalles</label>
                <input type="date" class="form-control" id="dateofaccident" name="dateofaccident" placeholder="" value="" required></input>
                </div>
                <div class="col-md-6 mb-3">
                <label for="timeofaccident">Uhrzeit</label>
                <input type="time" class="form-control" id="timeofaccident" name="timeofaccident"placeholder="" value="" required></input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 mb-3">
                <label for="country">Land</label>
                <select class="custom-select d-block w-100" id="country" name="country" required>
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
                    <label for="state">Verletzte?</label>
                    <select class="custom-select d-block w-100" id="state" name="state" required>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                <label for="email">Unfallort</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="(Straße, Haus-Nr. bzw. Kilometerstein)" required></input>
                </div>
                <div class="col-md-2 mb-3">
                <label for="hw-classification">PLZ</label>
                <input type="text" id="plz" name="plz" class="form-control" placeholder="1170" value="" required></input>
                </div>                            
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                <label for="node1">Zeugen (Name, Anschrift, Telefon; Insassen von A und B unterstreichen)</label>
            <textarea id="zeugen" name="zeugen" placeholder=" Zeugen..(Name, Anschrift, Telefon; Insassen von A und B unterstreichen)" rows = "5" cols = "79" name = "description" class="form-control"></textarea>
                </div>                   
                                    
                <div class="col-md-2 mb-3">
                <label for="state">Andere Sachschäden als an den Fahrzeugen A u. B</label>
                <select class="custom-select d-block w-100" id="sachschaeden" required>
                <option value="Yes">Ja</option>
                <option value="No">Nein</option>
                </select>
                </div> 
            </div>       
            <hr class="mb-4"></hr>
            <div class="row">
                <div class="col-6 text-left">      
                </div>
            </div>
            </form>
        </div>




    );
  }
}

export default StandortDatum;



