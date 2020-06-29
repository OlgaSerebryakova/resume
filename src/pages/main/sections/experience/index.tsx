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
  localization: string,
  experience: any
}

const ExperienceSection:React.FC<IProps> = (props) => {
  const { theme, experience, localization } = props;
  return(
      <Experience>
        <ExperienceContainer>
          <ShowUpAnimation>
            <ExperienceTitle>{experience[localization].title}</ExperienceTitle>
          </ShowUpAnimation>
          <Timeline theme={theme}>
            {experience[localization].experience.map((item: any) => {
              return(
                <ItemExperience
                  theme={theme}
                  iconType={item.iconType}
                  experiencePlace={item.place}
                  experienceDate={item.date}
                  experienceText={item.text} />
              )
            })}
          </Timeline>
        </ExperienceContainer>
      </Experience>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(ExperienceSection);
