<?php
/**
 * Title: GOV.UK 1/3 – 2/3 layout
 * Slug: yourtheme/govuk-one-third-two-thirds
 * Categories: layout
 * Description: GOV.UK grid layout with one-third and two-thirds columns.
 */
?>

<!-- wp:group {"className":"govuk-grid-row"} -->
<div class="wp-block-group govuk-grid-row">

    <!-- wp:group {"className":"govuk-grid-column-one-third"} -->
    <div class="wp-block-group govuk-grid-column-one-third">
        <!-- wp:heading -->
        <h2>Sidebar heading</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph -->
        <p>Add sidebar content here.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"className":"govuk-grid-column-two-thirds"} -->
    <div class="wp-block-group govuk-grid-column-two-thirds">
        <!-- wp:heading -->
        <h2>Main content heading</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph -->
        <p>Add main content here.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->