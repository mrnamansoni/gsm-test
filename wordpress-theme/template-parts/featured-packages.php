<?php
/**
 * Template part for displaying featured packages
 *
 * @package Ghoomo_Saste_Me
 */

// Sample packages data (in a real theme, this would come from custom post types or database)
$packages = array(
    array(
        'title' => 'Europe Explorer Adventure',
        'image' => get_template_directory_uri() . '/images/package-1.jpg',
        'price' => '₹45,000',
        'original_price' => '₹55,000',
        'description' => 'Experience the magical beauty of European destinations with guided tours.',
        'duration' => '10 Days',
        'highlights' => array('Paris', 'Rome', 'Amsterdam'),
    ),
    array(
        'title' => 'Mystical Himalayas Expedition',
        'image' => get_template_directory_uri() . '/images/package-2.jpg',
        'price' => '₹25,000',
        'original_price' => '₹32,000',
        'description' => 'Trek through breathtaking Himalayan landscapes and spiritual destinations.',
        'duration' => '7 Days',
        'highlights' => array('Manali', 'Leh', 'Dharamshala'),
    ),
    array(
        'title' => 'Tropical Paradise Collection',
        'image' => get_template_directory_uri() . '/images/package-3.jpg',
        'price' => '₹35,000',
        'original_price' => '₹42,000',
        'description' => 'Relax on pristine beaches and explore vibrant coastal cultures.',
        'duration' => '6 Days',
        'highlights' => array('Goa', 'Kerala', 'Andaman'),
    ),
);
?>

<section id="packages" class="featured-packages" style="padding: 80px 20px; background-color: var(--color-card);">
    <div class="container">
        <div class="section-title">
            <span style="display: inline-block; padding: 8px 16px; background-color: var(--color-primary); color: var(--color-primary-foreground); border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 16px;">FEATURED WORK</span>
            <h2>Explore Our Premium Travel Packages</h2>
            <p>Handpicked destinations and curated experiences for unforgettable journeys</p>
        </div>

        <div class="packages-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; margin-top: 48px;">
            <?php foreach ($packages as $package) : ?>
                <div class="package-card card" style="overflow: hidden;">
                    <div class="package-image" style="width: 100%; height: 250px; background: url('<?php echo esc_url($package['image']); ?>') center/cover; position: relative;">
                        <span style="position: absolute; top: 16px; right: 16px; background-color: var(--color-primary); color: var(--color-primary-foreground); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.875rem;">
                            <?php echo esc_html($package['duration']); ?>
                        </span>
                    </div>
                    
                    <div class="package-content" style="padding: 24px;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--color-foreground);">
                            <?php echo esc_html($package['title']); ?>
                        </h3>
                        
                        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
                            <?php echo esc_html($package['description']); ?>
                        </p>

                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                            <?php foreach ($package['highlights'] as $highlight) : ?>
                                <span style="padding: 4px 12px; background-color: var(--color-muted); border-radius: 12px; font-size: 0.875rem; color: var(--color-text-secondary);">
                                    <?php echo esc_html($highlight); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>

                        <div class="package-price" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                            <span style="font-size: 1.75rem; font-weight: 700; color: var(--color-primary);">
                                <?php echo esc_html($package['price']); ?>
                            </span>
                            <span style="font-size: 1rem; color: var(--color-text-secondary); text-decoration: line-through;">
                                <?php echo esc_html($package['original_price']); ?>
                            </span>
                        </div>

                        <a href="#" class="btn btn-primary" style="width: 100%; text-align: center;">VIEW PACKAGE</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>