<?php
/**
 * Template part for displaying community trips
 *
 * @package Ghoomo_Saste_Me
 */

$community_trips = array(
    array(
        'title' => 'Himachal Adventure Week',
        'image' => get_template_directory_uri() . '/images/himachal.jpg',
        'price' => '₹8,500',
        'original_price' => '₹12,000',
        'difficulty' => 'Moderate',
        'rating' => '4.9',
        'group_size' => '15-20',
        'dates' => 'Mar 15-22, 2024',
    ),
    array(
        'title' => 'Rajasthan Royal Heritage',
        'image' => get_template_directory_uri() . '/images/rajasthan.jpg',
        'price' => '₹9,500',
        'original_price' => '₹14,000',
        'difficulty' => 'Easy',
        'rating' => '4.8',
        'group_size' => '20-25',
        'dates' => 'Apr 5-11, 2024',
    ),
    array(
        'title' => 'Uttarakhand Spiritual Journey',
        'image' => get_template_directory_uri() . '/images/uttarakhand.jpg',
        'price' => '₹7,500',
        'original_price' => '₹10,500',
        'difficulty' => 'Moderate',
        'rating' => '4.9',
        'group_size' => '12-18',
        'dates' => 'May 10-16, 2024',
    ),
);
?>

<section id="community-trips" class="community-trips-section" style="padding: 80px 20px; background-color: var(--color-background);">
    <div class="container">
        <div class="section-title">
            <span style="display: inline-block; padding: 8px 16px; background-color: var(--color-accent); color: var(--color-accent-foreground); border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 16px;">COMMUNITY TRIPS</span>
            <h2>Upcoming Community Trips</h2>
            <p>Join fellow travelers on group adventures and create lasting memories together</p>
        </div>

        <div class="trips-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; margin-top: 48px;">
            <?php foreach ($community_trips as $trip) : ?>
                <div class="trip-card card">
                    <div class="trip-image" style="width: 100%; height: 220px; background: url('<?php echo esc_url($trip['image']); ?>') center/cover; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin: -24px -24px 0;">
                        <div style="position: absolute; top: 16px; left: 16px; background-color: var(--color-accent); color: var(--color-accent-foreground); padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">
                            <?php echo esc_html($trip['difficulty']); ?>
                        </div>
                        <div style="position: absolute; top: 16px; right: 16px; background-color: var(--color-primary); color: var(--color-primary-foreground); padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                            <span>★</span>
                            <span><?php echo esc_html($trip['rating']); ?></span>
                        </div>
                    </div>
                    
                    <div style="padding: 24px 0 0;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 16px;">
                            <?php echo esc_html($trip['title']); ?>
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px; font-size: 0.875rem;">
                            <div>
                                <span style="color: var(--color-text-secondary);">Group Size:</span>
                                <div style="font-weight: 600; color: var(--color-foreground);"><?php echo esc_html($trip['group_size']); ?> people</div>
                            </div>
                            <div>
                                <span style="color: var(--color-text-secondary);">Dates:</span>
                                <div style="font-weight: 600; color: var(--color-foreground);"><?php echo esc_html($trip['dates']); ?></div>
                            </div>
                        </div>

                        <div class="trip-price" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                            <span style="font-size: 1.75rem; font-weight: 700; color: var(--color-primary);">
                                <?php echo esc_html($trip['price']); ?>
                            </span>
                            <span style="font-size: 1rem; color: var(--color-text-secondary); text-decoration: line-through;">
                                <?php echo esc_html($trip['original_price']); ?>
                            </span>
                        </div>

                        <div style="display: flex; gap: 12px;">
                            <a href="#" class="btn btn-primary" style="flex: 1; text-align: center;">Join Trip</a>
                            <a href="#" class="btn btn-secondary" style="flex: 1; text-align: center;">View Details</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="community-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 60px; padding: 40px; background-color: var(--color-card); border-radius: var(--radius-lg);">
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">50+</div>
                <div style="color: var(--color-text-secondary);">Active Community Trips</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">2,500+</div>
                <div style="color: var(--color-text-secondary);">Community Members</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">4.8★</div>
                <div style="color: var(--color-text-secondary);">Average Rating</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">150+</div>
                <div style="color: var(--color-text-secondary);">Destinations Covered</div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px;">
            <a href="#" class="btn btn-primary">Join Our Travel Community</a>
        </div>
    </div>
</section>