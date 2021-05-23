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
  //I did put the part to configure one variable in the CSS, I put the css of one controller
  //I left the event click to complete later this function, you can check in your pocket events click javascript
  return (
    <div className="App">
      <header className="App-header">  
          <div>
            
          </div>
          <form className="controlador">
            <button>aumentar</button>
            <button>disminuir</button>
        </form>
      </header>

    </div>
  );
}

export default App;
