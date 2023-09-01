// Initialize users array from local storage or use an empty array if no data is stored
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to save users to local storage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to display users from local storage
function displayUsersFromLocalStorage() {
    const userListDiv = document.querySelector('#usersList');
    userListDiv.innerHTML = ''; // Clear the existing list

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(user.id);
        userDiv.textContent = user.name;
        userDiv.appendChild(deleteButton);
        userListDiv.appendChild(userDiv);
    });
}

// Function to generate a unique ID (for demonstration purposes)
function generateUniqueId() {
    return Math.floor(Math.random() * 1000); // Generate a random number
}

// Function to display users
function displayUsers(users) {
    const userListDiv = document.querySelector('#usersList');
    userListDiv.innerHTML = ''; // Clear the existing list

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(user.id);
        userDiv.textContent = user.name;
        userDiv.appendChild(deleteButton);
        userListDiv.appendChild(userDiv);
    });
}

// Function to add a new user
function addUser(name) {
    const newUser = { id: generateUniqueId(), name: name };
    users.push(newUser);
    modifyUsers(users);
}

// Function to delete a user by ID
function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
    modifyUsers(users);
}

// Function to search users
function searchUsers() {
    const searchInput = document.querySelector('#search').value.toLowerCase();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchInput));
    displayUsers(filteredUsers);
}

// Event listener for the form submission to add a user
const addUserForm = document.querySelector('#addUserForm');
addUserForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const name = nameInput.value.trim();
    if (name !== '') {
        addUser(name);
        nameInput.value = '';
    }
});

// When the page loads, display users from local storage
window.addEventListener('load', () => {
    displayUsersFromLocalStorage();
});

// When users are modified (added or deleted), save them to local storage
function handleUserModification() {
    saveUsersToLocalStorage();
}

// Call this function whenever users are modified
function modifyUsers(users) {
    displayUsers(users);
    handleUserModification();
}
