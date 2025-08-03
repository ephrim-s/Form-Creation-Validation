// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create <ul> for user list
        const userList = document.createElement('ul');

        // Step 7: Loop through users and append <li> for each name
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 9: Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Step 10: Run fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
