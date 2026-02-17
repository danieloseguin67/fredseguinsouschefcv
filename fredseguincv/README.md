# Fred Seguin - Sous Chef Resume Website

A professional, responsive Angular 19 website showcasing Fred Seguin's culinary career, skills, and services.

## Features

- **Responsive Design**: Optimized for both mobile and desktop viewing
- **Dynamic Content**: All content loaded from JSON files for easy updates
- **Image Carousel**: Auto-sliding carousel with manual controls on the home page
- **Professional Sections**:
  - Home: Hero section with image carousel
  - Experience: Timeline of culinary career with achievements
  - Skills: Showcase of culinary expertise and proficiencies
  - Services: Professional services offered (private chef, catering, classes, consulting)
  - About Me: Personal biography and philosophy
  - Contact: Validated contact form with email integration
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Chef-Themed Design**: Warm tones and elegant typography

## Technology Stack

- **Framework**: Angular 19
- **Styling**: SCSS with custom theme
- **Fonts**: Playfair Display & Lato from Google Fonts
- **Routing**: Angular Router with lazy loading support
- **Forms**: Reactive Forms with validation
- **HTTP**: HttpClient for JSON data loading

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/
│   │   ├── home/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   └── services/
│       └── data.service.ts
└── public/
    └── assets/
        ├── data/          # JSON files
        └── images/        # Images (to be added)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI 19

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danieloseguin67/freddythechef.git
cd freddythechef/fredseguincv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Adding Images

To complete the website, add the following images to `public/assets/images/`:

### Required Images:
- `meal1.jpg` - First carousel image
- `meal2.jpg` - Second carousel image
- `meal3.jpg` - Third carousel image
- `dinner-service.jpg` - Fourth carousel image
- `fred-seguin.jpg` - Profile photo for About page
- `private-chef.jpg` - Private chef services image
- `catering.jpg` - Catering services image
- `cooking-class.jpg` - Cooking classes image
- `consulting.jpg` - Menu consulting image

**Recommended Image Specifications:**
- Carousel images: 1200x800px
- Service images: 800x600px
- Profile photo: 400x400px (square)
- Format: JPG or PNG
- Optimized for web (compressed)

## Updating Content

All content is stored in JSON files under `public/assets/data/`:

- `carousel.json` - Home page carousel images and captions
- `experience.json` - Professional experience timeline
- `skills.json` - Culinary skills and expertise
- `services.json` - Professional services offered
- `about.json` - Biography and personal information

Simply edit these JSON files to update the website content without modifying code.

## Building for Production

Build the project for production:

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

## Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. Make sure you have push access to the repository
2. Run the deploy command:
```bash
npm run deploy
```

This will:
- Build the project with production configuration
- Set the correct base href for GitHub Pages
- Deploy to the `gh-pages` branch automatically

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build:prod
```

2. Navigate to the dist folder:
```bash
cd dist/fredseguincv/browser
```

3. Create a `.nojekyll` file (prevents GitHub from processing with Jekyll):
```bash
echo > .nojekyll
```

4. Create a copy of index.html as 404.html (for SPA routing):
```bash
copy index.html 404.html
```

5. Push to gh-pages branch:
```bash
git init
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/danieloseguin67/freddythechef.git
git branch -M gh-pages
git push -f origin gh-pages
```

### Accessing the Deployed Site

After deployment, the website will be available at:
https://danieloseguin67.github.io/freddythechef/

**Note**: It may take a few minutes for changes to appear after deployment.

## GitHub Pages Configuration

In your GitHub repository:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

## Contact Form Configuration

The contact form uses the `mailto:` protocol to open the user's default email client. To customize the recipient email, update the email address in:

`src/app/components/contact/contact.component.ts` (line 32)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors

To change the color scheme, edit the CSS variables in `src/styles.scss`:

```scss
:root {
  --primary-color: #8B4513;      // Main brown color
  --secondary-color: #D4A574;    // Light brown/tan
  --accent-color: #CD853F;       // Peru/accent brown
  --dark-brown: #3E2723;         // Very dark brown
  --light-cream: #FFF8DC;        // Cornsilk/cream
  --text-dark: #2C1810;          // Dark text
  --text-light: #6D4C41;         // Light text
  --background: #FFFAF0;         // Floral white background
}
```

### Fonts

To change fonts, update the Google Fonts import in `src/styles.scss` and modify the font-family declarations.

## License

This project is private and proprietary. All rights reserved.

## Contact

Fred Seguin  
Email: fred.seguin@example.com  
Website: https://danieloseguin67.github.io/freddythechef/

---

Built with ❤️ using Angular 19
