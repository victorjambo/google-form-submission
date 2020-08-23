import React, { useContext } from 'react';
import * as Icon from 'react-feather';

import { ThemeContext, themes } from '../context/Theme';
import { ViewContext } from '../context/Views';
import { VIEWS } from '../utils/constants';
import { changeDomWidth } from '../utils/dom';

const dark = 'submissio-dark';
const light = 'submissio-light';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [view, setView] = useContext(ViewContext);

  const handleThemeChange = () => {
    const { body } = document;

    setTheme(prevState => {
      if (prevState === themes.dark) {
        body.classList.add(light);
        body.classList.remove(dark);
        return themes.light;
      }
      body.classList.add(dark);
      body.classList.remove(light);
      return themes.dark;
    });
  };

  const handleSettings = () => {
    setView(prevState => {
      switch (prevState.page) {
        case VIEWS.HOME:
          return {
            ...prevState,
            page: VIEWS.SETTINGS
          };
        case VIEWS.SETTINGS:
          return {
            ...prevState,
            page: VIEWS.HOME
          };
        default:
          return prevState;
      }
    });
  };

  const handlePin = () => {
    changeDomWidth(0);
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
            view.page === VIEWS.HOME ? <Icon.Settings size={15} /> : <Icon.Home size={15} />
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
