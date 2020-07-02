import * as actions from './actions';
import {InferActionsTypes} from "../../../../store";

const initState = {
  skills: [
    {type: 'HTML', scale: 90},
    {type: 'CSS', scale: 80},
    {type: 'JavaScript', scale: 78},
    {type: 'React', scale: 76},
    {type: 'Redux', scale: 89},
    {type: 'TypeScript', scale: 65},
  ]
}

type TInitState = typeof initState;

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function skillsReducer (state = initState, action: TAction): TInitState {
  switch (action.type) {
    case 'about':
      return {
        ...state
      }
    default :
      return state;
  }
}

