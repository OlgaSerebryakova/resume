import * as actions from './actions';
import {InferActionsTypes} from "../../../../store";

const initState = {
  ru: {
    info: [
      {title: 'Имя', content: 'Ольга'},
      {title: 'Фамилия', content: 'Серебрякова'},
      {title: 'День рождения', content: '15.06.1991'},
      {title: 'Адрес', content: 'Москва'},
      {title: 'E-mail', content: 'lelka-7770@yandex.ru'},
      {title: 'Телефон', content: '8-917-519-68-00'},
    ],
    about: {
      text: `Я начинающий JavaScript разработчик и имею большое желание развиваться в сфере фронтенда.
                          Oкончила курсы Front-end school Газпромбанка, затем проходила там стажировку.
                          Активно занимаюсь самообразованием. `
    }
  },
  en: {
    info: [
      {title: 'First name', content: 'Olga'},
      {title: 'Last name', content: 'Serebryakova'},
      {title: 'Birthday', content: '15.06.1991'},
      {title: 'Address', content: 'Moscow'},
      {title: 'E-mail', content: 'lelka-7770@yandex.ru'},
      {title: 'Telephone', content: '8-917-519-68-00'}
    ],
    about: {
      text: `I am a novice JavaScript developer and have a great desire to develop in the field of frontend. 
                          I graduated from Gazprombank's Front-end school and then did an internship there.
                          I am actively involved in self-education. `
    }
  }
}

type TInitState = typeof initState;

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function aboutReducer (state = initState, action: TAction): TInitState {
  switch (action.type) {
    case 'about':
      return {
        ...state
      }
    default :
      return state;
  }
}

