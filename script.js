document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    const modal = document.getElementById('app-modal');
    const iframe = document.getElementById('dify-iframe');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-app-title');

    // Open Modal
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const appUrl = card.getAttribute('data-app-url');
            const title = card.querySelector('h2').textContent;
            
            modalTitle.textContent = title;
            iframe.src = appUrl;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear iframe src after transition to stop audio/video and reset
        setTimeout(() => {
            iframe.src = '';
        }, 300);
    };

    // Close button click
    closeModalBtn.addEventListener('click', closeModal);

    // Click outside modal content to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
