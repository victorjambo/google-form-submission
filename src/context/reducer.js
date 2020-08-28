import { FIELD_DEFAULTS } from '../utils/formFields';

export const RESET = 'RESET';
export const REINITIALISE = 'REINITIALISE';

export const reducer = (state, action) => {
  if (action.type === RESET) {
    return FIELD_DEFAULTS;
  }

  if (action.type === REINITIALISE) {
    return action.fieldDefaults;
  }

  const result = { ...state };
  result[action.type] = action.value;
  return result;
};
