import fetchUsers from './userService';
import { renderUser, renderList } from './view';

import './styles.css';

const listEl = document.getElementById('list');
const detailsEl = document.getElementById('details');

fetchUsers().then(data => {
  listEl.innerHTML = renderList(data);
  
  listEl.addEventListener('click', (e) => {
    const user = data[e.target.closest('li').dataset.index];
    if(!user) return;
    detailsEl.innerHTML = renderUser(user);
  });
});
