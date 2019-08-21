import Modal from 'react-modal';

Modal.setAppElement('#__next');
Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
  },
  // content: {
  //   position: 'absolute',
  //   top: '40px',
  //   left: '40px',
  //   right: '40px',
  //   bottom: '40px',
  //   border: '1px solid #ccc',
  //   background: '#fff',
  //   overflow: 'auto',
  //   WebkitOverflowScrolling: 'touch',
  //   borderRadius: '4px',
  //   outline: 'none',
  //   padding: '20px',
  // },
};

export default Modal;
