import { useRef } from 'react'

import './Congratulations.css'

const Congratulations = ({ handleClose }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if(modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    }

    return (
        <div onClick={handleClickOutside} className="modal-order-div-wrapper">
            <div ref={modalRef} className="main-div">
                <div className="main-text">
                    <p className="text-1">Congratulations!</p>
                    <p className="text-2">Your order it's on its way.</p>

                    <button className="successful-order-button" type="button" onClick={handleClose}>
                        <span>Ok</span>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Congratulations;