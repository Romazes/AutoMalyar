import { Main } from '../components/Main';

import { AnyTypeDestruction } from '@/components/AnyTypeDestruction';
import { Dyeing } from '@/components/Dyeing';

const Home = () => {
  return (
    <main className="text-white">
      <Main />
      <Dyeing />
      <AnyTypeDestruction />
    </main>
  );
};

export default Home;
