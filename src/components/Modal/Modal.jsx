import "./index.scss"

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
    <div className="modal-over">
        <div className="modal-content">
            {children}
        </div>
    </div>
    );
};

export default Modal;
