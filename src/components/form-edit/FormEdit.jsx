import { useState } from 'react';
import Modal from '../modal/Modal';

const FormEdit = () => {
	const [content, setContent] = useState(null);
	return (
		<>
			<form>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' />
			</form>
			<button onClick={() => showModal(setContent)}>Abir modal</button>
			<button onClick={() => setContent(null)}>Cancelar</button>
			<Modal>{content}</Modal>
		</>
	);
};

const showModal = setContent => {
	setContent(<h1>Editar usuario</h1>);
};

export default FormEdit;
