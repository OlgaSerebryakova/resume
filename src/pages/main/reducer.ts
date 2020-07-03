import * as actions from './actions';
import {InferActionsTypes} from "../../store";

interface IInitState {
  ru: {
    [key: string]: any;
  },
  en: {
    [key: string]: any;
  }
}

const initState = {
  ru: {
    title: {
      hello: 'Привет!',
      head: 'Я',
      name: 'Ольга Серебрякова',
      frontendDeveloper: 'frontend разработчик'
    }
  },
  en: {
    title: {
      hello: 'Hello!',
      head: "I'm",
      name: 'Olga Serebryakova',
      frontendDeveloper: 'a frontend developer'
    }
  }
}

// type TInitState = typeof initState;

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function mainReducer (state = initState, action: TAction): IInitState {
  switch (action.type) {
    case 'about':
      return {
        ...state
      }
    default :
      return state;
  }
}

