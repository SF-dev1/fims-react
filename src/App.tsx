// import Header from './assets/master_components/Header'
import Sidebar from './master_components/Sidebar'
import Tasks from './tasks/Tasks'

function App() {

  return (
    <>
      <Sidebar title="FIMS">
        <Tasks />
      </Sidebar>
    </>
  )
}

export default App
