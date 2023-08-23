import Image from 'next/image';

import { ContactsContainerItem } from './ContactsContainerItem';

import { EnvelopeIcon } from '../icons/Envelope';
import { MapIcon } from '../icons/Map';
import { PhoneIcon } from '../icons/Phone';

import BackgroundInfoContactsImg from '@/../public/images/bg-info-contacts.png';
import {
  PHONE_MAIN,
  PHONE_SECOND,
  MAILING_ADDRESS,
  STREET_ADDRESS,
} from '@/constants/contacts';

export const InfoContacts = () => {
  const contacts = [
    {
      key: 0,
      icon: <PhoneIcon />,
      contactDataHumanView: PHONE_MAIN.humanView,
      contactDataLinkView: `tel:${PHONE_MAIN.machineView}`,
    },
    {
      key: 1,
      icon: <PhoneIcon />,
      contactDataHumanView: PHONE_SECOND.humanView,
      contactDataLinkView: `tel:${PHONE_SECOND.machineView}`,
    },
    {
      key: 2,
      icon: <EnvelopeIcon />,
      contactDataHumanView: MAILING_ADDRESS,
      contactDataLinkView: `mailto:${MAILING_ADDRESS}`,
    },
    {
      key: 3,
      icon: <MapIcon />,
      contactDataHumanView: STREET_ADDRESS.name,
      contactDataLinkView: STREET_ADDRESS.googleURL,
    },
  ];

  return (
    <div className="relative" id="info-contacts-section">
      <div className="absolute left-0 top-0 -z-1 h-[242px] w-[360px] lg:h-[506px] lg:w-[762px]">
        <Image
          src={BackgroundInfoContactsImg}
          alt="карта розташування майстерні"
        />
      </div>
      <div className="lg:pt-15 grid pt-11 lg:grid-cols-2">
        <div className="order-1 ml-9 lg:ml-36">
          <div className="flex items-center ">
            <h2 className="font-birdman text-3xl text-primary lg:text-5xl">
              {'>>>'}
            </h2>
            <h1 className="ml-4 font-jost text-2xl uppercase md:ml-6 lg:text-4-5xl">
              контакти та інформація
            </h1>
          </div>
          <div className="mr-9 mt-11 font-jost text-sm lg:mt-12">
            <p>
              Ласкаво просимо до нашої автомайстерні! Ми спеціалізуємося на
              обслуговуванні та відновленні автомобілів, надаючи повний спектр
              послуг для вашої зручності. Від повного фарбування до локального
              покрасу деталей, ми готові допомогти вам відновити авто у
              відмінному стані.
            </p>
            <p className="mt-8">
              Наша команда майстрів професійно відновлює геометрію кузова,
              проводить рихтування, полірування фар та ремонт пластику. Завдяки
              навичкам у зварюванні, ми також виконуємо різноманітні сварочні
              роботи.
            </p>
            <p className="mt-8">
              Якщо ви маєте авто з Америки, ми готові забезпечити повне
              відновлення, адаптацію та реєстрацію. Наші послуги відзначаються
              високою якістю та професіоналізмом, а ваше задоволення - нашим
              головним пріоритетом.
            </p>
            <p className="mt-8">
              Не соромтеся звертатися для консультації, розрахунку вартості та
              запису на сервіс. Ми завжди готові допомогти вам з авто, щоб ви
              могли насолоджуватися безпечною та комфортною їздою!
            </p>
          </div>
        </div>
        <div className="order-3 mt-5 justify-self-center lg:order-2 lg:row-span-2 lg:mt-0 lg:self-end">
          <iframe
            height="400px"
            width="349px"
            style={{
              borderRadius: '30px',
              filter:
                'invert(100%) sepia(60%) saturate(30%) hue-rotate(200deg) brightness(120%) contrast(90%)',
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy={'no-referrer-when-downgrade'}
            src={STREET_ADDRESS.googleMapEmbedURL}
          ></iframe>
        </div>
        <div className="order-2 mt-12 grid gap-y-8 bg-primary-light pb-9 pl-9 pt-9 font-jost text-sm text-white/50 lg:order-3 lg:rounded-[0px_30px_30px_0px] lg:pl-36">
          {contacts.map((i) => (
            <ContactsContainerItem
              key={i.key}
              iconComponent={i.icon}
              contactDataHumanView={i.contactDataHumanView}
              contactDataLinkView={i.contactDataLinkView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
