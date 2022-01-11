function Modal({ children, open, onClose, className }) {
  const classNames = ["modal", className].join(" ");
  const onClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  if (!open) return null;
  return (
    <div className={classNames} onClick={onClickOutside}>
      {children}
    </div>
  );
}

export default Modal;
