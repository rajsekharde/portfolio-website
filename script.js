history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".sidebar a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));

            const id = entry.target.id;
            const activeLink =
                document.querySelector(`.sidebar a[href="#${id}"]`);

            if (activeLink) activeLink.classList.add("active");
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));