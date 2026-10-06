// Om Yadav Group & Personal Tuition — site script

const WHATSAPP_NUMBER = "916353304069"; // country code + number, no "+"
const TUITION_NAME = "Om Yadav Group & Personal Tuition";

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

// ---------- Forms ----------
// Each form is saved to the backend (Node.js + MySQL).
// If the backend can't be reached (for example on GitHub Pages, where only
// the website is hosted), the visitor is offered WhatsApp instead, with all
// their details already typed in.

// Where the backend runs. Leave as null to use WhatsApp only.
// When you put the backend online, set this to its address,
// e.g. "https://om-yadav-tuition-api.onrender.com"
   const BACKEND_URL = "https://om-yadav-tuition-api-onrender-com.onrender.com";

function getApiBase() {
    if (location.port === "5000") return "";                       // served by the backend itself
    const local = ["localhost", "127.0.0.1"].includes(location.hostname) || location.protocol === "file:";
    if (local) return "http://localhost:5000";                     // VS Code Live Server or opened from disk
    return BACKEND_URL;                                            // live website
}

const FORM_TYPES = {
    contactForm: "contact",
    demoForm: "demo",
    lectureForm: "lecture",
    tuitionForm: "tuition",
};

function whatsappLink(form) {
    const title =
        form.closest(".form-container")?.querySelector("h2")?.textContent.trim() || "Enquiry";

    const lines = [`*${title}* — ${TUITION_NAME}`, ""];

    form.querySelectorAll("input, select, textarea").forEach((field) => {
        const value = field.value.trim();
        if (!value) return;
        const label = form.querySelector(`label[for="${field.id}"]`);
        lines.push(`${label ? label.textContent.trim() : field.name}: ${value}`);
    });

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function showMessage(box, text, { link, isError } = {}) {
    if (!box) return;
    box.textContent = text;
    box.style.color = isError ? "#b42318" : "";
    if (link) {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "btn";
        a.style.marginTop = "12px";
        a.textContent = "Send on WhatsApp";
        box.append(document.createElement("br"), a);
    }
}

// The free server sleeps when idle. Wake it as soon as a page with a form
// opens, so it is ready by the time the visitor presses submit.
if (document.querySelector("form") && getApiBase()) {
    fetch(`${getApiBase()}/api/health`).catch(() => {});
}

// Lecture date can't be in the past
document.querySelectorAll('input[type="date"]').forEach((input) => {
    const d = new Date();
    input.min = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
});

document.querySelectorAll("form").forEach((form) => {
    const type = FORM_TYPES[form.id];
    if (!type) return;

    const messageBox = form.parentElement.querySelector(".form-message");
    const button = form.querySelector('button[type="submit"]');
    const buttonText = button ? button.textContent.trim() : "";

    // The backend saves the request, so the button no longer says "on WhatsApp"
    if (button && getApiBase() !== null) {
        button.textContent = buttonText.replace(/ on WhatsApp$/, "");
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const apiBase = getApiBase();
        const waLink = whatsappLink(form);

        // No backend configured: open WhatsApp straight away
        if (apiBase === null) {
            window.open(waLink, "_blank");
            showMessage(
                messageBox,
                "WhatsApp is opening with your details. Press send there to reach us. You can also call 63533 04069."
            );
            form.reset();
            return;
        }

        const data = Object.fromEntries(new FormData(form));

        if (button) {
            button.disabled = true;
            button.textContent = "Sending…";
        }

        try {
            const res = await fetch(`${apiBase}/api/enquiries/${type}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json().catch(() => ({}));

            if (res.ok && result.success) {
                showMessage(messageBox, result.message);
                form.reset();
            } else if (res.status === 400) {
                // Something in the form needs fixing
                showMessage(messageBox, result.message || "Please check the form and try again.", { isError: true });
            } else {
                throw new Error(result.message);
            }
        } catch (err) {
            // Backend not running or unreachable: offer WhatsApp so the enquiry isn't lost
            showMessage(
                messageBox,
                "We couldn't send your request right now. Please send it on WhatsApp or call 63533 04069.",
                { link: waLink, isError: true }
            );
        } finally {
            if (button) {
                button.disabled = false;
                button.textContent = getApiBase() !== null ? buttonText.replace(/ on WhatsApp$/, "") : buttonText;
            }
        }
    });
});
