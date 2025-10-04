<?php
/**
 * Template part for displaying the hero section
 *
 * @package Ghoomo_Saste_Me
 */
?>

<section id="hero" class="hero-section" style="position: relative; min-height: 600px; padding: 80px 20px; background: linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('<?php echo esc_url(get_template_directory_uri() . '/images/hero-bg.jpg'); ?>') center/cover; display: flex; align-items: center;">
    <div class="container">
        <div class="hero-content" style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 16px; line-height: 1.1;">
                <?php echo esc_html(get_theme_mod('hero_title', 'Ghoomo Saste Me')); ?>
            </h1>
            
            <p class="hero-subtitle" style="font-size: clamp(1.25rem, 2.5vw, 1.75rem); color: var(--color-primary); margin-bottom: 40px;">
                <?php echo esc_html(get_theme_mod('hero_subtitle', 'Fun का ठिकाना, Stories का खजाना')); ?>
            </p>

            <div class="hero-search" style="background-color: rgba(45, 45, 45, 0.9); padding: 32px; border-radius: var(--radius-lg); max-width: 600px; margin: 0 auto 40px;">
                <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Pack Your Adventure</h3>
                <form class="search-form" style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <input type="text" placeholder="Where do you want to go?" style="flex: 1; min-width: 200px; padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border); background-color: var(--color-background); color: var(--color-foreground);">
                    <button type="submit" class="btn btn-primary">Start Journey</button>
                </form>
            </div>

            <div class="hero-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px; margin-top: 60px;">
                <div class="stat-item" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">12,463+</div>
                    <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Happy Travelers</div>
                </div>
                <div class="stat-item" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">4.5★</div>
                    <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Rating</div>
                </div>
                <div class="stat-item" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">230+</div>
                    <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Destinations</div>
                </div>
                <div class="stat-item" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">1,250</div>
                    <div style="font-size: 0.875rem; color: var(--color-text-secondary);">This Month</div>
                </div>
            </div>
        </div>
    </div>
</section>