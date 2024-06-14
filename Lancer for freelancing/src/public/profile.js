document.addEventListener('DOMContentLoaded', () => {
    const username = 'sampleUsername'; // Replace this with dynamic value as needed

    fetch(`/api/users/profile/${username}`)
        .then(response => response.json())
        .then(user => {
            if (user) {
                document.getElementById('username').textContent = user.username;
                document.getElementById('first-name').textContent = user.firstName;
                document.getElementById('last-name').textContent = user.lastName;
                document.getElementById('email').textContent = user.email;
                document.getElementById('phone-number').textContent = user.phoneNumber;
                document.getElementById('role').textContent = user.role;
                if (user.profilePicture) {
                    document.getElementById('profile-picture').src = user.profilePicture;
                } else {
                    document.getElementById('profile-picture').src = 'default-profile.png'; // Placeholder image
                }
            } else {
                alert('User not found');
            }
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
        document.querySelector('.create-post-btn').addEventListener('click', () => {
            window.location.href = 'create-post.html';
        });
});
