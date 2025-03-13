import React, {createContext} from "react";

// 3 - importação de components
import FirstComponet from "./components/FirstComponet";

// 4 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 5 - useState
import State from "./components/State";

// 7 - usando o context
import Context from "./components/Context";

// 6 - type
type textOrNull = string | null

//type fixed = "isso" | "ou" | "aquilo";

// 7 -  context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null> (null)

function App() {
  // 1 - Variaveis
  const name: string = "viviane";
  const age: number = 17;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 6 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  //mySecondText = "opa";

  //const testandoFixed: fixed = "isso";

  // 7 - context api
  const contextValue = {
    language: "javascript",
    framework: "Express",
    projects: 5,
  };


  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && ( //estamos fazendo uma condicional com o booleano e concatenando para retornar
        <p>Está Trabalhando!</p>
       )} 
       <h3>{userGreeting(name)}</h3>
       <FirstComponet />
       <SecondComponent name="segundo" /> 
       <Destructuring 
       title="Primeiro post"
       content="Algum conteudo"
       commentsQty={10}
       tags={["ts", "js"]}
       category={Category.TS}
       />
      <State />
      {myText && <p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel</p>}
      <Context />
    </div>
  </AppContext.Provider>
  );
}

export default App;
