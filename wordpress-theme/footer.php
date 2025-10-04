<footer id="colophon" class="site-footer" style="background-color: var(--color-card); padding: 60px 20px 20px; border-top: 1px solid var(--color-border);">
        <div class="container">
            <div class="footer-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
                <div class="footer-about">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px; font-size: 1.25rem;">
                        <?php bloginfo('name'); ?>
                    </h3>
                    <p style="color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.6;">
                        <?php
                        $description = get_bloginfo('description');
                        echo $description ? esc_html($description) : 'Your trusted companion for budget-friendly travel adventures across India and beyond.';
                        ?>
                    </p>
                    <div class="social-links" style="display: flex; gap: 12px; margin-top: 20px;">
                        <?php
                        $facebook = get_theme_mod('social_facebook', '#');
                        $instagram = get_theme_mod('social_instagram', '#');
                        $twitter = get_theme_mod('social_twitter', '#');
                        ?>
                        <a href="<?php echo esc_url($facebook); ?>" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-muted); display: flex; align-items: center; justify-content: center; color: var(--color-foreground); transition: all 0.3s ease;">
                            <span>f</span>
                        </a>
                        <a href="<?php echo esc_url($instagram); ?>" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-muted); display: flex; align-items: center; justify-content: center; color: var(--color-foreground); transition: all 0.3s ease;">
                            <span>ig</span>
                        </a>
                        <a href="<?php echo esc_url($twitter); ?>" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-muted); display: flex; align-items: center; justify-content: center; color: var(--color-foreground); transition: all 0.3s ease;">
                            <span>tw</span>
                        </a>
                    </div>
                </div>

                <div class="footer-links">
                    <h4 style="color: var(--color-foreground); margin-bottom: 16px; font-size: 1rem;">Quick Links</h4>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_class'     => 'footer-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                    ));
                    ?>
                </div>

                <div class="footer-contact">
                    <h4 style="color: var(--color-foreground); margin-bottom: 16px; font-size: 1rem;">Contact Us</h4>
                    <div style="color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.8;">
                        <?php
                        $phone = get_theme_mod('contact_phone', '+91-9090403075');
                        $email = get_theme_mod('contact_email', 'hello@ghoomosasteme.com');
                        $location = get_theme_mod('contact_location', 'Delhi, India');
                        ?>
                        <p style="margin: 8px 0;">📞 <?php echo esc_html($phone); ?></p>
                        <p style="margin: 8px 0;">✉️ <?php echo esc_html($email); ?></p>
                        <p style="margin: 8px 0;">📍 <?php echo esc_html($location); ?></p>
                    </div>
                </div>

                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-widget">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
            </div>

            <div class="footer-bottom" style="border-top: 1px solid var(--color-border); padding-top: 20px; text-align: center;">
                <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin: 0;">
                    &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. | 
                    <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" style="color: var(--color-accent);">Privacy Policy</a> | 
                    <a href="<?php echo esc_url(home_url('/terms-conditions')); ?>" style="color: var(--color-accent);">Terms & Conditions</a>
                </p>
            </div>
        </div>
    </footer>

    <style>
        .footer-menu {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .footer-menu li {
            margin-bottom: 8px;
        }

        .footer-menu a {
            color: var(--color-text-secondary);
            text-decoration: none;
            font-size: 0.875rem;
            transition: color 0.3s ease;
        }

        .footer-menu a:hover {
            color: var(--color-primary);
            text-decoration: none;
        }

        .social-links a:hover {
            background-color: var(--color-primary) !important;
            color: var(--color-primary-foreground) !important;
        }
    </style>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>