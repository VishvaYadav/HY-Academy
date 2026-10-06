// Om Yadav Personal Tuition — site script

const WHATSAPP_NUMBER = "916353304069"; // country code + number, no "+"
const TUITION_NAME = "Om Yadav Personal Tuition";

// ---------- Mobile menu ----------
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "Close" : "Menu";
    });
}

// ---------- Highlight current page in the menu ----------
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
    }
});

// ---------- Forms: send the enquiry on WhatsApp ----------
// Every form on the site (contact, demo, lecture, home tuition) is collected
// into a readable WhatsApp message, so enquiries reach the phone directly
// without needing a server.
document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title =
            form.closest(".form-container")?.querySelector("h2")?.textContent.trim() ||
            "Enquiry";

        const lines = [`*${title}* — ${TUITION_NAME}`, ""];

        form.querySelectorAll("input, select, textarea").forEach((field) => {
            const value = field.value.trim();
            if (!value) return;

            const label = form.querySelector(`label[for="${field.id}"]`);
            const name = label ? label.textContent.trim() : field.name;
            lines.push(`${name}: ${value}`);
        });

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank");

        const message = form.parentElement.querySelector(".form-message");
        if (message) {
            message.textContent =
                "WhatsApp is opening with your details. Press send there to reach us. " +
                "You can also call 63533 04069.";
        }

        form.reset();
    });
});
