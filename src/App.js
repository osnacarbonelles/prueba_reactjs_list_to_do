import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <h3 className="text-center p-2">Lista de tareas</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input
              placeholder="Buscar tarea"
              // onChange={(event) => setSearch(event.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {filterTask(false).map((item) => (
            <div className="col-12 col-md-7 mb-3" key={item.id}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
        </div>

        <h3 className="p-2">Completados</h3>
        <div className="row justify-content-center mt-4">
          {filterTask(true).map((item) => (
            <div className="col-12 col-md-7 mb-3" key={item}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button
              className="btn btn-info form-control"
              onClick={() => setVisible(true)}
            >
              Nueva tarea
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
