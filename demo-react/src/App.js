import './App.css';
import { Outlet } from "react-router-dom";
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';


function App() {

  return (
      <div className='bg-gray-100 dark:bg-slate-900 h-full'>
        <PageHeader/>
        <Outlet />
        <PageFooter/>
      </div>
  );
}

export default App;