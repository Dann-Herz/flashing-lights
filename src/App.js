import logo from './logo.svg';
import './App.css';
//actualizar variables css con javascript, para esto busca en tu pocket

function App() {
  let root = document.documentElement;
  // const algo = () => {
  //   setTimeout(() => {
  //     root.style.setProperty('--color-inicial', "#4a768f00")
  //   }, 5000);
  // };
  // algo();

  //this is the closure, don't touch it
  const howMuch = () => {
    var size = 70;
    const countSize = (toAdd) => {
      size += toAdd;
      console.log(`Este es mi valor...  ${size}`);
      return size
    };

    return countSize
  }
  const mySize = howMuch();
  
 
//these functions are to enlarge or diminish the size of the box when you click the button
  const agrandar = () => {
      root.style.setProperty('--height-initial', `${mySize(1)}vh`);
      root.style.setProperty('--width-initial', `${mySize(1)}vh`);

  };
  const disminuir = () => {
      root.style.setProperty('--height-initial', `${mySize(-1)}vh`);
      root.style.setProperty('--width-initial', `${mySize(-1)}vh`);
 
  };
  //This is only one test
  const agregar = () => {
      var valor = mySize();
      return valor
  };
  //
  return (
    <div className="App">
      <header className="App-header">  
          <div>
            
          </div>
          <footer className="controlador">
            <button onClick={agrandar}>aumentar</button>
            <p>{}Px</p>
            <button onClick={disminuir}>disminuir</button>
        </footer>
      </header>

    </div>
  );
}

export default App;
