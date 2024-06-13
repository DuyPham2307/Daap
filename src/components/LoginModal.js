import React, {useState, useEffect} from 'react';
import '../style/modal.css'; // Thêm các styles cần thiết
import '../style/icon.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginModal = ({ showModal, closeModal, children }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
    } else {
      // Thêm độ trễ để hoàn thành animation trước khi unmount
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return isVisible ? (
    <div className={`modal ${showModal ? 'show fade-in' : 'fade-out'}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <span className="close" onClick={closeModal}>
            Close &times;
          </span>
        </div>
        <div className="modal-info">  
          <div className="modal-description">
            <p style={{marginBottom: '20px'}}>SIGN IN <br/> TO VOTE & SAVE <br/> PROGRESS</p>
          </div>
          <div className='modal-login'>
            <FontAwesomeIcon icon="fa-solid fa-m" className='modal-icon' />
          </div>
          <hr style={{ border: 'none', height: '2px', backgroundColor: '#007BFF', margin: '20px 0', width: '40%' }} />
          <h3 style={{margin: 0, color:'#fefefe'}} >WE TAKE YOUR PRIVACY SERIOUSLY</h3>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;
