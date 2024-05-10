import './ModalWindow.css'

export const ModalWindow = ({showWindow, setShowWindow, children}) => {
    return (
        <div className={`modal-window show-window-${showWindow}`}>
            <button className="modal-close" onClick={() => setShowWindow(curr => !curr)}>X</button>
            {children}
        </div>
    )
}