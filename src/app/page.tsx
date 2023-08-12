import { Main } from '../components/Main';

import { AnyTypeDestruction } from '@/components/AnyTypeDestruction';
import { Dyeing } from '@/components/Dyeing';
import { HighQualityAlignment } from '@/components/HighQualityAlignment';
import { Restoration } from '@/components/Restoration';

const Home = () => {
  return (
    <main className="text-white">
      <Main />
      <Dyeing />
      <AnyTypeDestruction />
      <Restoration />
      <HighQualityAlignment />
    </main>
  );
};

export default Home;
