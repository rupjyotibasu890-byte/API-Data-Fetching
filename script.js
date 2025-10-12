const fetchBtn = document.getElementById("fetchBtn");
const userList = document.getElementById("userList");

fetchBtn.addEventListener("click", () => {
  fetchBtn.disabled = true;
  fetchBtn.textContent = "Fetching...";
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      displayUsers(data);
      fetchBtn.textContent = "Fetch Users";
      fetchBtn.disabled = false;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      fetchBtn.textContent = "Fetch Users";
      fetchBtn.disabled = false;
      userList.innerHTML = "<p style='color:red'>Failed to fetch data</p>";
    });
});

function displayUsers(users) {
  userList.innerHTML = "";
  users.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
    userList.appendChild(div);
  });
}
