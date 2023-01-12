import Button from './components/_UI/Button/Button';
import Modal from './components/_UI/Modal/Modal';

function App() {
  return (
    <>
      <Modal isOpen closePopup={() => {}}>
        <Button
          size="sm"
          onClick={() => {
            console.log('Hello');
          }}
        >
          <span>CLICK</span>
        </Button>
      </Modal>
      <Button
        size="sm"
        onClick={() => {
          console.log('Hello');
        }}
      >
        <span>Hello</span>
      </Button>
    </>

  );
}

export default App;
