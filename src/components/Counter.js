import React,{Component} from 'react';
import { connect } from 'react-redux';
import { increment,decrement } from '../actions';

class Counter extends Component {
  render(){
    return(
      <React.Fragment>
      <div>
      カウント値 : {this.props.value}
      </div>
      <div>
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ value : state.count.value });
const mapDispatchToProps = ({increment,decrement});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
