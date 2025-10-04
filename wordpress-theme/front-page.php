<?php
/**
 * The front page template file
 *
 * @package Ghoomo_Saste_Me
 */

get_header();
?>

<main id="main-content" class="site-main">
    <?php
    // Hero Section
    get_template_part('template-parts/hero');

    // Tagline Section
    get_template_part('template-parts/tagline');

    // Featured Packages Section
    get_template_part('template-parts/featured-packages');

    // Destinations Section
    get_template_part('template-parts/destinations');

    // Why Choose Us Section
    get_template_part('template-parts/why-choose-us');

    // Community Trips Section
    get_template_part('template-parts/community-trips');

    // Testimonials Section
    get_template_part('template-parts/testimonials');
    ?>
</main>

<?php
get_footer();