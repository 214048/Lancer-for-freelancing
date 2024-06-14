document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const jobType = document.getElementById('job-type').value;
    const budget = document.getElementById('budget').value;

    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, jobType, budget }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Post created successfully') {
            alert('Post created successfully');
            // Optionally, redirect to another page or clear the form
            window.location.href = '/dashboard';
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
