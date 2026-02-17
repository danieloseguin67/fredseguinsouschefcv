Website name: Fred Seguin Sous Chef Resume
generate angular19 web site with the following features:
- Responsive design for mobile and desktop
- Navigation menu with links to different sections of the website
(home, Experience, Skills, Services, About Me, Contact Me)
- On home page, show carrousel of images (meals, dinner service) with captions. Automatic sliding every 5 seconds and manual navigation controls. Images will be in the assets/images folder and the list of images names and captions will be provided in a JSON file (assets/data/carousel.json).
- Experience section with a timeline of Fred Seguin culinary career, including previous positions, notable achievements, and any awards received. Each entry should include the name of the restaurant, the role held, and a brief description of responsibilities and accomplishments. All those will stored into a json file (assets/data/experience.json) and loaded dynamically into the website.
- Skills section with a list of culinary skills and proficiencies, such as cooking techniques, cuisines, and kitchen management. Each skill should be represented with an icon and a brief description. The skills data will be stored in a json file (assets/data/skills.json) and loaded dynamically into the website.
- services section with a list of services offered by Fred Seguin, such as private chef services, catering, cooking classes, and menu consulting. Each service should include a title, description, and an image. The services data will be stored in a json file (assets/data/services.json) and loaded dynamically into the website.
- About Me section with a brief biography of Fred Seguin, including his culinary background, philosophy, and passion for cooking. This section should also include a professional photo of Fred Seguin. The biography and photo will be stored in a json file (assets/data/about.json) and loaded dynamically into the website.
- Contact Me section with a contact form that allows visitors to send a message directly to Fred Seguin. The form should include fields for name, email, subject, and message. Upon submission, the form should validate the input and display a success message if the message is sent successfully or an error message if there is an issue with sending the message. The contact form will be implemented using Angular's reactive forms and upon pressing submit an email will be created using the user's  
- Deployment configuration for githubpages
- website should be optimized for SEO with appropriate meta tags, alt text for images, and structured data markup to enhance search engine visibility.
- website colors and typography should be consistent throughout the site, following the modern and restaurant chef themed style with warm tones and elegant typography.

## 404 Error Fix

**Issue**: Getting 404 errors when accessing the deployed GitHub Pages site.

**Root Cause**: The build scripts in `package.json` were using an incorrect base href `/freddythechef/` that didn't match the actual GitHub repository name `fredseguinsouschefcv`.

**Solution**: Updated the base href in `package.json` build scripts:
- Changed `build:prod` script from `--base-href /freddythechef/` to `--base-href /fredseguinsouschefcv/`
- Changed `deploy` script from `--base-href /freddythechef/` to `--base-href /fredseguinsouschefcv/`

After the fix, run:
```bash
npm run deploy
```

The site will be available at: https://danieloseguin67.github.io/fredseguinsouschefcv/