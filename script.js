let id =0;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('events');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('eventName').value;
    row.insertCell(1).innerHTML = document.getElementById('eventDate').value;
    row.insertCell(2).innerHTML = document.getElementById('location').value;
    document.getElementById('eventName').value = '';
});

