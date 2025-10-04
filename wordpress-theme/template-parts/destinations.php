<?php
/**
 * Template part for displaying destinations
 *
 * @package Ghoomo_Saste_Me
 */

// Sample destinations data
$destinations = array(
    array(
        'name' => 'Manali',
        'image' => get_template_directory_uri() . '/images/manali.jpg',
        'price' => 'From ₹5,000',
        'rating' => '4.8',
        'travelers' => '2,340',
        'description' => 'Mountain paradise with snow-capped peaks',
        'features' => array('Adventure Sports', 'Hill Station'),
    ),
    array(
        'name' => 'Udaipur',
        'image' => get_template_directory_uri() . '/images/udaipur.jpg',
        'price' => 'From ₹6,500',
        'rating' => '4.9',
        'travelers' => '1,890',
        'description' => 'City of lakes and royal palaces',
        'features' => array('Royal Palaces', 'Cultural'),
    ),
    array(
        'name' => 'Rishikesh',
        'image' => get_template_directory_uri() . '/images/rishikesh.jpg',
        'price' => 'From ₹4,500',
        'rating' => '4.7',
        'travelers' => '3,120',
        'description' => 'Yoga capital and adventure hub',
        'features' => array('Spiritual', 'Rafting'),
    ),
    array(
        'name' => 'Kasol',
        'image' => get_template_directory_uri() . '/images/kasol.jpg',
        'price' => 'From ₹5,500',
        'rating' => '4.8',
        'travelers' => '1,560',
        'description' => 'Hippie paradise in Parvati Valley',
        'features' => array('Trekking', 'Backpacking'),
    ),
    array(
        'name' => 'Kedarnath',
        'image' => get_template_directory_uri() . '/images/kedarnath.jpg',
        'price' => 'From ₹8,000',
        'rating' => '4.9',
        'travelers' => '980',
        'description' => 'Sacred Himalayan pilgrimage site',
        'features' => array('Spiritual', 'Pilgrimage'),
    ),
    array(
        'name' => 'Goa',
        'image' => get_template_directory_uri() . '/images/goa.jpg',
        'price' => 'From ₹7,000',
        'rating' => '4.8',
        'travelers' => '4,210',
        'description' => 'Beach paradise with vibrant nightlife',
        'features' => array('Beaches', 'Nightlife'),
    ),
);
?>

<section id="destinations" class="destinations-section" style="padding: 80px 20px; background-color: var(--color-background);">
    <div class="container">
        <div class="section-title">
            <h2 style="margin-bottom: 8px;">
                <span style="color: var(--color-foreground);">TOP NOTCH</span>
                <span style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">DESTINATIONS</span>
            </h2>
            <p>Explore India's most breathtaking locations curated just for you</p>
        </div>

        <div class="destinations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-top: 48px;">
            <?php foreach ($destinations as $destination) : ?>
                <div class="destination-card card">
                    <div class="destination-image" style="width: 100%; height: 220px; background: url('<?php echo esc_url($destination['image']); ?>') center/cover; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin: -24px -24px 0;">
                        <div style="position: absolute; top: 16px; right: 16px; background-color: var(--color-primary); color: var(--color-primary-foreground); padding: 8px 16px; border-radius: 20px; font-weight: 700;">
                            <?php echo esc_html($destination['price']); ?>
                        </div>
                    </div>
                    
                    <div style="padding: 24px 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <h3 style="font-size: 1.5rem; margin: 0;"><?php echo esc_html($destination['name']); ?></h3>
                            <div style="display: flex; align-items: center; gap: 4px;">
                                <span style="color: var(--color-star-rating);">★</span>
                                <span style="font-weight: 600;"><?php echo esc_html($destination['rating']); ?></span>
                            </div>
                        </div>

                        <p style="color: var(--color-text-secondary); margin-bottom: 12px; font-size: 0.875rem;">
                            <?php echo esc_html($destination['description']); ?>
                        </p>

                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                            <?php foreach ($destination['features'] as $feature) : ?>
                                <span style="padding: 4px 12px; background-color: var(--color-muted); border-radius: 12px; font-size: 0.75rem; color: var(--color-text-secondary);">
                                    <?php echo esc_html($feature); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>

                        <div style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 16px;">
                            <?php echo esc_html($destination['travelers']); ?>+ travelers
                        </div>

                        <a href="#" class="btn btn-secondary" style="width: 100%; text-align: center;">
                            Explore <?php echo esc_html($destination['name']); ?>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div style="text-align: center; margin-top: 48px;">
            <a href="#" class="btn btn-primary">View All Destinations</a>
        </div>
    </div>
</section>