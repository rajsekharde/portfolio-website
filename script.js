history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".section-link");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));

            const id = entry.target.id;
            const activeLinkSide =
                document.querySelector(`.sidebar a[href="#${id}"]`);
            const activeLinkTop =
                document.querySelector(`.mobile-nav a[href="#${id}"]`);

            if (activeLinkSide) activeLinkSide.classList.add("active");
            if (activeLinkTop) activeLinkTop.classList.add("active");
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));