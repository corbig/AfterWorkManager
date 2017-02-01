const uid = () => Math.random().toString(34).slice(2);


const addTodo = (text) => (
  {
    type: 'ADD_TODO',
    id: uid(),
    isDone: false,
    text: text
 }
)

export default addTodo;
