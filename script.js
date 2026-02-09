history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};


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

const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".section-link")
                .forEach(l => l.classList.remove("active"));

            document.querySelectorAll(
                `.section-link[data-section="${entry.target.id}"]`
            ).forEach(l => l.classList.add("active"));
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(sec => observer.observe(sec));
