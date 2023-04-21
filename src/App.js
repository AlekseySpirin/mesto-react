import './App.css';
import Input from "./Components/Input";

const App = () => {
  return (
    <div className="App">
      <h1>Search app</h1>
      <div className={'App-content'}>
        <header className={'App-search'}>
          <Input name={'search'}
                 placeholder={'Search photo'}                 handleChange={(event) => console.log(event.target.value)}
          />
        </header>
        <section className={'App-cards'} ></section>
      </div>


    </div>
  );
}

export default App;
