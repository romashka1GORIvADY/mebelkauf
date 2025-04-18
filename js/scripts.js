document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const contactsModal = document.getElementById('contacts-modal');
    const closeBtns = document.querySelectorAll('.close');
    const modalDescription = document.getElementById('modal-description');
    const contactsLink = document.getElementById('contacts-link');

    document.querySelectorAll('.item button').forEach(button => {
        button.addEventListener('click', (event) => {
            const description = event.target.closest('.item').getAttribute('data-description');
            modalDescription.textContent = description;
            modal.style.display = 'block';
        });
    });

    contactsLink.addEventListener('click', (event) => {
        event.preventDefault();
        contactsModal.style.display = 'block';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            contactsModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == contactsModal) {
            contactsModal.style.display = 'none';
        }
    });
});