import styled from 'styled-components';

export const IconTimeline = styled.div`
  height: 40px;
  width: auto;
  z-index: 1;
  position: absolute;
  top: 5em;
  content: '';
  display: block;
  
  :before {
    position: absolute;
    content: '';
    display: block;
    height: 2px;
    width: 55px;
    top: 50%;
    background-color: ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
  }
  
  :after {
    position: absolute;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 6px ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};;
    top: 50%;
    background-color: ${props => props.theme === 'light' ? 'white' : '#053649'};
  }
  
  svg {
    fill:  ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'}; 
  }
`;

export const ItemTineLine = styled.li`
  width: 50%;
  position: relative;
  padding: 1.5em 0;
  
  :nth-child(odd) {
    left: 50%;
    padding-left: 40px;
    
    :before {
      left: -20px;
    }
    
    :after {
      left: -23px;
    }
    
    ${IconTimeline} {
      left: 0;
      transform: translateY(-50%) translateX(-100%) translateX(-61px);
      
      :before {
        left: 100%;
        margin-left: 5px;
      }
      
      :after {
        margin-left: 0;
        transform: translateY(-50%) translateX(-50%) translateX(61px);
        left: 100%;
      }
    }
  }
  
  :nth-child(even) {
    padding-right: 40px;
    text-align: right;
    
    :before {
      right: -20px;
    }
    
    :after {
      right: -23px;
    }
    
    ${IconTimeline} {
      right: 0;
      transform: translateY(-50%) translateX(100%) translateX(61px);
      
      :before {
        right: 100%;
        margin-right: 5px;
      }
      
      :after {
        margin-right: 0;
        transform: translateY(-50%) translateX(50%) translateX(-61px);
        right: 100%;
      }
    }
     
  }
  
  :before {
    content: '';
    display: block;
    background-color: ${props => props.theme === 'light' ? 'white' : '#053649'};
    position: absolute;
    top: 5rem;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    box-shadow: 0 0 0 2px ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
    transform: translateY(-50%);
  }
  
  :after {
    position: absolute;
    top: 5rem;
    transform: translateY(-50%);
    content: '';
    display: block;
    background-color: ${props => props.theme === 'light' ? 'white' : '#053649'};
    width: 22px;
    height: 44px;
  }
`;


export const ItemText = styled.div`
  white-space: pre-wrap;
  color: ${props => props.theme === 'light' ? '#2E2999' : 'white'};
  
  h3 {
    font-size: 18px;
  }
  
  h4 {
    font-size: 16px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5rem;
  }
  
  @media only screen and (max-width: 500px) {
    h3 {
        font-size: 13px;
    }
  
    h4 {
     font-size: 12px;
    }
      
    p {
      font-size: 12px;
      line-height: 1rem;
    }
  };
`;






