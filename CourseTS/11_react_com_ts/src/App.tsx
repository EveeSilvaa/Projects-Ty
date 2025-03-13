// 3 - importação de components
import FirstComponet from "./components/FirstComponet";


function App() {
  // 1 - Variaveis
  const name: string = "viviane";
  const age: number = 17;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };


  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && ( //estamos fazendo uma condicional com o booleano e concatenando para retornar
        <p>Está Trabalhando!</p>
       )} 
       <h3>{userGreeting(name)}</h3>
       <FirstComponet />
    </div>
  );
}

export default App;
