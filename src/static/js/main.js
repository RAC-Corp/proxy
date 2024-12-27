const form = document.getElementById('form')
form.addEventListener('keydown', async function (e) {
    if (e.key == 'Enter' && e.target.value) {
        let input = e.target.value
        try {
            new URL(input)
        } catch (_) {
            input = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`
        }
        window.location = input
    }
})