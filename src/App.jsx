import ListMatkul from './components/ListMatkul';
const nama = "Desyana";
const role = "superadmin";

function App() {
  return (
    <div>
      <h1>Selamat datang, {nama}!</h1>
      <p>Peran: {role}</p>

      <ListMatkul />
    </div>
  );
}

export default App;