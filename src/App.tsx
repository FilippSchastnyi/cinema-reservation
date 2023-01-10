import Button from './components/_UI/Button/Button';

function App() {
  return (
    <Button
      size="sm"
      onClick={() => {
        console.log('Hello');
      }}
    >
      <span>Hello</span>
    </Button>
  );
}

export default App;
