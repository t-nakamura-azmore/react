import React,{Component}from 'react';
import {connect}from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {addMemo} from '../actions';

class memoNew extends Component{
  renderField = (field) => {
    const {input,label,type,meta:{touched,error}} = field;
    return(
      <div>
       <input {...input} placeholder={label} type={type} />
       {touched && error && <span>{error}</span>}
      </div>
    );
  }

onSubmit = (values) =>{
  this.props.addMemo(values);
  this.props.history.push('/');
}

render(){
  const {handleSubmit,pristine,submitting,invalid} = this.props;
  return(
  <form onSubmit={handleSubmit(this.onSubmit)}>
      <div>
        <Field label='タイトル' name='title' type='text' component={this.renderField}/>
      </div>
      <div>
        <Field label='メモ' name='memo' type='text' component={this.renderField}/>
      </div>
      <div>
        <input value='追加' type='submit' disabled={pristine || submitting || invalid}/>
        <Link to="/" >キャンセル</Link>
      </div>

  </form>
  )
}
}
  const validate = values =>{
    const errors={};
    if(!values.title)errors.title = "タイトルを入力してください";
    if(!values.memo)errors.memo = "メモを入力してください";
    return errors;
  }

  const mapDispatchToProps = ({addMemo});

  export default connect(null,mapDispatchToProps)(
    reduxForm({validate,form:'memoNewForm'})(memoNew)
  );
