const socket = io();
// let user;
// let chatBox = document.getElementById('chatBox');

// Swal.fire({
// 	title: 'Identificate',
// 	input: 'text',
// 	text: 'success',
// 	inputValidator: (value) => {
// 		return !value && 'Necesitas ingresar un nombre';
// 	},
// 	allowOutsideClick: false,
// }).then((result) => {
// 	user = result.value;
// });

// chatBox.addEventListener('keyup', (evt) => {
// 	if (evt.key === 'Enter') {
// 		if (chatBox.value.trim().lenght > 0) {
// 			socket.emit('message', { user: user, message: chatBox.value });
// 			chatBox.value = '';
// 		}
// 	}
// });

// socket.on('messageLogs', (data) => {
// 	let log = document.getElementById('messageLogs');
// 	let messages = '';
// 	data.forEach((message) => {
// 		messages = messages + `${message.user} dice: ${message.message} </br>`;
// 	});
// 	log.innerHTML = messages;
// });

// Agregar Productos con input

// const input = document.querySelector('input');
// document.querySelector('button').addEventListener('click', () => {
// 	socket.emit('message', input.value);
// });

// socket.on('product', (data) => {
// 	document.querySelector('p').innerText = data;
// });
