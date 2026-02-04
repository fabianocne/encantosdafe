document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const navBtn = document.getElementById('nav-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-brand-border', 'py-3', 'shadow-sm');
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-5');
            
            navBtn.classList.add('bg-brand-dark', 'text-white');
            navBtn.classList.remove('bg-white', 'text-brand-dark', 'hover:bg-brand-offWhite', 'border-brand-border/50');
        } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-brand-border', 'py-3', 'shadow-sm');
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-5');

            navBtn.classList.remove('bg-brand-dark', 'text-white');
            navBtn.classList.add('bg-white', 'text-brand-dark', 'hover:bg-brand-offWhite', 'border-brand-border/50');
        }
    });

    // --- Smooth Scroll to ID ---
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-scroll-to');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- FadeIn Animation (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lê o delay do atributo data-delay
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            const content = document.getElementById(`faq-content-${index}`);
            const iconPlus = document.getElementById(`icon-plus-${index}`);
            const iconMinus = document.getElementById(`icon-minus-${index}`);

            // Se já está aberto, fecha. Se não, fecha todos e abre este.
            const isOpen = !content.classList.contains('max-h-0');

            // Fecha todos
            document.querySelectorAll('.faq-content').forEach(el => {
                el.classList.add('max-h-0', 'opacity-0');
                el.classList.remove('max-h-48', 'opacity-100');
            });
            document.querySelectorAll('.icon-plus').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.icon-minus').forEach(el => el.classList.add('hidden'));

            if (!isOpen) {
                content.classList.remove('max-h-0', 'opacity-0');
                content.classList.add('max-h-48', 'opacity-100');
                iconPlus.classList.add('hidden');
                iconMinus.classList.remove('hidden');
            }
        });
    });

    // --- Form Handling ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Mensagem
            const message = `Olá! Quero comprar artigos religiosos católicos no ATACADO para a Campanha de SÃO JOSÉ.
Nome: ${data.name}
Empresa: ${data.company}
CNPJ: ${data.cnpj}
Cidade/UF: ${data.city}
WhatsApp: ${data.phone}
E-mail: ${data.email}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = form.getAttribute('data-whatsapp');
            const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Abre WhatsApp
            window.open(url, '_blank');

            // Mostra sucesso
            form.classList.add('hidden');
            document.getElementById('form-success').classList.remove('hidden');
        });

        // Reabrir WhatsApp
        document.getElementById('reopen-whatsapp').addEventListener('click', () => {
             // Simula novo submit para pegar dados atuais
             form.dispatchEvent(new Event('submit')); 
        });
    }
});