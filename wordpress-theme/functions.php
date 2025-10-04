<?php
/**
 * Ghoomo Saste Me Theme Functions
 *
 * @package Ghoomo_Saste_Me
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function ghoomo_theme_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Set default thumbnail size
    set_post_thumbnail_size(800, 600, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'ghoomo-saste-me'),
        'footer' => esc_html__('Footer Menu', 'ghoomo-saste-me'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Add theme support for custom background
    add_theme_support('custom-background', array(
        'default-color' => '1a1a1a',
    ));
}
add_action('after_setup_theme', 'ghoomo_theme_setup');

/**
 * Enqueue scripts and styles
 */
function ghoomo_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('ghoomo-style', get_stylesheet_uri(), array(), '1.0.0');

    // Enqueue custom JavaScript
    wp_enqueue_script('ghoomo-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);

    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'ghoomo_enqueue_scripts');

/**
 * Register Widget Areas
 */
function ghoomo_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 1', 'ghoomo-saste-me'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here to appear in your footer.', 'ghoomo-saste-me'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 2', 'ghoomo-saste-me'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here to appear in your footer.', 'ghoomo-saste-me'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 3', 'ghoomo-saste-me'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add widgets here to appear in your footer.', 'ghoomo-saste-me'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'ghoomo_widgets_init');

/**
 * Customizer Settings
 */
function ghoomo_customize_register($wp_customize) {
    // Add Hero Section
    $wp_customize->add_section('ghoomo_hero_section', array(
        'title'    => __('Hero Section', 'ghoomo-saste-me'),
        'priority' => 30,
    ));

    // Hero Title
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'Ghoomo Saste Me',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label'    => __('Hero Title', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_hero_section',
        'type'     => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Fun का ठिकाना, Stories का खजाना',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label'    => __('Hero Subtitle', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_hero_section',
        'type'     => 'text',
    ));

    // Contact Section
    $wp_customize->add_section('ghoomo_contact_section', array(
        'title'    => __('Contact Information', 'ghoomo-saste-me'),
        'priority' => 40,
    ));

    // Phone Number
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+91-9090403075',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Phone Number', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_contact_section',
        'type'     => 'text',
    ));

    // Email Address
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'hello@ghoomosasteme.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email Address', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_contact_section',
        'type'     => 'email',
    ));

    // Location
    $wp_customize->add_setting('contact_location', array(
        'default'           => 'Delhi, India',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_location', array(
        'label'    => __('Location', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_contact_section',
        'type'     => 'text',
    ));

    // Social Media Section
    $wp_customize->add_section('ghoomo_social_section', array(
        'title'    => __('Social Media', 'ghoomo-saste-me'),
        'priority' => 50,
    ));

    // Facebook URL
    $wp_customize->add_setting('social_facebook', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('social_facebook', array(
        'label'    => __('Facebook URL', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_social_section',
        'type'     => 'url',
    ));

    // Instagram URL
    $wp_customize->add_setting('social_instagram', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('social_instagram', array(
        'label'    => __('Instagram URL', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_social_section',
        'type'     => 'url',
    ));

    // Twitter URL
    $wp_customize->add_setting('social_twitter', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('social_twitter', array(
        'label'    => __('Twitter URL', 'ghoomo-saste-me'),
        'section'  => 'ghoomo_social_section',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'ghoomo_customize_register');

/**
 * Custom excerpt length
 */
function ghoomo_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'ghoomo_excerpt_length');

/**
 * Custom excerpt more
 */
function ghoomo_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'ghoomo_excerpt_more');