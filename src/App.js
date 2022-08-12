import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
  }

  body{
    background-color: bisque;
    display: flex;
    margin-left:50%;
    margin-top:10%;
    color:darkslategray;
    border: solid;
    border-radius:90px;
    padding:60px;
    width:40vw;
    height:70vh;

  }
  input{
    width:120%;
    padding:3px;
  }

button{
  padding:3%;
  color:blue;
  cursor:pointer;
  

}
h1{
  margin-bottom:10px;
  text-align:center;
}

`;

export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };
  handleChange = (e) => {
    this.setState({ tarefa: e.target.value });
  };
  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[  \t]+$/)) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <div>
          <h1>Meta do dia</h1>
          <input onChange={this.handleChange} value={this.state.tarefa} />
          <button onClick={this.add}>Adicionar</button>
          {this.state.lista.map((rastreador) => (
            <div>
              <ul>
                <li>{rastreador.tarefa}</li>
              </ul>
              <button onClick={() => this.remove(rastreador.id)}>
                Concluído
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
