import React, { Component } from 'react';

class Umstaende extends Component {

  render() {
    return (        
        <div id="Umstaende" class="col-md-8">
            <h4 class="mb-3"> Umstände</h4>
            <form action="" method="post">
            <b></b><br /> <small>Bitte ankreuzen, soweit für die Beschreibung der Skizze sachdienlich </small><br /><br />
            <div class="input-group">
                <label class="mx-auto">Fahrzeug parkte (auf der Straße) </label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr aus der Parkstelle heraus</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr in eine Parkstelle hinein</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr aus einem Parkplatz, aus einem Grundstück oder einem Feldweg/Privatweg heraus</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr auf einen Parkplatz, bog in ein Grundstück oder einen Feldweg/Privatweg ein</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">bog in einen Kreisverkehr ein</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr im Kreisverkehr</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr heckseitig auf ein anderes Fahrzeug auf bei Fahrt in dieselbe Richtung und auf derselben Fahrspur </label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr in gleicher Richtung, aber in einer anderer Spur</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">wechselte die Spur</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">überholte</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">bog rechts ab</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">bog links ab</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">setzte zurück </label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">fuhr in die Gegenfahrbahn </label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">kam von rechts</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div class="input-group">
                <label class="mx-auto">beachtete Vorfahrtszeichen nicht</label>
                <div class="btn-group btn-block" role="group">
                    <div class ="col-sm">
                        <label for="toggle-on1">Fahrzeug A</label>
                        <input id="toggle-on1" name="toggle" type="checkbox"></input>
                    </div>
                    <div class ="col-sm">
                        <label for="toggle-off2">Fahrzeug B</label>
                        <input id="toggle-off2" name="toggle" type="checkbox"></input>
                    </div>             
                </div>
            </div>
            <div>
            <input type="submit" id="btn" value="Submit"/> 
            </div>
            
            </form>
        </div>
        
    );
  }
}

export default Umstaende;


