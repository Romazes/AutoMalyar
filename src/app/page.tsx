import { Main } from '../components/Main';

import { Dyeing } from '@/components/Dyeing';

const Home = () => {
  return (
    <main className="text-white">
      {/* <div className="pl-9 lg:pl-36"> */}
      <div>
        <Main />
        <Dyeing />
      </div>
    </main>
  );
};

export default Home;
