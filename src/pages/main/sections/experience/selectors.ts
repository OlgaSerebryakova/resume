import { translateSelector } from '../../../../dictionary';
import {AppStateType} from "../../../../store";

export default function mapStateToProps(state: AppStateType) {
  return {
    translator: translateSelector(state.applicationReducer.localization),
    theme: state.applicationReducer.theme,
    localization: state.applicationReducer.localization
  }
}
