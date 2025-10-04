<?php
/**
 * Template part for displaying why choose us section
 *
 * @package Ghoomo_Saste_Me
 */

$features = array(
    array(
        'title' => 'Community Driven',
        'subtitle' => '13,540+ Members',
        'color' => '#e91e63',
        'icon' => '👥',
    ),
    array(
        'title' => '250+ Destinations',
        'subtitle' => 'Across India',
        'color' => '#2196f3',
        'icon' => '🗺️',
    ),
    array(
        'title' => '100% Safe & Secure',
        'subtitle' => 'Zero Incidents',
        'color' => '#4caf50',
        'icon' => '🛡️',
    ),
    array(
        'title' => 'Award Winning Service',
        'subtitle' => '4.9★ Rating',
        'color' => '#9c27b0',
        'icon' => '🏆',
    ),
    array(
        'title' => 'Budget Friendly',
        'subtitle' => 'From ₹5,000',
        'color' => '#ff9800',
        'icon' => '💰',
    ),
    array(
        'title' => 'Instant Bookings',
        'subtitle' => '2-Min Booking',
        'color' => '#00bcd4',
        'icon' => '⚡',
    ),
);
?>

<section id="why-choose-us" class="why-choose-us-section" style="padding: 80px 20px; background-color: var(--color-card);">
    <div class="container">
        <div class="section-title">
            <h2 style="margin-bottom: 8px;">
                <span style="color: var(--color-foreground);">WHY THOUSANDS</span>
                <span style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">CHOOSE US</span>
            </h2>
            <p>Join thousands of happy travelers who trust us for their adventures</p>
        </div>

        <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 48px;">
            <?php foreach ($features as $feature) : ?>
                <div class="feature-card" style="background: linear-gradient(135deg, <?php echo esc_attr($feature['color']); ?>, <?php echo esc_attr($feature['color']); ?>dd); padding: 32px; border-radius: var(--radius-lg); text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <div style="font-size: 3rem; margin-bottom: 16px;"><?php echo $feature['icon']; ?></div>
                    <h3 style="font-size: 1.25rem; margin-bottom: 8px; color: #ffffff;">
                        <?php echo esc_html($feature['title']); ?>
                    </h3>
                    <p style="font-size: 1rem; color: rgba(255, 255, 255, 0.9); margin: 0;">
                        <?php echo esc_html($feature['subtitle']); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>

        <div style="display: flex; justify-content: center; gap: 16px; margin-top: 48px; flex-wrap: wrap;">
            <a href="#destinations" class="btn btn-primary">Browse Destinations</a>
            <a href="#contact" class="btn btn-secondary">Join Community</a>
        </div>
    </div>
</section>

<style>
    .feature-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
    }
</style>