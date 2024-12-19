import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './assets/icons/PlusIcon'
import { ShareIcon } from './assets/icons/ShareIcon'

function App() {
  return (
    <div className='flex place-content-center items-center h-screen'>
      <Button innertext={"Share Brain"} startIcon={<ShareIcon />} textColor={"text-primary"} backgroundColor={"bg-secondary"} textsize={"text-xl"} paddingx={"px-4"} paddingy={"py-2"} borderRadius={"rounded-lg"} />
      <Button innertext={"Add Content"} startIcon={<PlusIcon />} textColor={"text-secondary"} backgroundColor={"bg-primary"} textsize={"text-xl"} paddingx={"px-4"} paddingy={"py-2"} borderRadius={"rounded-lg"} />
    </div>
  )
}

export default App

