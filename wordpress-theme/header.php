<?php
/**
 * The header for the theme
 *
 * @package Ghoomo_Saste_Me
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header" style="background-color: var(--color-background); padding: 20px 0; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <nav class="main-navigation" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        ?>
                        <h1 class="site-title" style="margin: 0; font-size: 1.5rem;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" style="color: var(--color-primary); text-decoration: none;">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <?php
                    }
                    ?>
                </div>

                <div class="menu-wrapper" style="display: flex; align-items: center; gap: 32px;">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class'     => 'primary-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                    ));
                    ?>
                    
                    <div class="header-contact" style="display: flex; align-items: center; gap: 20px;">
                        <?php
                        $phone = get_theme_mod('contact_phone', '+91-9090403075');
                        if ($phone) :
                        ?>
                            <span style="color: var(--color-text-secondary); font-size: 0.875rem;">
                                <?php echo esc_html($phone); ?>
                            </span>
                        <?php endif; ?>
                        
                        <a href="#contact" class="btn btn-primary" style="font-size: 0.875rem; padding: 10px 20px;">
                            Book Now
                        </a>
                    </div>
                </div>

                <button class="mobile-menu-toggle" style="display: none; background: none; border: none; color: var(--color-foreground); font-size: 1.5rem; cursor: pointer;">
                    ☰
                </button>
            </nav>
        </div>
    </header>

    <style>
        .primary-menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 24px;
        }

        .primary-menu li {
            margin: 0;
        }

        .primary-menu a {
            color: var(--color-text-secondary);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.875rem;
            transition: color 0.3s ease;
        }

        .primary-menu a:hover {
            color: var(--color-primary);
            text-decoration: none;
        }

        .primary-menu .current-menu-item a {
            color: var(--color-primary);
        }

        @media (max-width: 992px) {
            .menu-wrapper {
                display: none;
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
            }

            .menu-wrapper.active {
                display: flex;
            }

            .primary-menu {
                flex-direction: column;
                width: 100%;
            }

            .header-contact {
                flex-direction: column;
                align-items: flex-start !important;
                width: 100%;
            }

            .mobile-menu-toggle {
                display: block !important;
            }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.querySelector('.mobile-menu-toggle');
            const menu = document.querySelector('.menu-wrapper');
            
            if (toggle && menu) {
                toggle.addEventListener('click', function() {
                    menu.classList.toggle('active');
                });
            }
        });
    </script>