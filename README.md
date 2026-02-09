# Portfolio Website

A responsive personal portfolio website built using HTML, CSS, and JavaScript, showcasing my projects, education, and technical interests.

Live Demo: https://rajsekharde.com

## Deployment

Deployed automatically on push to GitHub using Cloudflare Pages

```bash
git push -> Cloudflare Pages fetches git repo -> Site build & Deployed
```

DNS records, Proxy & TLS Managed using Cloudflare

## Issues faced

1. Caching by Cloudflare & Browsers results in old JavaScript & CSS files being fetched when the site is visited, causing UI/UX updates to fail.
Fixed by adding '_headers' file and versioning style.css & script.js files before pushing code
```bash
_headers:
/index.html
    Cache-Control: no-cache

index.html:
<link rel="stylesheet" href="style.css?v=2">
<script src="script.js?v=2"></script>
# Version number is changed before every push so browsers fetch the latest files
```

2. Navigating the site using links containg href=<Section-ID> cause the browser history to get filled with previously visited sections.
Fixed by replacing href links with a JavaScript scroll handler
```bash
index.html:
<a class="section-link" data-section="projects">Projects</a>

script.js:
document.querySelectorAll(".section-link").forEach(link => {
    link.addEventListener("click", () => {
        const id = link.dataset.section;
        const section = document.getElementById(id);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
```

