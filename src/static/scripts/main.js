const form = document.getElementById('form');
form.addEventListener('keydown', async function (e) {
    if (e.key == 'Enter' && chemical.loaded && e.target.value) {
        let input = e.target.value;
        try {
            new URL(input);
        } catch (e) {
            input = 'https://www.google.com/search?q=' + encodeURIComponent(input);
        }
        window.location = await chemical.encode(input);
    }
});