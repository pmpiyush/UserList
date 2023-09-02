// local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// save users to local 
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// displays users from local
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

function generateUniqueId() {
    return Math.floor(Math.random() * 1000); // Generate a random number
}

// displays users
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

// new user added from this function
function addUser(name) {
    const newUser = { id: generateUniqueId(), name: name };
    users.push(newUser);
    modifyUsers(users);
}

// user can be deleted by th ehelp of id
function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
    modifyUsers(users);
}

// search user function
function searchUsers() {
    const searchInput = document.querySelector('#search').value.toLowerCase();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchInput));
    displayUsers(filteredUsers);
}

// add a user
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

// display list of user from local
window.addEventListener('load', () => {
    displayUsersFromLocalStorage();
});

// saves user after deleting in local
function handleUserModification() {
    saveUsersToLocalStorage();
}


function modifyUsers(users) {
    displayUsers(users);
    handleUserModification();
}
