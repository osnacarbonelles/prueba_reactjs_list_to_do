import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SeccionTask } from './components/SeccionTask'
import { Alert } from 'react-bootstrap';
import { ModalElement } from './components/Modal'
import { NewTask } from './components/NewTask'

function App() {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [tarea, setTarea] = useState([])

  const filterTask = (complete) => {
    if(search){
      const searchTask = tarea.filter(item => item.task.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return searchTask.filter(item => item.complete === complete)
    }
    return tarea.filter(item => item.complete === complete)
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center p-2">Lista de tareas</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input placeholder='Buscar tarea' onChange={event => setSearch(event.target.value)} className="form-control" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {filterTask(false).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item.id}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
          
          {!filterTask(false).length && (
            <div className="col-12 col-md-7">
              <Alert variant='danger'>
                No hay tareas disponibles
              </Alert>
            </div>
          )}
        </div>

        <h3 className="text-center p-2">Completados</h3>
        <div className="row justify-content-center mt-4">
          {filterTask(true).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button className="btn btn-info form-control" onClick={() => setVisible(true)}>Nueva tarea</button>
          </div>
        </div>

        <ModalElement open={visible} setOpen={setVisible}>
          <NewTask setOpen={setVisible} setTarea={setTarea} tarea={tarea} />
        </ModalElement>
      </div>
    </>
  );
}

export default App;
