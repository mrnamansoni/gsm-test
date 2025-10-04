<?php
/**
 * Template part for displaying testimonials
 *
 * @package Ghoomo_Saste_Me
 */

$testimonials = array(
    array(
        'platform' => 'Google Reviews',
        'rating' => '4.9',
        'total_reviews' => '13,540',
        'quote' => 'Best travel company for budget trips! Amazing destinations and friendly guides.',
        'author' => 'Priya Sharma',
    ),
    array(
        'platform' => 'TripAdvisor',
        'rating' => '5.0',
        'total_reviews' => '3,750',
        'quote' => 'Incredible experiences at unbeatable prices. Highly recommended!',
        'author' => 'Rahul Kumar',
    ),
    array(
        'platform' => 'Facebook',
        'rating' => '4.9',
        'total_reviews' => '1,031',
        'quote' => 'The community vibe is amazing. Made friends for life on these trips!',
        'author' => 'Sneha Patel',
    ),
);
?>

<section id="testimonials" class="testimonials-section" style="padding: 80px 20px; background-color: var(--color-card);">
    <div class="container">
        <div class="section-title">
            <h2>What Our Travelers Say</h2>
            <p>Real reviews from real travelers who experienced unforgettable journeys</p>
        </div>

        <div class="review-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin: 48px 0; padding: 40px; background-color: var(--color-background); border-radius: var(--radius-lg);">
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">18,321+</div>
                <div style="color: var(--color-text-secondary);">Total Reviews</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">4.9★</div>
                <div style="color: var(--color-text-secondary);">Average Rating</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">98%</div>
                <div style="color: var(--color-text-secondary);">Satisfaction</div>
            </div>
        </div>

        <div class="testimonials-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
            <?php foreach ($testimonials as $testimonial) : ?>
                <div class="testimonial-card" style="background-color: var(--color-background); padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <h4 style="font-size: 1.125rem; margin-bottom: 4px; color: var(--color-foreground);">
                                <?php echo esc_html($testimonial['platform']); ?>
                            </h4>
                            <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin: 0;">
                                <?php echo esc_html($testimonial['total_reviews']); ?> reviews
                            </p>
                        </div>
                        <div style="background-color: var(--color-primary); color: var(--color-primary-foreground); padding: 8px 16px; border-radius: 20px; font-weight: 700; font-size: 1.125rem;">
                            <?php echo esc_html($testimonial['rating']); ?>★
                        </div>
                    </div>

                    <blockquote style="margin: 0 0 20px; padding: 0; border: none;">
                        <p style="font-size: 1rem; color: var(--color-text-secondary); line-height: 1.6; font-style: italic; margin: 0;">
                            "<?php echo esc_html($testimonial['quote']); ?>"
                        </p>
                    </blockquote>

                    <div style="font-weight: 600; color: var(--color-foreground);">
                        — <?php echo esc_html($testimonial['author']); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>