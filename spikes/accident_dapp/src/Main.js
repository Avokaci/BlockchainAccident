import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <div className="row">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Standort & Datum
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    <div id="StandortDatum" className="col-md-8">
                        <h4 className="mb-3">Standort & Datum </h4>
                        <form action="" method="post">      
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <label for="dateofaccident">Datum  des Unfalles</label>
                            <input type="date" className="form-control" id="dateofaccident" name="dateofaccident" placeholder="" value="" required>
                            </div>
                            <div className="col-md-6 mb-3">
                            <label for="timeofaccident">Uhrzeit</label>
                            <input type="time" className="form-control" id="timeofaccident" name="timeofaccident"placeholder="" value="" required>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                            <label for="country">Land</label>
                            <select className="custom-select d-block w-100" id="country" name="country" required>
                                <option value="">W&#228hlen...</option>
                                <option>Belgien</option>
                            <option>Bulgarien </option>
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
                            <div className="col-md-2 mb-3">
                                <label for="state">Verletzte?</label>
                                <select className="custom-select d-block w-100" id="state" name="state" required>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <label for="email">Unfallort</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="(Straße, Haus-Nr. bzw. Kilometerstein)" required>
                            </div>
                            <div className="col-md-2 mb-3">
                            <label for="hw-classification">PLZ</label>
                            <input type="text" id="plz" name="plz" className="form-control" placeholder="1170" value="" required>
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <label for="node1">Zeugen (Name, Anschrift, Telefon; Insassen von A und B unterstreichen)</label>
                        <textarea id="zeugen" name="zeugen" placeholder=" Zeugen..(Name, Anschrift, Telefon; Insassen von A und B unterstreichen)" rows = "5" cols = "79" name = "description" class="form-control"></textarea>
                            </div>                   
                                              
                            <div className="col-md-2 mb-3">
                            <label for="state">Andere Sachschäden als an den Fahrzeugen A u. B</label>
                            <select className="custom-select d-block w-100" id="sachschaeden" required>
                            <option value="Yes">Ja</option>
                            <option value="No">Nein</option>
                            </select>
                            </div> 
                        </div>       
                        <hr className="mb-4">
                        <div className="row">
                            <div className="col-6 text-left">      
                            </div>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;