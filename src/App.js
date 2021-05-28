import logo from './logo.svg';
import './App.css';
//actualizar variables css con javascript, para esto busca en tu pocket
import controller from './components/controlador.js';

function App() {
  //this is for obtein the documentElement and change styles from here
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
  //this second closure is because I need 
  const howMuchDelay = () => {
    var d = 1;
    const countNumber = (toAdd) => {
      d += toAdd;
      console.log(`Este es mi valor...  ${d}`);
      return d
    };
    return countNumber
  }
  const delay = howMuchDelay();
  const initialSizeHeight = howMuch();
  const initialSizeWeight = howMuch();
  const finalSizeHeight = howMuch();
  const finalSizeWeight = howMuch();

  
  var numero = 30;
//these functions are to enlarge or diminish the size of the box when you click the button
 //This part is to change the frequency
  const lessFrequency = () => {
    root.style.setProperty('--animation-delay', `${delay(.1)}s`);
  };  
  const moreFrequency = () => {
      root.style.setProperty('--animation-delay', `${delay(-.1)}s`);
  };

//This part is to change the initial size of the box
  const enlargeHeight1 = () => {
      root.style.setProperty('--height-initial', `${initialSizeHeight(1)}vh`);
  };
  const diminishHeight1 = () => {
      root.style.setProperty('--height-initial', `${initialSizeHeight(-1)}vh`);
  };
  const enlargeWidth1 = () => {
      root.style.setProperty('--width-initial', `${initialSizeWeight(1)}vh`);
  };
  const diminishWidth1 = () => {
      root.style.setProperty('--width-initial', `${initialSizeWeight(-1)}vh`);
      numero = initialSizeWeight(0);
      console.log(numero);
  };

//This part is to change the final size of the box
  const enlargeHeight2 = () => {
    root.style.setProperty('--height-final', `${finalSizeHeight(1)}vh`);
  };
  const diminishHeight2 = () => {
      root.style.setProperty('--height-final', `${finalSizeHeight(-1)}vh`);
  };
  const enlargeWidth2 = () => {
      root.style.setProperty('--width-final', `${finalSizeWeight(1)}vh`);
  };
  const diminishWidth2 = () => {
      root.style.setProperty('--width-final', `${finalSizeWeight(-1)}vh`);
      numero = initialSizeWeight(0);
      console.log(numero);
  };


  //This is only one test



  //
  return (
    <div className="App">
      <div className="App-shape">  
         
          <div className="App-shape-square"></div>

          <div className="controller">
                <div className="controller-frequency">
                         <p>Frecuencia</p>
                          <button onClick={moreFrequency}>Aumentar</button>
                          <p>{} latidos por segundo</p>
                          <button onClick={lessFrequency}>Disminuir</button>
                </div>

                <div className="controller-initialSize">
                    <div>
                          <p>Altura inicial</p>
                          <button onClick={enlargeHeight1}>Aumentar</button>
                          <p>{} Px</p>
                          <button onClick={diminishHeight1}>Disminuir</button>
                    </div>
                    <div>
                          <p>Ancho inicial</p>
                          <button onClick={enlargeWidth1}>Aumentar</button>
                          <p>{} Px</p>
                          <button onClick={diminishWidth1}>Disminuir</button>
                    </div>
                </div>

                <div className="controller-finalSize">
                    <div>
                          <p>Altura final</p>
                          <button onClick={enlargeHeight2}>Aumentar</button>
                          <p>{} Px</p>
                          <button onClick={diminishHeight2}>Disminuir</button>
                    </div>
                    <div>
                          <p>Ancho final</p>
                          <button onClick={enlargeWidth2}>Aumentar</button>
                          <p>{} Px</p>
                          <button onClick={diminishWidth2}>Disminuir</button>
                    </div>
                </div>

          </div>

      </div>
    </div>
  );
}

export default App;
