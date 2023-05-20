import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  margin: 0px auto;
  margin-bottom: 80px;
  -webkit-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  background-color: #f2edf2;
  color: #fff;
`;
export const Title = styled.h2`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;
export const Percentage = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
`;
