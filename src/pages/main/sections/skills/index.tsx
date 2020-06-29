import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../../../app/actions';
import Progress from '../../../../components/skillsBar/index';

import {
  Skills,
  SkillsContainer,
  SkillsTitle,
  SkillsWrapper
} from './style';


interface IProps {
  translator(key: string): string,
  changeLocationAction(): any,
  changeThemeAction(): any,
  theme: string,
  localization: string
}

type ISkills = Array<ISkillItem>

interface ISkillItem {
  type: string,
  scale: number
}

const skills: ISkills = [
  {type: 'HTML', scale: 90},
  {type: 'CSS', scale: 80},
  {type: 'JavaScript', scale: 78},
  {type: 'React', scale: 76},
  {type: 'Redux', scale: 89},
  {type: 'TypeScript', scale: 65},
]

const SkillsSection:React.FC<IProps> = (props) => {
  const { theme, translator } = props;
  return(
    <Skills id="skills">
      <SkillsWrapper theme={theme}>
        <SkillsTitle>{translator('menu:skills')}</SkillsTitle>
        <SkillsContainer theme={theme}>
          { skills.map((skill) => {
            return(
              <Progress key={Math.random()} theme={theme} skill={skill} />
              )
          })}
        </SkillsContainer>
      </SkillsWrapper>
    </Skills>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(SkillsSection);
