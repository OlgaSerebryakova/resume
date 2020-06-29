import * as actions from './actions';
import {InferActionsTypes} from "../../../../store";

const initState = {
  ru: {
    title: 'Опыт работы и образование',
    experience: [
      {place: 'Газпромбанк',
        date: 'Ноябрь 2019 — апрель 2020',
        text: `Финансы и кредит.
Бухгалтерский учет, анализ и аудит.`,
        iconType: 'job'},

      {place: 'Frontend school Газпромбанк',
        date: 'Август - октябрь 2019',
        text: `Изучение JS, React, Redux`,
        iconType: 'study'},

      {place: 'JavaScript.ru',
        date: 'Март — май 2019',
        text: `Курс "JavaScript/​DOM/​Интерфейсы"`,
        iconType: 'study'},

      {place: 'Роснефть',
        date: 'Август 2013-2020',
        text: `2013 - 2017 PH-Учет - Ведущий бухгалтер
2017 - 2020 ПАО "НК-"Роснефть" - Специалист Управления делами`,
        iconType: 'job'},

      {place: 'МЭСИ',
        date: '2008-2013',
        text: `Финансы и кредит.
Бухгалтерский учет, анализ и аудит`,
        iconType: 'study'}
    ]
  },
  en: {
    title: 'Experience & Education ',
    experience: [
      {place: 'Gazprombank',
        date: 'November 2019 — April 2020',
        text: `Finance and credit.
Accounting, analysis and audit.`},

      {place: 'Frontend school Gazprombank',
        date: 'August - October 2019',
        text: `Learning JS, React, Redux`},

      {place: 'JavaScript.ru',
        date: 'March — may 2019',
        text: `The course "JavaScript/DOM/​Interfaces"`},

      {place: 'Rosneft',
        date: 'August 2013-2020',
        text: `2013-2017 RN-Uchet - Lead accountant
2017-2020 Rosneft Oil Company - Expert of Administrative department`},

      {place: 'MESI',
        date: '2008-2013',
        text: `Finance and credit.
Accounting, analysis and audit`},
    ],
    contacts: {
      text: `If you have any suggestion, question or even you want to say Hello.. 
Please you can call me or push me a message and I will reply you shortly.`,
      title_address: 'Address',
      address: 'Moscow',
      title_tel: 'Telephone'
    }
  }
}

type TInitState = typeof initState;

export type TAction = ReturnType<InferActionsTypes<typeof actions>>

export default function experienceReducer (state = initState, action: TAction): TInitState {
  switch (action.type) {
    case 'about':
      return {
        ...state
      }
    default :
      return state;
  }
}

