
export default function fetchUsers() {

    return fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => { console.error('error'); });
        
}

