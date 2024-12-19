import './App.css';
import { Button } from './components/Button';
import { PlusIcon, ShareIcon } from './assets/icons/Icons';

function App() {
  return (
    <div className="flex place-content-center items-center h-screen">
      <Button
        innertext="Share Brain"
        startIcon={<ShareIcon className={'w-4'}/>}
        textColor="text-primary"
        backgroundColor="bg-secondary"
      />
      &nbsp;&nbsp;
      <Button
        innertext="Add Content"
        startIcon={<PlusIcon className={'w-4'}/>}
        textColor="text-secondary"
        backgroundColor="bg-primary"
      />
    </div>
  );
}

export default App;
