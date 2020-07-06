import { InferActionsTypes } from '../store';
import * as actions from './actions';

interface IInitState {
  localization: 'ru' | 'en',
  theme: 'light' | 'dark'
}

const initState: IInitState = {
  localization: 'ru',
  theme: 'light'
};

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function applicationReducer(state = initState, action: TAction):IInitState {
  switch (action.type) {
    case 'APPLICATION_CHANGE_LOCALIZATION':
      return {
        ...state,
        localization: state.localization === 'ru' ? 'en' : 'ru'
      }
    case 'APPLICATION_CHANGE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return state;
  }
}
