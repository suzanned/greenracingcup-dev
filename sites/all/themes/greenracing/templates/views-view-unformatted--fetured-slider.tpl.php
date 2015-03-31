<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>



<?php foreach ($rows as $id => $row): ?>
  <figure<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; 
	?>
  </figure>
<?php endforeach; ?>