import {Layout} from './AppStyles'
import CTA from './components/CTA/CTA';
import Header from './components/Header/Header';
import UiPlus from './components/UiPlus/UiPlus';

function App() {
  return (
    <Layout>
      <UiPlus />
      <Header />
      <CTA />
    </Layout>
  );
}

export default App;
