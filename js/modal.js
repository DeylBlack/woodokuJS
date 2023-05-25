function createModal() {
    const modal = document.querySelector('body');

    let wrapper = document.createElement('div');

    wrapper.onclick = ((event) => {
        if (event.target === wrapper) {
            console.log('CLOSE')
            closeModal();
        }
    })

    let content = document.createElement('div');
    content.className = 'content';

    content.innerHTML = '<div class="header"><i class="fa-regular fa-circle-xmark" onclick="closeModal()"></i></div>'
    // content.append()

    wrapper.append(content)

    wrapper.id = 'modal-wrapper'

    if (document.getElementById('modal')) {
        return;
    }

    modal.append(wrapper)
}

function closeModal() {
    document.getElementById('modal-wrapper').remove();
}
