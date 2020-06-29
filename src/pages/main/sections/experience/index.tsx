import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../../../app/actions';
import ItemExperience from '../../../../components/blok-experience/index';
import ShowUpAnimation from "../../../../components/showUpAnimation";

import {
  Experience,
  ExperienceContainer,
  ExperienceTitle,
  Timeline,
} from './style';



interface IProps {
  translator(key: string): string;
  changeLocationAction(): any;
  changeThemeAction(): any;
  theme: string;
  localization: string
}

const ExperienceSection:React.FC<IProps> = (props) => {
  const { theme, translator } = props;
  return(
      <Experience>
        <ExperienceContainer>
          <ShowUpAnimation>
            <ExperienceTitle>{translator('experience:title')}</ExperienceTitle>
          </ShowUpAnimation>
          <Timeline theme={theme}>
            <ItemExperience
              theme={theme}
              iconType='job'
              experiencePlace={translator('experience:experiencePlace_Gazprom')}
              experienceDate={translator('experience:experienceDate_Gazprom')}
              experienceText={translator('experience:experienceText_Gazprom')} />
            <ItemExperience
              theme={theme}
              iconType='study'
              experiencePlace={translator('experience:experiencePlace_Frontend_school')}
              experienceDate={translator('experience:experienceDate_Frontend_school')}
              experienceText={translator('experience:experienceText_Frontend_school')} />
            <ItemExperience
              theme={theme}
              iconType='study'
              experiencePlace={translator('experience:experiencePlace_JavaScript')}
              experienceDate={translator('experience:experienceDate_JavaScript')}
              experienceText={translator('experience:experienceText_JavaScript')} />
            <ItemExperience
              theme={theme}
              iconType='study'
              experiencePlace={translator('experience:experiencePlace_Rosneft')}
              experienceDate={translator('experience:experienceDate_Rosneft')}
              experienceText={translator('experience:experienceText_Rosneft')} />
            <ItemExperience
              theme={theme}
              iconType='study'
              experiencePlace={translator('experience:experiencePlace_MESI')}
              experienceDate={translator('experience:experienceDate_MESI')}
              experienceText={translator('experience:experienceText_MESI')} />
          </Timeline>
        </ExperienceContainer>
      </Experience>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(ExperienceSection);
