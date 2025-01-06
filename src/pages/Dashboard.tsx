import { Sidebar } from '../components/Sidebar';
import { Brainspace } from '../components/Brainspace';

export function Dashboard(props) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className='w-20 sm:w-20 md:w-44 lg:w-52 xl:w-72 2xl:w-80'></div>
      <div className="flex-1 bg-card-space overflow-auto">
        <Brainspace share={props.share}/>
      </div>
    </div>
  );
}