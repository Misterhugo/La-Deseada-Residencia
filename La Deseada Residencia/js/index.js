index.js
const API_URL = 'http://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest ();

function onRequestHandler() {
if (this.readyState == 4 && this.status == 200) {
    // 4: done. it is complete the operation
    //console.log (this.response);
    const data = JSON.parse(this.response);
    const HTMLResponse = document.querySelector("#app");
    const tpl = data.map ((user) => '<li>${user.name} ${user.email}</li>');
    HTMLResponse.innerHTML = '<ul>${tpl}</ul>';
}
}
xhr.addEventListener( load, onRequestHandler);
xhr.open('GET', '${API_URL}/users');
xhr.send();
