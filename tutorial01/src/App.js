import logo from './logo.svg';
import './App.css';

function App() {
  // const name = "Mangesh"

  const handleNameChange = () => {
    const names = ['Mangesh', 'Sangesh', 'Akshay']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        {/* <h1>Hello {name}</h1> */}
        <h1>Hello {handleNameChange()}</h1>
      </header>
    </div>
  );
}

export default App;
