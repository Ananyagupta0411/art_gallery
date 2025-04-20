document.querySelectorAll('.artwork').forEach(artwork => {
    artwork.addEventListener('click', () => {
        const storyElement = artwork.querySelector('.story');
        const storyText = artwork.getAttribute('data-story');
        
        if (storyElement.style.opacity === '1') {
            storyElement.style.opacity = '0';
        } else {
            storyElement.style.opacity = '1';
            storyElement.innerHTML = storyText;
        }
    });
});
