
const tasks = ['Estudar', 'Fazer compras', 'Cozinhar', 'Lavar a louça'];

function App() {
  return (
    <ul> { tasks.map((task) => <li>{ task }</li>) } </ul>
  );
}

export default App;
