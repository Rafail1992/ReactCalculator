import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
