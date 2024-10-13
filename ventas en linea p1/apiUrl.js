const apiUrl = 'https://docs.google.com/spreadsheets/d/11gqUb9Jkk0lNKX9FvgFnrJz8iiShUEh6sB1BuOyYoVY/edit?usp=sharing';
// captura formulario 
const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');

// consumir API READ

const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data);
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

const renderTable = (data) => {
    console.log(data);
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = `
<tr class="border-b"></tr>
        <td class="py-2 px-4">${item.Nombre}</td>
        <td class="py-2 px-4">${item.Apellido}</td>
        <td class="py-2 px-4">${item.Telefono}</td>
        
        <td>
            <button class="bg-yellow-500 text-withe px-2 py-1 rounded" onclick="">Editar</button>
            <button class="bg-red-500 text-withe px-2 py-1 rounded" onclick="">Eliminar</button>
        </td>
        </tr>`;
        dataTable.insertAdjacentHTML('beforeend', row);
    });
}

getData();
