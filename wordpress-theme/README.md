# Ghoomo Saste Me WordPress Theme

A modern one-page WordPress theme designed for budget travel adventures with a dark theme aesthetic.

## Features

- **One-Page Design**: All content on a single scrolling page
- **Dark Theme**: Modern dark color scheme with yellow and teal accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Customizer Support**: Easy customization through WordPress Customizer
- **Widget Areas**: 3 footer widget areas for additional content
- **Custom Menus**: Primary navigation and footer menu support
- **Google Fonts**: Inter and Open Sans fonts included
- **Smooth Animations**: Hover effects and scroll animations
- **SEO Friendly**: Clean, semantic HTML5 markup

## Installation

1. Download the theme folder
2. Zip the `wordpress-theme` folder
3. Go to WordPress Admin → Appearance → Themes
4. Click "Add New" → "Upload Theme"
5. Choose the zip file and click "Install Now"
6. Activate the theme

## Theme Sections

The theme includes these main sections:

1. **Hero Section** - Large hero with search functionality and statistics
2. **Tagline Section** - Motivational Hindi tagline with CTA
3. **Featured Packages** - Showcase premium travel packages
4. **Destinations** - Grid of popular travel destinations
5. **Why Choose Us** - Feature cards highlighting benefits
6. **Community Trips** - Upcoming group travel opportunities
7. **Testimonials** - Customer reviews and ratings
8. **Footer** - Contact info, links, and newsletter signup

## Customization

### Through WordPress Customizer

Navigate to **Appearance → Customize** to modify:

- **Site Identity**: Logo, site title, tagline
- **Hero Section**: Main title and subtitle text
- **Contact Information**: Phone, email, location
- **Social Media**: Facebook, Instagram, Twitter URLs

### Custom Logo

1. Go to **Appearance → Customize → Site Identity**
2. Upload your logo image (recommended size: 200x60px)

### Navigation Menus

1. Go to **Appearance → Menus**
2. Create a new menu or edit existing
3. Assign to "Primary Menu" location for header
4. Assign to "Footer Menu" location for footer

### Widget Areas

1. Go to **Appearance → Widgets**
2. Add widgets to:
   - Footer Widget Area 1
   - Footer Widget Area 2
   - Footer Widget Area 3

## Theme Structure

```
wordpress-theme/
├── style.css              # Main stylesheet with theme header
├── functions.php          # Theme functions and setup
├── index.php             # Main template (fallback)
├── front-page.php        # Front page template
├── header.php            # Header template
├── footer.php            # Footer template
├── template-parts/       # Section templates
│   ├── hero.php
│   ├── tagline.php
│   ├── featured-packages.php
│   ├── destinations.php
│   ├── why-choose-us.php
│   ├── community-trips.php
│   └── testimonials.php
├── js/
│   └── main.js          # Custom JavaScript
└── README.md            # This file
```

## Adding Images

To add images for packages, destinations, and sections:

1. Create an `images` folder in the theme directory
2. Add your images with these names:
   - `hero-bg.jpg` - Hero background
   - `package-1.jpg`, `package-2.jpg`, `package-3.jpg` - Package images
   - `manali.jpg`, `udaipur.jpg`, `rishikesh.jpg`, etc. - Destination images
   - `himachal.jpg`, `rajasthan.jpg`, `uttarakhand.jpg` - Community trip images

## Recommended Plugins

- **Contact Form 7** - For contact forms
- **Yoast SEO** - For search engine optimization
- **WP Super Cache** - For performance optimization
- **Elementor** - For additional page building (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Theme Colors

- **Primary Yellow**: #f1c40f
- **Accent Teal**: #4ecdc4
- **Background Dark**: #1a1a1a
- **Card Background**: #2d2d2d
- **Text Primary**: #ffffff
- **Text Secondary**: #a0a0a0

## Support

For theme support and questions:
- Email: hello@ghoomosasteme.com
- Phone: +91-9090403075

## Credits

- **Fonts**: Google Fonts (Inter, Open Sans)
- **Design**: Based on Ghoomo Saste Me brand identity
- **Icons**: Native emoji icons

## License

This theme is licensed under the GNU General Public License v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- One-page layout with 8 sections
- WordPress Customizer integration
- Responsive design
- Custom menu support
- Widget areas
- Smooth scroll navigation

---

**Theme Author**: Ghoomo Saste Me Team  
**Theme URI**: https://ghoomosasteme.com  
**Version**: 1.0.0