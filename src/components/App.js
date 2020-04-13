import React,{ Component } from 'react';

const App = () => {
  return <Counter />
}
class Counter extends Component
  {
    constructor(props)
    {
      super(props);
      this.state = {
        value : 0
      }
    }

    onIncrement = () =>{
      this.setState({
        value : this.state.value + 1
      });
    }
    onDecrement = () =>{
      this.setState({
        value : this.state.value - 1
      });
    }
    render()
    {
      return(
        <div>
          <p>カウントアプリ</p>
          <div>
          カウント値：{this.state.value}
          </div>

          <div>
          <button type="button" onClick={this.onIncrement}>+</button>
          <button type="button" onClick={this.onDecrement}>-</button>
          </div>
        </div>


      );
    }

  }



export default App;
