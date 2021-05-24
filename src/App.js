import logo from './logo.svg';
import './App.css';
//actualizar variables css con javascript, para esto busca en tu pocket

function App() {
  let root = document.documentElement;
  const algo = () => {
    setTimeout(() => {
      root.style.setProperty('--color-inicial', "#4a768f00")
    }, 5000);
  };
  algo();
  const agrandar = () => {
    root.style.setProperty('--height-initial', `${10}vh`)
      root.style.setProperty('--width-initial', `${10}vh`)

  };

  //So, for now I set the button to do agrandar(); to diminish the initial size of the box
  //I need to make one function to enlarge or diminish one number in a closure
  return (
    <div className="App">
      <header className="App-header">  
          <div>
            
          </div>
          <footer className="controlador">
            <button onClick={agrandar}>aumentar</button>
            <button>disminuir</button>
        </footer>
      </header>

    </div>
  );
}

export default App;
