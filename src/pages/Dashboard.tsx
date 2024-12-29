import { Sidebar } from '../components/Sidebar';
import { Brainspace } from '../components/Brainspace';

export function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
        <Sidebar/>
        <Brainspace/>
    </div>
  );
}