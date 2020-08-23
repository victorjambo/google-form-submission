import React, { useContext, useState } from 'react';
import * as Icon from 'react-feather';

import { ThemeContext } from '../context/Theme';
import { ViewContext } from '../context/Views';
import { VIEWS } from '../utils/constants';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [view, setView] = useContext(ViewContext);
  const [pinned, setPinned] = useState(true);

  const handleThemeChange = () => {
    const { body } = document;

    setTheme(prevState => {
      if (prevState === 'dark') {
        body.classList.add('submissio-light');
        body.classList.remove('submissio-dark');
        return 'light';
      }
      body.classList.add('submissio-dark');
      body.classList.remove('submissio-light');
      return 'dark';
    });
  };

  const handleSettings = () => {
    setView(prevState => {
      switch (prevState) {
        case VIEWS.HOME:
          return VIEWS.SETTINGS;
        case VIEWS.SETTINGS:
          return VIEWS.HOME;
        default:
          return VIEWS.HOME;
      }
    });
  };

  return (
    <div className="submissio-view-header submissio-flex-row">
      <div className="submissio-header submissio-flex-col">
        <div className="submissio-header-title">Submissio</div>
        <div className="submissio-header-username submissio-flex-row">
          <Icon.User size={10} />
          <div>
            Victor Mutai
          </div>
        </div>
      </div>
      <div className="submissio-header-icons">
        <div className="submissio-header-icon" onClick={handleSettings} role="button" onKeyPress={() => {}} tabIndex={0}>
          {
            view === VIEWS.HOME ? <Icon.Settings size={15} /> : <Icon.Home size={15} />
          }
        </div>

        <div className="submissio-header-icon" onClick={handleThemeChange} role="button" onKeyPress={() => {}} tabIndex={0}>
          {
            theme === 'light' ? <Icon.Moon size={15} /> : <Icon.Sun size={15} />
          }
        </div>

        <div className="submissio-header-icon" onClick={() => setPinned(!pinned)} role="button" onKeyPress={() => {}} tabIndex={0}>
          {
            pinned ? <Icon.Eye size={15} /> : <Icon.EyeOff size={15} />
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
