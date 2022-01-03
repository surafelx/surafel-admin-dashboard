import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <Dashboard />
    </div>
    </BrowserRouter>
  );
}

export default App;

// Component -- Jan 2 2021
// - Make Sidebar component
// - Sidebar Changing pages
// - Sidebar Show/Hide
// - Sidebar UI More Optimize
// - Make Topbar component
// - Topbar Visual
// - Topbar Changing pages
// - Topbar Show/Hide
// - Topbar UI More Optimize
// - Make RightBar component
// - RightBar Changing pages
// - RightBar Show/Hide
// - RightBar UI More Optimize
// - Make Footer Component
// - Footer Visual
// - Footer Changing pages
// - Footer Show/Hide
// - Footer UI More Optimize
// Design Other Pages 
