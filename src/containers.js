import { connect } from 'react-redux';
import AWTodoList from './AWTodoList';
import addTodo  from './actions';

const mapStateToProps = (state) => (
	{todos:state}
)

const ReduxTodoList = connect(
	mapStateToProps
)(AWTodoList)


export default ReduxTodoList
