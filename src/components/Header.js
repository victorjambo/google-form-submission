import React, { useContext } from 'react';
import * as Icon from 'react-feather';

import { ThemeContext, themes } from '../context/Theme';
import { ViewContext } from '../context/Views';
import { VIEWS } from '../utils/constants';
import { changeDomWidth } from '../utils/dom';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [page, setPage,,,, setPinned] = useContext(ViewContext);

  const handleThemeChange = () => {
    setTheme(prevState => (prevState === themes.dark ? themes.light : themes.dark));
  };

  const handleSettings = () => {
    setPage(prevState => {
      switch (prevState) {
        case VIEWS.HOME:
          return VIEWS.SETTINGS;
        case VIEWS.SETTINGS:
          return VIEWS.HOME;
        default:
          return prevState;
      }
    });
  };

  const handlePin = () => {
    changeDomWidth(0);
    setPinned(false);
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
            page === VIEWS.HOME ? <Icon.Settings size={15} /> : <Icon.Home size={15} />
          }
        </div>

        <div className="submissio-header-icon" onClick={handleThemeChange} role="button" onKeyPress={() => {}} tabIndex={0}>
          {
            theme === themes.light ? <Icon.Moon size={15} /> : <Icon.Sun size={15} />
          }
        </div>

        <div className="submissio-header-icon" onClick={handlePin} role="button" onKeyPress={() => {}} tabIndex={0}>
          <Icon.EyeOff size={15} />
        </div>
      </div>
    </div>
  );
};

export default Header;
