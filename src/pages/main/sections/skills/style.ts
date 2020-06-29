import styled from 'styled-components';

export const Skills = styled.section`
  display: flex;
  justify-content: center;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 2px solid rgba(28,45,87,.3);
`;

export const SkillsTitle = styled.h3`
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  
  @media only screen and (max-width: 810px)  {
    grid-template-columns: 1fr;
    align-item: center;
    justify-content: center;
    grid-gap: 15px;
  };
`;