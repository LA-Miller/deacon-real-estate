const observer = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold:0.15
    }
);

document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-media, .reveal-stagger")
    .forEach(el => observer.observe(el));