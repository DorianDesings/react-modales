import { useState } from 'react';
import FormEdit from './components/form-edit/FormEdit';

const App = () => {
	const [validEmail, setValidEmail] = useState(false);
	const [email, setEmail] = useState('');
	return (
		<>
			<FormEdit />
			<input
				type='text'
				onChange={e => {
					validateEmail(e.target.value, setValidEmail);
					setEmail(e.target.value);
				}}
			/>
			{!validEmail && email && <span>El email no es correcto</span>}
		</>
	);
};

const validateEmail = (email, setValidEmail) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	setValidEmail(emailRegex.test(email));
};

export default App;
