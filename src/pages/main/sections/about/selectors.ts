import { translateSelector } from '../../../../dictionary';
import {AppStateType} from "../../../../store";

export default function mapStateToProps(state: AppStateType) {
  return {
    translator: translateSelector(state.applicationReducer.localization),
    theme: state.applicationReducer.theme,
    localization: state.applicationReducer.localization,
    transfer: translateState(state.applicationReducer.localization, state.aboutReducer),
    about: state.aboutReducer
  }
}

export const translateState = (localization: 'ru' | 'en', initState: any) => (key: string) => {
  const keys: string[] = key.split(':');
  const targetDictionary: any = initState[localization];

  return keys.reduce((result: any, item: string, index: number) => {
    if (item in result) {
      return result[item];
    } else {
      console.warn(`Ошибка перевода "${key}". Поле "${item}" отстутсвует в "dictionary.${localization}.${keys.slice(0, index)}"`);
      return key;
    }
  }, targetDictionary);
}