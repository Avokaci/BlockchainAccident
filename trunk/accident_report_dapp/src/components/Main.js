import React, { Component } from 'react';
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import Convert from './Convert'

class Main extends Component {
  render() {
    return (
        <div id="content">
        <div id="msg">
            <pre></pre>
        </div>
            <form onSubmit={this.onSubmit} >      
                <CollapsibleComponent>
                    <CollapsibleHead className="additionalClassForHead">
                        Standort & Datum
                    </CollapsibleHead>
                    <CollapsibleContent className="additionalClassForContent">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <br/>
                            <label htmlFor="dateofaccident">
                                Datum des Unfalles
                            </label>
                            <input type="date" className="form-control" id="dateofaccident" name="dateofaccident" required />
                            </div>
                            <div className="col-md-6 mb-3">
                            <br/>
                            <label htmlFor="timeofaccident">Uhrzeit</label>
                            <input type="time" className="form-control" id="timeofaccident" name="timeofaccident" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                            <label htmlFor="country">Land</label>
                            <select className="custom-select d-block w-100" id="country" name="country" required>
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
                            <div className="col-md-2 mb-3">
                                <label htmlFor="state">Verletzte?</label>
                                <select className="custom-select d-block w-100" id="state" name="state" required>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className="col-md-5 mb-3">
                            <label htmlFor="state">Andere Sachschäden als an den Fahrzeugen A u. B</label>
                            <select className="custom-select d-block w-100" id="sachschaeden" required>
                            <option value="Yes">Ja</option>
                            <option value="No">Nein</option>
                            </select>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <label htmlFor="email">Unfallort</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="(Straße, Haus-Nr. bzw. Kilometerstein)" required />
                            </div>
                            <div className="col-md-2 mb-3">
                            <label htmlFor="hw-classification">PLZ</label>
                            <input type="text" id="plz" name="plz" className="form-control" required />
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label htmlFor="node1">Zeugen (Name, Anschrift, Telefon; Insassen von A und B unterstreichen)</label>
                                <textarea id="zeugen" placeholder=" Zeugen..(Name, Anschrift, Telefon; Insassen von A und B unterstreichen)" rows="5" cols="79" name="description" className="form-control"></textarea>
                            </div>                   
                                              
                           
                        </div>
                    </CollapsibleContent>

                    <CollapsibleHead isExpanded={false}>
                        Fahrzeug A
                    </CollapsibleHead>
                    <CollapsibleContent isExpanded={false}>
                                <h5 className="mt-4">Versicherungsnehmer/Versicherter (siehe Versicherungsbescheinigung)</h5>
                                <div className="row">
                                    <div className="col-12 mb-4">
                                    <label>Name</label>
                                    <div className="input-group">
                                        <input type="text" id="versName" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vorname</label>
                                    <div className="input-group">
                                        <input type="text" id="versVname" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Anschrift</label>
                                    <div className="input-group">
                                        <input type="text" id="versAddress" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-md-2 mb-3">
                                    <label htmlFor="hw-classification">PLZ</label>
                                    <input type="text" id="versPlz" className="form-control" required />
                                    </div>
                                    <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Land</label>
                                    <select className="custom-select d-block w-100" id="versCountry" required>
                                    <option value="">Wählen...</option>
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
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="state">Besteht Berechtigung zum Vorsteuerabzug??</label>
                                        <select className="custom-select d-block w-100" id="versState" required>
                                        <option value="Yes">Ja</option>
                                        <option value="No">Nein</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mb-4">
                                    <label>Telefon oder E-Mail</label>
                                    <div className="input-group">
                                        <input type="text" id="versTelOrEmail" className="form-control" required />
                                    </div>
                                    </div>
                                </div>
                        <div className="row">
                                <h4 className="mb-3">  <u>FAHRZEUG</u><br /> 
                                </h4> 
                                    <div className="col-12 mb-4">
                                    <label>Marke,Typ</label>
                                    <div className="input-group">
                                        <input type="text" id="markeType" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Amtl. Kennzeichen</label>
                                    <div className="input-group">
                                        <input type="text" id="kennzeichen" className="form-control" required />
                                    </div>
                                    </div>
                                </div>           
                                <div className="row">
                                    <h4 className="mb-3">  <u>Versicherer</u><br /> 
                                </h4>
                                    <div className="col-12 mb-4">
                                    <label>Versicherer</label>
                                    <div className="input-group">
                                        <input type="text" id="versicherer" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vers.-Nr:</label>
                                    <div className="input-group">
                                        <input type="text" id="versNr" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Agent</label>
                                    <div className="input-group">
                                        <input type="text" id="agent" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Nr. der Grünen Karte:</label>
                                    <div className="input-group">
                                        <input type="text" id="greencardNr" className="form-control" required />
                                    </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">Versicherungsausweis oder Grüne Karte gültig bis</label>
                                    <input type="text" id="gueltigkeitsdatum" className="form-control" />
                                    </div> 
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">Besteht eine Vollkaskoversicherung?</label>
                                        <select className="custom-select d-block w-100" id="volkasko" required>
                                        <option value="Yes">Ja</option>
                                        <option value="No">Nein</option>
                                        </select>
                                    </div>             
                                </div>
                                    <div className="row">
                                    <h4 className="mb-3">  <u>Fahrer</u><br /><small>(siehe Führerscheindaten)</small><br /><br />
                                </h4>
                                    <div className="col-12 mb-4">
                                    <label>Name</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerName" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vorname</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerVname" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Adresse</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerAdresse" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Führerschein-Nr:</label>
                                    <div className="input-group">
                                        <input type="text" id="fuehrerscheinNr" className="form-control" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">Klasse</label>
                                        <input type="text" id="klasse" className="form-control" required /> 
                                    </div>
                                        <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">ausgestellt durch</label>
                                        <input type="text" id="ausgestellt" className="form-control" required />
                                    </div>    
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident"> gültig ab ((Für Omnibusse, Taxis usw.))</label>
                                    <input type="text" id="gueltigAb" className="form-control" />
                                    </div>
                                        <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">bis</label>
                                    <input type="text" id="bis" className="form-control"/>
                                    </div> 
                                    </div>
                                
                                <div className="row">
                                <h4 className="mb-3">  <u>Sichtbare Schäden</u><br /> </h4>
                                    <div className="col-12 mb-4">
                                    <div className="input-group">
                        <textarea placeholder=" Bemerkungen" id="sichtbareSchaden"rows="5" cols="79" name="description" className="form-control"></textarea>            </div>
                                    </div>         
                                </div>
                                    <div className="row">
                                <h4 className="mb-3">  <u>Bemerkungen</u><br /> </h4>
                                    <div className="col-12 mb-4">
                                    <div className="input-group">
                                <textarea placeholder=" Bemerkungen" id="bemerkungen" rows="5" cols="79" name="description" className="form-control"></textarea>
                                    </div>
                                    </div>                       
                                </div>      
                    </CollapsibleContent>

                    <CollapsibleHead>Fahrzeug B</CollapsibleHead>
                    <CollapsibleContent>
                                <h5 className="mt-4">Versicherungsnehmer/Versicherter (siehe Versicherungsbescheinigung)</h5>
                                <div className="row">
                                    <div className="col-12 mb-4">
                                    <label>Name</label>
                                    <div className="input-group">
                                        <input type="text" id="versNameB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vorname</label>
                                    <div className="input-group">
                                        <input type="text" id="versVnameB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Anschrift</label>
                                    <div className="input-group">
                                        <input type="text" id="versAddressB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-md-2 mb-3">
                                    <label htmlFor="hw-classification">PLZ</label>
                                    <input type="text" id="versPlzB" className="form-control" required />
                                    </div>
                                    <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Land</label>
                                    <select className="custom-select d-block w-100" id="versCountryB" required>
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
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="state">Besteht Berechtigung zum Vorsteuerabzug??</label>
                                        <select className="custom-select d-block w-100" id="versStateB" required>
                                        <option value="Yes">Ja</option>
                                        <option value="No">Nein</option>
                                        </select>
                                    </div>
                                </div>           
                                <div className="row">
                                    <div className="col-12 mb-4">
                                    <label>Telefon oder E-Mail</label>
                                    <div className="input-group">
                                        <input type="text" id="versTelOrEmailB" className="form-control" required />
                                    </div>
                                    </div>
                                </div>
                        <div className="row">
                                <h4 className="mb-3">  <u>FAHRZEUG</u><br /> 
                                </h4>                   
                                    <div className="col-12 mb-4">
                                    <label>Marke,Typ</label>
                                    <div className="input-group">
                                        <input type="text" id="markeTypeB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Amtl. Kennzeichen</label>
                                    <div className="input-group">
                                        <input type="text" id="kennzeichenB" className="form-control" required />
                                    </div>
                                    </div>
                                </div>           
                                <div className="row">
                                    <h4 className="mb-3">  <u>Versicherer</u><br /> 
                                </h4>
                                    <div className="col-12 mb-4">
                                    <label>Versicherer</label>
                                    <div className="input-group">
                                        <input type="text" id="versichererB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vers.-Nr:</label>
                                    <div className="input-group">
                                        <input type="text" id="versNrB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Agent</label>
                                    <div className="input-group">
                                        <input type="text" id="agentB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Nr. der Grünen Karte:</label>
                                    <div className="input-group">
                                        <input type="text" id="greencardNrB" className="form-control" required />
                                    </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">Versicherungsausweis oder Grüne Karte gültig bis</label>
                                    <input type="text" id="gueltigkeitsdatumB" className="form-control" />
                                    </div>                
                                     <div className="col-md-4 mb-3">
                                        <label htmlFor="state">Besteht eine Vollkaskoversicherung?</label>
                                        <select className="custom-select d-block w-100" id="volkaskoB" required>
                                        <option value="Yes">Ja</option>
                                        <option value="No">Nein</option>
                                        </select>
                                    </div>   
                                </div>            
                                    <div className="row">
                                    <h4 className="mb-3">  <u>Fahrer</u><br /><small>(siehe Führerscheindaten)</small><br /><br />                                  
                                </h4>
                                    <div className="col-12 mb-4">
                                    <label>Name</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerNameB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Vorname</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerVnameB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Adresse</label>
                                    <div className="input-group">
                                        <input type="text" id="fahrerAdresseB" className="form-control" required />
                                    </div>
                                    </div>
                                        <div className="col-12 mb-4">
                                    <label>Führerschein-Nr:</label>
                                    <div className="input-group">
                                        <input type="text" id="fuehrerscheinNrB" className="form-control" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">Klasse</label>
                                        <input type="text" id="klasseB" className="form-control" required /> 
                                    </div>
                                        <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">ausgestellt durch</label>
                                        <input type="text" id="ausgestelltB" className="form-control" required />
                                    </div>                       
                                    </div>
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident"> gültig ab ((Für Omnibusse, Taxis usw.))</label>
                                    <input type="text" id="gueltigAbB" className="form-control" />
                                    </div>
                                        <div className="col-md-6 mb-3">
                                    <label htmlFor="dateofaccident">bis</label>
                                    <input type="text" id="bisB" className="form-control" />
                                    </div> 
                                </div>
                                    
                                <div className="row">
                                <h4 className="mb-3">  
                                <u>Sichtbare Schäden</u>
                                <br /> 
                                </h4>
                                    <div className="col-12 mb-4">
                                    <div className="input-group">
                        <textarea placeholder=" Bemerkungen" id="sichtbareSchadenB"rows="5" cols="79" name="description" className="form-control"></textarea>            
                        </div>
                                    </div>
                                </div>
                                    <div className="row">
                                <h4 className="mb-3"> 
                                <u>Bemerkungen
                                </u><br />
                                </h4>
                                    <div className="col-12 mb-4">
                                    <div className="input-group">
                                <textarea placeholder=" Bemerkungen" id="bemerkungenB" rows="5" cols="79" name="description" className="form-control"></textarea>
                                    </div>
                                    </div> 
                                </div>      
                            
                    </CollapsibleContent>

                <CollapsibleHead>Umstände</CollapsibleHead>
                    <CollapsibleContent>
                                <br />
                                    <small>Bitte ankreuzen, soweit für die Beschreibung der Skizze sachdienlich </small>
                                    <br />
                                    <br />
                                <div className="row text-center">
                                <div className="input-group">
                                    <label className="mx-auto">Fahrzeug parkte (auf der Straße) </label>
                                    <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                        <label htmlFor="toggle-on1">Fahrzeug A</label>
                                        <input id="toggle-on1" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                        <label htmlFor="toggle-off2">Fahrzeug B</label>
                                        <input id="toggle-off2" name="toggle" type="checkbox" />
                                        </div>             
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label className="mx-auto">fuhr aus der Parkstelle heraus </label>
                                    <div className="btn-group btn-block" role="group">
                                    <div className="col-sm">
                                    <label htmlFor="toggle-on3">Fahrzeug A</label>
                                    <input id="toggle-on3" name="toggle" type="checkbox" />
                                    </div>
                                    <div className="col-sm">
                                    <label htmlFor="toggle-off3">Fahrzeug B</label>
                                    <input id="toggle-off3" name="toggle" type="checkbox" />
                                    </div>             
                                    </div>
                                <div className="input-group">
                                    <label className="mx-auto">fuhr in eine Parkstelle hinein </label>
                                    <div className="btn-group btn-block" role="group">
                                    <div className="col-sm">
                                        <label htmlFor="toggle-on4">Fahrzeug A</label>
                                        <input id="toggle-on4" name="toggle" type="checkbox" />
                                    </div>
                                    <div className="col-sm">
                                        <label htmlFor="toggle-off4">Fahrzeug B</label>
                                        <input id="toggle-off4" name="toggle" type="checkbox" />
                                    </div>             
                                    </div>
                                </div> 
                                    <div className="input-group">
                                        <label className="mx-auto">fuhr aus einem Parkplatz, aus einem Grundstück oder einem Feldweg/Privatweg heraus </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                        <label htmlFor="toggle-on5">Fahrzeug A</label>
                                        <input id="toggle-on5" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                        <label htmlFor="toggle-off5">Fahrzeug B</label>
                                        <input id="toggle-off5" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">fuhr auf einen Parkplatz, bog in ein Grundstück oder einen Feldweg/Privatweg ein </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on6">Fahrzeug A</label>
                                            <input id="toggle-on6" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off6">Fahrzeug B</label>
                                            <input id="toggle-off6" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">bog in einen Kreisverkehr ein</label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on7">Fahrzeug A</label>
                                            <input id="toggle-on7" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off7">Fahrzeug B</label>
                                            <input id="toggle-off7" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">fuhr im Kreisverkehr </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on8">Fahrzeug A</label>
                                            <input id="toggle-on8" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off8">Fahrzeug B</label>
                                            <input id="toggle-off8" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">fuhr heckseitig auf ein anderes Fahrzeug auf bei Fahrt in dieselbe Richtung und auf derselben Fahrspur </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on9">Fahrzeug A</label>
                                            <input id="toggle-on9" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off9">Fahrzeug B</label>
                                            <input id="toggle-off9" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">fuhr in gleicher Richtung, aber in einer anderer Spur </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on10">Fahrzeug A</label>
                                            <input id="toggle-on10" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off10">Fahrzeug B</label>
                                            <input id="toggle-off10" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">wechselte die Spur </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on11">Fahrzeug A</label>
                                            <input id="toggle-on11" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off11">Fahrzeug B</label>
                                            <input id="toggle-off11" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">überholte </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on12">Fahrzeug A</label>
                                            <input id="toggle-on12" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off12">Fahrzeug B</label>
                                            <input id="toggle-off12" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">bog rechts ab </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on13">Fahrzeug A</label>
                                            <input id="toggle-on13" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off13">Fahrzeug B</label>
                                            <input id="toggle-off13" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">bog links ab </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on14">Fahrzeug A</label>
                                            <input id="toggle-on14" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off14">Fahrzeug B</label>
                                            <input id="toggle-off14" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">setzte zurück </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on15">Fahrzeug A</label>
                                            <input id="toggle-on15" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off15">Fahrzeug B</label>
                                            <input id="toggle-off15" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">fuhr in die Gegenfahrbahn </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on16">Fahrzeug A</label>
                                            <input id="toggle-on16" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off16">Fahrzeug B</label>
                                            <input id="toggle-off16" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">kam von rechts</label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on17">Fahrzeug A</label>
                                            <input id="toggle-on17" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off17">Fahrzeug B</label>
                                            <input id="toggle-off17" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                        <div className="input-group">
                                        <label className="mx-auto">beachtete Vorfahrtszeichen nicht </label>
                                        <div className="btn-group btn-block" role="group">
                                        <div className="col-sm">
                                            <label htmlFor="toggle-on18">Fahrzeug A</label>
                                            <input id="toggle-on18" name="toggle" type="checkbox" />
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="toggle-off18">Fahrzeug B</label>
                                            <input id="toggle-off18" name="toggle" type="checkbox" />
                                        </div>             
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-5"></div>
                                    <div class="col">
                                        <div className="col-5">
                                            <label className="importantLabel">Stellen Sie sicher, dass die Daten in Ihrem Formular vollständig und korrekt sind, bevor Sie auf „Bestätigen“ klicken!</label>
                                            <input type="submit" id="btn" value="Bestätigen"  class="btn btn-success"/>           
                                        </div>
                                        <div id="bMsg">
                                        <pre></pre>
                                        </div>
                                    </div>

                                   
                                </div>
                                </div>
                    </CollapsibleContent>
                </CollapsibleComponent>
                </form>
            </div>
    );
  }
}

export default Main;