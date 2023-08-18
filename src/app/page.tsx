import { Main } from '../components/Main';

import { AnyTypeDestruction } from '@/components/AnyTypeDestruction';
import { Dyeing } from '@/components/Dyeing';
import { FullRestorationImportedCar } from '@/components/FullRestorationImportedCar';
import { HighQualityAlignment } from '@/components/HighQualityAlignment';
import { PriceListServices } from '@/components/PriceListServices';
import { Restoration } from '@/components/Restoration';

const Home = () => {
  return (
    <main className="text-white">
      <Main />
      <Dyeing />
      <AnyTypeDestruction />
      <Restoration />
      <HighQualityAlignment />
      <FullRestorationImportedCar />
      <PriceListServices />
    </main>
  );
};

export default Home;
