// Tab Script
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            tabBtns.forEach(b => {
                b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
                b.classList.add('text-on-surface-variant');
                b.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active classes to clicked
            btn.classList.remove('text-on-surface-variant');
            btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
            btn.setAttribute('aria-selected', 'true');

            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Scroll to top of the content area for a better slide effect
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
