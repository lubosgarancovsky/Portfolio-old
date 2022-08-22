import './App.scss';

import { Background } from './containers/background';
import { Cursor } from './components/cursor';
import { Menu } from './components/menu';

import { HomePage } from './pages/homepage';
import { Intro } from './pages/introduction';
import { Workpage } from './pages/workpage';
import { Approach } from './pages/approach';
import { Contact } from './pages/contact';



function App() {
  return (
    <>
      <Cursor />
      <Background />
      <Menu/>
      <HomePage />
      <Intro />
      <Workpage/>
      <Approach/>
      <Contact/>
    </>
  );
}

export default App;

/*


 */