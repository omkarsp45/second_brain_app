import { Sidebar } from '../components/Sidebar';
import { Brainspace } from '../components/Brainspace';

export function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-20 sm:ml-44 md:ml-52 lg:ml-72 xl:ml-80 2xl:ml-96">
        <Brainspace />
      </div>
    </div>
  );
}