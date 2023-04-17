import React from 'react';
import { ButtonWrapper, List, Wrapper } from './SideBar.styles';
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
import closeIcon from '../../../assets/images/close.png';
import unitedStates from '../../../assets/icons/united-states.png';
import { setIsVisible } from '../../../Redux/slices/sideBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './SideBar.types';
import { Link } from '../../Atoms/Link/Link';

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
    { country: 'UNITED STATES', shortcut: 'US', icon: unitedStates },
  ];

  const dispatch = useDispatch();
  const isSideBarVisible = useSelector<State>((state) => state.barVisibility.isVisible);

  return (
    <Wrapper open={isSideBarVisible}>
      <ButtonWrapper>
        <button onClick={() => dispatch(setIsVisible(false))}>
          <img src={closeIcon} />
        </button>
      </ButtonWrapper>
      <List>
        {countries.map(({ country, shortcut, icon }, id) => (
          <div key={id}>
            <img src={icon} /> <Link to={`/country/${shortcut}`}>{country}</Link>
          </div>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideBar;
