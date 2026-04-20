const form = document.getElementById('nameForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');

    result.textContent = 'Generating...';

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        const data = await response.json();

        if(!response.ok) {
            result.textContent = data.error || 'Something went wrong';
            return;
        }

        result.textContent = data.username;
    } catch (error) {
        result.textContent = 'Server error';
    }
});