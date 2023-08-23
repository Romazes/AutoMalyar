import type { FC } from 'react';

interface IContractsContainerItemProps {
  iconComponent: JSX.Element;
  contactDataHumanView: string;
  contactDataLinkView: string;
}

export const ContactsContainerItem: FC<IContractsContainerItemProps> = ({
  iconComponent,
  contactDataHumanView,
  contactDataLinkView,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">{iconComponent}</div>
      <div>
        <a href={contactDataLinkView} target="_blank">
          {contactDataHumanView}
        </a>
      </div>
    </div>
  );
};
