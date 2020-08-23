import React from 'react';
import * as Icon from 'react-feather';

const Header = () => (
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
      <Icon.Settings size={15} />
      <Icon.Sun size={15} />
      <Icon.Moon size={15} />
      <Icon.Eye size={15} />
      <Icon.EyeOff size={15} />
    </div>
  </div>
);

export default Header;
