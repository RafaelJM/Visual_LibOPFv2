import Console from './ts/console.tsx'
import GraphViwer from './ts/graph-viwer.tsx'
import TopMenu from './ts/top-menu.tsx'
import SideMenu from './ts/side-menu.tsx'
import GraphManager from './ts/graph-manager';
import './css/App.css'

const graphManager = new GraphManager();

function App() {
  return (
    <>
      <main>
        <TopMenu />
        <GraphViwer />
        <SideMenu />
        <Console />
      </main>
    </>
  )
}

export default App
