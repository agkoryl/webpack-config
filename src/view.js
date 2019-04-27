export function renderList(data) {
    return data.reduce((html, v, i) => {
      return html += `<li data-index="${i}"> <span><span>${v.name.first}</span></span> </li>`;
    }, '');
  }
  
  export function renderUser(user) {
      return `
      Full name: <b>${user.name.first} ${user.name.last} </b><br>
      City: <b>${user.location.city}  </b>
      <img src="https://www.countryflags.io/${user.nat.toLowerCase()}/flat/16.png" /><br>
      <img src="${user.picture.thumbnail}" />
    `;
  }


// import fetchUsers from "./userService";

// function showDetails(user) {
// const detailColumn = document.getElementById("details");
// detailColumn.innerHTML = `<div><h1>${user.name.first}</h1></div>`
// }

// export default function renderUsers() {

// fetchUsers().then(users => {
//     users.forEach(function(user) {
//         const ulEl = document.getElementById('list');
//         const ulLi = document.createElement("li");
//         ulLi.innerHTML = user.name.first;
//         ulLi.addEventListener("click", (e) => );
//         ulEl.appendChild(ulLi);
//     })
// });
// }




