import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state, 
    match.params.filter || 'all',
  ),
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;