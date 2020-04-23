import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMemos } from '../actions';
import _ from 'lodash';

class MemoIndex extends Component{
  componentDidMount(){
    this.props.getMemos();
  }

  renderMemos = () =>{
    const memos = this.props.memos;
    return _.map(memos, memo =>(
      <tr key={memo.id}>
        <td>
          <Link to={`/show/${memo.id}`}>
            {memo.title}
          </Link>
        </td>
        <td>{memo.memo}</td>
      </tr>
    ));
  }

  render(){
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>メモ</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMemos()}
          </tbody>
        </table>
        <Link to='/new'>追加</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ memos : state.memos });

const mapDispatchToProps = ({ getMemos })

export default connect( mapStateToProps, mapDispatchToProps )(MemoIndex);
