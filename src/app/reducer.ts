import { InferActionsTypes } from '../store';
import * as actions from './actions';

const initState: any = {
  localization: 'ru',
  theme: 'light'
};

type initStateType = typeof initState;
export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function applicationReducer(state = initState, action: TAction):initStateType {
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
