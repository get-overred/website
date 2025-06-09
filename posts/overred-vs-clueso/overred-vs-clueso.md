---
title: OverRED vs Clueso
description: Why OverRED is as good as the YC-funded Clueso!
date: '03.03.2023'
category: comparison
published: true
authors:   
  - Moritz K.
reading_time: 4
---

# Svelte-Netlify-Demo
Hello there, welcome to the OverRED offical [LAUNCH](https://overred.co) Site. [PageSpeed](https://pagespeed.web.dev/analysis/https-svelte-netlify-demo-netlify-app/o8xryfd6zs?form_factor=desktop) score of 100 in Performance/SEO, standard header-footer layout, extensive customization options, and advanced features for both Svelte and Netlify. Have fun building your project! 🎉

## Table of Contents
1. [Features](#features)
    - [In-Short](#in-short)
    - [In-Detail](#in-detail)
2. [Installation](#installation)
3. [Packages](#packages)
4. [Demo](#demo)
5. [Contributing](#contributing)



## 🌟 Features

### In-Short
- [x] ⚡️ **Performance** performance-optimised from the start
- [x] 👀 **SEO** working Sitemap.xml, Robots.txt, page titles and descriptions
- [x] 🌐 **Netlify** can be directly uploaded to Netlify
- [x] 🛠️ **Tailwind** nice looking modern UI, fully integrated Tailwind
- [x] 🎨 **Customizable** custom error pages and custom reusable colors
- [x] 📱 **Responsivess** looks beautiful on all Viewports
- [x] 💬 **Contact Form** fully working Netlify contact form
- [x] 🥳 **FontAwesome Integration** fully working FontAwesome integration

Additional features:
- [x] custom Netlify 404 Page with _redirects
- [x] custom local Google Font Integration
- [x] standard header and footer structure
- [x] enhanced:img and lazy loading
- [x] Slug passing from the laod function
- [x] device-specific Favicons / all Meta Tags
- [x] local variables and store writables


### In-Detail

#### Performance
The repository utilizes the @sveltejs/enhanced-img plugin, which boosts performance by optimizing image sizes and formats, reducing layout shifts, and decreasing loading times. We also implement lazy loading, delaying the loading of non-critical resources such as images or videos until they are needed, significantly accelerating the initial page load time. Additionally, the project uses local fonts, eliminating the need to download fonts from the web, thereby reducing webpage loading times and preventing display delays.

#### SEO
The repository features a working Sitemap.xml, which is due to Netlify's handling of server-side JavaScript in the static folder. For now, the Sitemap.xml <url> tags need to be added manually. The current Robots.txt configuration allows all crawlers to index all pages. Inside the app.html, we have added title, description, and all relevant meta and Open Graph tags.

#### Netlify
This repository can be directly uploaded and hosted by Netlify. We added the correctly working netlify.toml configuration and the Netlify adapter. All pages are prerendered to be hosted as static sites on Netlify. We also added the _redirects configuration, which redirects users in the event of a 404 status to the custom 404 page.



## 📦 Packages
If you're curious, this repository utilizes the following non-default packages:



## 📍 Demo
To visit the live demo website, click [here](https://svelte-netlify-demo.netlify.app).



## 👨‍💻 Contributing
Feel free to fork the repository, make modifications, and submit a pull request. Here are some ways you can contribute:
- Enhance existing features by fixing bugs and implementing improvements.
- Propose new features that you believe would be beneficial.
- Enhance the documentation to make it even more accessible and user-friendly.

## Svelte

Media inside the **static** folder is served from.