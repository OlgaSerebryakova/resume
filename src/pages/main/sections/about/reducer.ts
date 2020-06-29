import React from "react";
import * as actions from './actions';
import {InferActionsTypes} from "../../../../store";

const initState = {
  ru: {
    info: {
      title_first_name: 'Имя',
      title_last_name: 'Фамилия',
      title_address: ' Адрес',
      title_birthday: 'День рождения',
      title_email: 'E-mail',
      title_tel: 'Телефон',
      first_name: 'Ольга',
      last_name: 'Серебрякова',
      address: 'Москва',
      birthday: '15.06.1991',
      tel: '8-917-519-68-00',
      email: 'lelka-7770@yandex.ru'
    },
  },
  en: {
    info: {
      title_first_name: 'First name',
      title_last_name: 'Last name',
      title_address: 'Address',
      title_birthday: 'Birthday',
      title_email: 'E-mail',
      title_tel: 'Telephone',
      first_name: 'Olga',
      last_name: 'Serebryakova',
      address: 'Moscow',
      birthday: '15.06.1991',
      tel: '8-917-519-68-00',
      email: 'lelka-7770@yandex.ru'
    },
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