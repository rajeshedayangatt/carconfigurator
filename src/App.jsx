
import CanvasRender from './components/CanvasRender'
import Customiser from './components/Customiser'
import EnvCustomise from './components/EnvCustomise'

function App() {

  return (
    <div className='bg-[goldenrod]' >
      <Customiser />
      <EnvCustomise />
      <div style={{ height : '100vh'}}>
      <CanvasRender />

      </div>
    </div>
  )
}

export default App
