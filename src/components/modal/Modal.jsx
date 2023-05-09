import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
	if (!children) return;
	return createPortal(<div>{children}</div>, document.getElementById('modal'));
};

export default Modal;
