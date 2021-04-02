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
      <h4 class="mb-3"> Umstände
      <form action="umstaende.php" method="post">

        <b></b><br />
          <small>Bitte ankreuzen, soweit für die Beschreibung der Skizze sachdienlich </small><br /><br />
      </h4>
       <div class="row text-center">
       <div class="input-group">
          <label class="mx-auto">Fahrzeug parkte (auf der Straße) </label>
            <div class="btn-group btn-block" role="group">
              <div class ="col-sm">
                <label for="toggle-on1">Fahrzeug A</label>
                <input id="toggle-on1" name="toggle" type="checkbox">
              </div>
              <div class ="col-sm">
                <label for="toggle-off2">Fahrzeug B</label>
                <input id="toggle-off2" name="toggle" type="checkbox">
              </div>             
            </div>
        </div>
        <div class="input-group">
          <label class="mx-auto">fuhr aus der Parkstelle heraus </label>
          <div class="btn-group btn-block" role="group">
          <div class ="col-sm">
            <label for="toggle-on3">Fahrzeug A</label>
            <input id="toggle-on3" name="toggle" type="checkbox">
          </div>
          <div class ="col-sm">
            <label for="toggle-off3">Fahrzeug B</label>
            <input id="toggle-off3" name="toggle" type="checkbox">
          </div>             
          </div>
        <div class="input-group">
          <label class="mx-auto">fuhr in eine Parkstelle hinein </label>
          <div class="btn-group btn-block" role="group">
            <div class ="col-sm">
              <label for="toggle-on4">Fahrzeug A</label>
              <input id="toggle-on4" name="toggle" type="checkbox">
            </div>
            <div class ="col-sm">
              <label for="toggle-off4">Fahrzeug B</label>
              <input id="toggle-off4" name="toggle" type="checkbox">
            </div>             
            </div>
        </div> 
            <div class="input-group">
              <label class="mx-auto">fuhr aus einem Parkplatz, aus einem Grundstück oder einem Feldweg/Privatweg heraus </label>
              <div class="btn-group btn-block" role="group">
              <div class ="col-sm">
                <label for="toggle-on5">Fahrzeug A</label>
                <input id="toggle-on5" name="toggle" type="checkbox">
              </div>
              <div class ="col-sm">
                <label for="toggle-off5">Fahrzeug B</label>
                <input id="toggle-off5" name="toggle" type="checkbox">
              </div>             
              </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">fuhr auf einen Parkplatz, bog in ein Grundstück oder einen Feldweg/Privatweg ein </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on6">Fahrzeug A</label>
                  <input id="toggle-on6" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off6">Fahrzeug B</label>
                  <input id="toggle-off6" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">bog in einen Kreisverkehr ein</label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on7">Fahrzeug A</label>
                  <input id="toggle-on7" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off7">Fahrzeug B</label>
                  <input id="toggle-off7" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">fuhr im Kreisverkehr </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on8">Fahrzeug A</label>
                  <input id="toggle-on8" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off8">Fahrzeug B</label>
                  <input id="toggle-off8" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">fuhr heckseitig auf ein anderes Fahrzeug auf bei Fahrt in dieselbe Richtung und auf derselben Fahrspur </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on9">Fahrzeug A</label>
                  <input id="toggle-on9" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off9">Fahrzeug B</label>
                  <input id="toggle-off9" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">fuhr in gleicher Richtung, aber in einer anderer Spur </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on10">Fahrzeug A</label>
                  <input id="toggle-on10" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off10">Fahrzeug B</label>
                  <input id="toggle-off10" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">wechselte die Spur </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on11">Fahrzeug A</label>
                  <input id="toggle-on11" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off11">Fahrzeug B</label>
                  <input id="toggle-off11" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">überholte </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on12">Fahrzeug A</label>
                  <input id="toggle-on12" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off12">Fahrzeug B</label>
                  <input id="toggle-off12" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">bog rechts ab </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on13">Fahrzeug A</label>
                  <input id="toggle-on13" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off13">Fahrzeug B</label>
                  <input id="toggle-off13" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">bog links ab </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on14">Fahrzeug A</label>
                  <input id="toggle-on14" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off14">Fahrzeug B</label>
                  <input id="toggle-off14" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">setzte zurück </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on15">Fahrzeug A</label>
                  <input id="toggle-on15" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off15">Fahrzeug B</label>
                  <input id="toggle-off15" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">fuhr in die Gegenfahrbahn </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on16">Fahrzeug A</label>
                  <input id="toggle-on16" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off16">Fahrzeug B</label>
                  <input id="toggle-off16" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">kam von rechts </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on17">Fahrzeug A</label>
                  <input id="toggle-on17" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off17">Fahrzeug B</label>
                  <input id="toggle-off17" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
              <div class="input-group">
                <label class="mx-auto">beachtete Vorfahrtszeichen nicht </label>
                <div class="btn-group btn-block" role="group">
                <div class ="col-sm">
                  <label for="toggle-on18">Fahrzeug A</label>
                  <input id="toggle-on18" name="toggle" type="checkbox">
                </div>
                <div class ="col-sm">
                  <label for="toggle-off18">Fahrzeug B</label>
                  <input id="toggle-off18" name="toggle" type="checkbox">
                </div>             
                </div>
            </div>
             
          
                  </div>


             <hr class="mb-4">

        <div class="row">
          <div class="col-6 text-left">
            <input type="submit" value="Submit">

          </div>
          <div class="col-6 text-right">
 
          </div>
        </div>


      </form>
    </div>



    </div>
  <!-- footer -->
  <?php include 'footer.php';?>
</body>
</html>