
const API_URL = 'http://localhost:3000';
let token = null;

function showStatus(message) {
  document.getElementById('status').innerText = message;
}

// Mostrar u ocultar formularios
function showLogin() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('addItemForm').style.display = 'none';
}

function showItems() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('addItemForm').style.display = 'block';
  loadItems();
}

// Registro
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const res = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if(res.ok) {
    showStatus('Usuario registrado con éxito. Ahora inicia sesión.');
    showLogin();  // Va directo a login
  } else {
    showStatus(data.message || data.error || 'Error al registrar.');
  }
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.token) {
    token = data.token;
    showStatus("Inicio de sesión correcto.");
    showItems(); // Muestra el calendario y formulario agregar fechas
  } else {
    showStatus(data.error || 'Error al iniciar sesión.');
  }
});

/*// Cargar ítems
async function loadItems() {
  const res = await fetch(`${API_URL}/items`);
  const items = await res.json();
  const list = document.getElementById('itemsList');
  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - ${item.date} `;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => deleteItem(item.id);
    li.appendChild(delBtn);
const edit = document.createElement('button');
edit.textContent = 'Editar';
edit.onclick = async () => {
  const nuevoTitulo = prompt('Nuevo título:', item.title);
  const nuevaFecha = prompt('Nueva fecha:', item.date);
  if (!nuevoTitulo || !nuevaFecha) return;
























  const res = await fetch(`${API_URL}/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title: nuevoTitulo, date: nuevaFecha })
  });
  if (res.ok) {
    msg.textContent = 'Fecha editada correctamente';
    loadItems();
  } else {
    const data = await res.json();
    msg.textContent = data.error || 'Error al editar';
  }
};
li.appendChild(edit);















    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.onclick = async () => {
      const nuevoTitulo = prompt('Nuevo título:', item.title);
      const nuevaFecha = prompt('Nueva fecha:', item.date);
      if (!nuevoTitulo || !nuevaFecha) return;

      if (!token) return showStatus('Inicia sesión para editar.');
      const res = await fetch(`${API_URL}/items/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ title: nuevoTitulo, date: nuevaFecha })
      });
      if (res.ok) {
        showStatus('Fecha editada.');
        loadItems();
      } else {
        showStatus('Error al editar.');
      }
    };
    li.appendChild(editBtn);

    list.appendChild(li);
  });
}
 */
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.title} - ${item.date} `;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Eliminar';
  delBtn.onclick = () => deleteItem(item.id);
  li.appendChild(delBtn);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Editar';
  editBtn.onclick = async () => {
    const nuevoTitulo = prompt('Nuevo título:', item.title);
    const nuevaFecha = prompt('Nueva fecha:', item.date);
    if (!nuevoTitulo || !nuevaFecha) return;

    if (!token) return showStatus('Inicia sesión para editar.');
    const res = await fetch(`${API_URL}/items/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ title: nuevoTitulo, date: nuevaFecha })
    });
    if (res.ok) {
      showStatus('Fecha editada.');
      loadItems();
    } else {
      showStatus('Error al editar.');
    }
  };
  li.appendChild(editBtn);

  list.appendChild(li);
});
// Agregar ítem
document.getElementById('addItemForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!token) {
    showStatus('Inicia sesión para agregar fechas.');
    return;
  }
  const title = document.getElementById('itemTitle').value;
  const date = document.getElementById('itemDate').value;

  const res = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, date })
  });
  const data = await res.json();
  if (res.ok) {
    showStatus('Fecha agregada.');
    loadItems();
  } else {
    showStatus(data.error || 'Error al agregar.');
  }
});

// Eliminar ítem
async function deleteItem(id) {
  if (!token) {
    showStatus('Inicia sesión para eliminar fechas.');
    return;
  }
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await res.json();
  if (res.ok) {
    showStatus('Fecha eliminada.');
    loadItems();
  } else {
    showStatus(data.error || 'Error al eliminar.');
  }
}

// Al cargar la página, mostramos el registro y ocultamos el resto
window.onload = () => {
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('addItemForm').style.display = 'none';
  showStatus('');
};