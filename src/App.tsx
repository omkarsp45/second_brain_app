import './App.css';
import { Button } from './components/Button';
import { PlusIcon, ShareIcon } from './assets/icons/Icons';

function App() {
  return (
    <div className="flex place-content-center items-center h-screen">
      <Button
        innertext="Share Brain"
        startIcon={<ShareIcon iconSize='w-5 h-5'/>}
        textColor="text-primary"
        backgroundColor="bg-secondary"
      />
      &nbsp;&nbsp;
      <Button
        innertext="Add Content"
        startIcon={<PlusIcon iconSize='w-5 h-5'/>}
        textColor="text-secondary"
        backgroundColor="bg-primary"
      />
    </div>
  );
}

export default App;
