import styled from '@emotion/styled';

export const Table = styled.table`
  background-color: #f2edf2;
  width: 600px;
  margin: 0px auto;
  margin-bottom: 60px;
  padding: 20px;
  -webkit-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
`;
export const Header = styled.th`
  height: 50px;
  text-align: center;
  border: 1px solid #444143;
  background-color: #dbc4db;
  color: #000000;
  font-size: 15px;
  text-transform: uppercase;
`;
export const Data = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #444143;
`;
export const Row = styled.tr`
  :nth-of-type(even) {
    background-color: #fff;
    text-transform: uppercase;
  }
  :hover {
    cursor: pointer;
    background-color: #dbc4db;
  }
`;
