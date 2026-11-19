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
    // Triggers when the section crosses a band near the top-middle of the viewport
    rootMargin: "-15% 0px -60% 0px",
    threshold: 0
});

sections.forEach(sec => observer.observe(sec));


// Copy email address
const copyBtn = document.getElementById("copyEmailBtn");
if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("contact@rajsekharde.com");
            copyBtn.textContent = "Copied";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 2000);
        } catch {
            copyBtn.textContent = "Copy failed";
        }
    });
}