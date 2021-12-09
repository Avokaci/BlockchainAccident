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
    <!-- Form: Standort&Datum -->
    <?php
    include 'StandortDatum.php';
    /*include 'umstaende.php';
    
    include 'fahrzeugA.php';
    include 'fahrzeugB.php';*/
    ?>   
  </div>
  <!-- footer -->
  <?php include 'footer.php';?>
</body>
</html>

