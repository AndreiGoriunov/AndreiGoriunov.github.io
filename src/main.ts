import './style.css'

async function loadNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;

    try {
        const res = await fetch('/src/components/navbar.html');
        const html = await res.text();
        placeholder.outerHTML = html;
    } catch (err) {
        console.error('Failed to load navbar:', err);
    }
}

async function loadFooter() {
    const res = await fetch('/src/components/footer.html');
    const html = await res.text();

    const temp = document.createElement('div');
    temp.innerHTML = html;

    const footer = temp.querySelector('footer');
    if (footer) {
        document.body.appendChild(footer);

        // Update year
        const yearSpan = footer.querySelector('#year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear().toString();
        }
    }
}

loadFooter();

loadNavbar();