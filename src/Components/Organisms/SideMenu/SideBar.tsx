import React from 'react';
import { List, ListItem, Wrapper } from './SideBar.styles';
import { NavLink } from 'react-router-dom';

import argentina from '../../../assets/icons/argentina.png';
import australia from '../../../assets/icons/australia.png';
import austria from '../../../assets/icons/austria.png';
import belgium from '../../../assets/icons/belgium.png';
import brazil from '../../../assets/icons/brazil.png';
import canada from '../../../assets/icons/canada.png';
import china from '../../../assets/icons/china.png';
import colombia from '../../../assets/icons/colombia.png';
import cuba from '../../../assets/icons/cuba.png';
import czechRepublic from '../../../assets/icons/czech-republic.png';
import egypt from '../../../assets/icons/egypt.png';
import france from '../../../assets/icons/france.png';
import germany from '../../../assets/icons/germany.png';
import greece from '../../../assets/icons/greece.png';
import poland from '../../../assets/icons/poland.png';

const SideBar = () => {
  const countries = [
    { country: 'ARGENTYNA', shortcut: 'ar', icon: argentina },
    { country: 'AUSTRALIA', shortcut: 'au', icon: australia },
    { country: 'AUSTRIA', shortcut: 'at', icon: austria },
    { country: 'BELGIA', shortcut: 'be', icon: belgium },
    { country: 'BRAZYLIA', shortcut: 'br', icon: brazil },
    { country: 'KANADA', shortcut: 'ca', icon: canada },
    { country: 'CHINY', shortcut: 'cn', icon: china },
    { country: 'KOLUMBIA', shortcut: 'co', icon: colombia },
    { country: 'KUBA', shortcut: 'cu', icon: cuba },
    { country: 'CZECHY', shortcut: 'cz', icon: czechRepublic },
    { country: 'EGIPT', shortcut: 'eg', icon: egypt },
    { country: 'FRANCJA', shortcut: 'fr', icon: france },
    { country: 'NIEMCY', shortcut: 'de', icon: germany },
    { country: 'GRECJA', shortcut: 'gr', icon: greece },
    { country: 'POLSKA', shortcut: 'pl', icon: poland },
  ];

  return (
    <Wrapper>
      <List>
        {countries.map(({ country, shortcut, icon }) => (
          <div>
            <img src={icon} /> <ListItem>{country}</ListItem>
          </div>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideBar;
