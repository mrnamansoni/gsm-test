# Ghoomo Saste Me WordPress Theme - Installation Guide

## 📦 Complete File Structure

Your WordPress theme contains the following files:

```
ghoomo-saste-me/
├── style.css                          # Theme stylesheet with header
├── functions.php                      # Theme functions
├── index.php                          # Main template (fallback)
├── front-page.php                     # Homepage template
├── header.php                         # Header template
├── footer.php                         # Footer template
├── template-parts/
│   ├── hero.php                      # Hero section
│   ├── tagline.php                   # Tagline section
│   ├── featured-packages.php         # Featured packages
│   ├── destinations.php              # Destinations grid
│   ├── why-choose-us.php            # Why choose us section
│   ├── community-trips.php          # Community trips
│   └── testimonials.php             # Testimonials
├── js/
│   └── main.js                       # JavaScript file
├── images/                           # (Create this folder)
│   └── (Add your images here)
├── README.md                         # Theme documentation
└── INSTALLATION.md                   # This file
```

## 🚀 Installation Steps

### Step 1: Create Theme Folder
1. Create a new folder named `ghoomo-saste-me`
2. Copy all the generated files into this folder following the structure above

### Step 2: Add Images (Optional but Recommended)
Create an `images` folder inside `ghoomo-saste-me` and add:
- `hero-bg.jpg` - Hero section background (recommended: 1920x1080px)
- `package-1.jpg`, `package-2.jpg`, `package-3.jpg` - Package images (800x600px)
- `manali.jpg`, `udaipur.jpg`, `rishikesh.jpg`, `kasol.jpg`, `kedarnath.jpg`, `goa.jpg` - Destination images (800x600px)
- `himachal.jpg`, `rajasthan.jpg`, `uttarakhand.jpg` - Community trip images (800x600px)

### Step 3: Create Screenshot (Optional but Recommended)
Create a `screenshot.png` file (1200x900px) showing your theme homepage for the WordPress theme selector.

### Step 4: Create ZIP File
**On Windows:**
1. Select the `ghoomo-saste-me` folder
2. Right-click → Send to → Compressed (zipped) folder
3. Name it: `ghoomo-saste-me.zip`

**On Mac:**
1. Right-click the `ghoomo-saste-me` folder
2. Click "Compress ghoomo-saste-me"
3. Rename to: `ghoomo-saste-me.zip`

**On Linux:**
```bash
zip -r ghoomo-saste-me.zip ghoomo-saste-me/
```

### Step 5: Upload to WordPress
1. Log in to your WordPress admin panel
2. Go to **Appearance → Themes**
3. Click **Add New** button
4. Click **Upload Theme** button
5. Click **Choose File** and select `ghoomo-saste-me.zip`
6. Click **Install Now**
7. After installation completes, click **Activate**

## ⚙️ Initial Setup After Activation

### 1. Set Up Menus
1. Go to **Appearance → Menus**
2. Create a new menu with these items:
   - Home
   - Destinations
   - Packages
   - Community
   - About
   - Contact
3. Assign menu to **Primary Menu** location
4. Create a footer menu and assign to **Footer Menu** location

### 2. Customize Theme Settings
Go to **Appearance → Customize** and configure:

**Hero Section:**
- Hero Title: "Ghoomo Saste Me"
- Hero Subtitle: "Fun का ठिकाना, Stories का खजाना"

**Contact Information:**
- Phone: +91-9090403075
- Email: hello@ghoomosasteme.com
- Location: Delhi, India

**Social Media:**
- Facebook URL: Your Facebook page
- Instagram URL: Your Instagram profile
- Twitter URL: Your Twitter profile

### 3. Add Your Logo
1. Go to **Appearance → Customize → Site Identity**
2. Click **Select Logo**
3. Upload your logo (recommended size: 200x60px)
4. Click **Publish**

### 4. Configure Footer Widgets (Optional)
1. Go to **Appearance → Widgets**
2. Add widgets to:
   - Footer Widget Area 1
   - Footer Widget Area 2
   - Footer Widget Area 3

## 🎨 Customization Tips

### Change Colors
Edit `style.css` and modify CSS variables in the `:root` section:
```css
:root {
  --color-primary: #f1c40f;        /* Yellow accent */
  --color-secondary: #4ecdc4;      /* Teal accent */
  --color-background: #1a1a1a;     /* Dark background */
}
```

### Modify Content
Edit template part files in the `template-parts/` folder to change:
- Section text and content
- Statistics and numbers
- Package details
- Destination information
- Testimonials

### Add More Sections
1. Create a new PHP file in `template-parts/`
2. Add your section HTML
3. Include it in `front-page.php` using:
```php
get_template_part('template-parts/your-section-name');
```

## 📱 Recommended Plugins

Install these plugins for enhanced functionality:

1. **Contact Form 7** - For contact forms
2. **Yoast SEO** - For SEO optimization
3. **WP Super Cache** - For performance
4. **Wordfence Security** - For security
5. **UpdraftPlus** - For backups

## 🐛 Troubleshooting

### Theme doesn't activate
- Ensure all files are in the correct folder structure
- Check that `style.css` has the theme header comment at the top

### Images not showing
- Create the `images` folder in your theme directory
- Add image files with correct names
- Check file permissions (755 for folders, 644 for files)

### Menu not displaying
- Create and assign menus in **Appearance → Menus**
- Ensure menu location is set to "Primary Menu"

### Styles not loading
- Clear your browser cache
- Clear WordPress cache if using a caching plugin
- Check that `functions.php` properly enqueues `style.css`

## 📞 Support

For questions or issues:
- Email: hello@ghoomosasteme.com
- Phone: +91-9090403075

## ✅ Checklist Before Going Live

- [ ] All files copied to theme folder
- [ ] Images added to images folder
- [ ] Theme uploaded and activated
- [ ] Logo uploaded
- [ ] Menus created and assigned
- [ ] Customizer settings configured
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test form submissions
- [ ] Install recommended plugins
- [ ] Run SEO optimization
- [ ] Set up SSL certificate
- [ ] Create backup

## 🎉 You're All Set!

Your Ghoomo Saste Me WordPress theme is now ready to use. Enjoy your new travel website!

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**License:** GPL v2 or later