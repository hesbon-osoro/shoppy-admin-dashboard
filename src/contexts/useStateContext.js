import { useContext } from 'react';
import { StateContext } from './StateContext';

export const useStateContext = () => useContext(StateContext);
