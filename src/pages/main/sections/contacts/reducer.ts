import * as actions from './actions';
import {InferActionsTypes} from "../../../../store";


const initState = {
  ru: {
    text: `У вас возникли вопросы, предложения или вы просто хотите сказать Привет..
Вы можете позвонить мне или отправть сообщение и я отвечу Вам в ближайшее время.`,
    title_address: 'Адресс',
    address: 'Москва',
    title_tel: 'Телефон'
  },
  en: {
    text: `If you have any suggestion, question or even you want to say Hello.. 
Please you can call me or push me a message and I will reply you shortly.`,
    title_address: 'Address',
    address: 'Moscow',
    title_tel: 'Telephone'
  }
}

type TInitState = typeof initState;

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function contactsReducer (state = initState, action: TAction): TInitState {
  switch (action.type) {
    case 'about':
      return {
        ...state
      }
    default :
      return state;
  }
}

