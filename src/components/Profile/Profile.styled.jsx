import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;
export const Description = styled.div`
  background-color: #dbc4db;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  -webkit-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
`;
export const User = styled.img`
  display: block;
  width: 200px;
  margin-top: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  line-height: 1.8;
  font-weight: 20px;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 18px;
`;
export const StatsList = styled.ul`
  background-color: #f2edf2;
  width: 400px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #444143;
  border-bottom: 1px solid #444143;
  :not(:last-child) {
    border-right: 1px solid #444143;
  }
  :last-child {
    border-right: 1px solid #444143;
  }
  :first-child {
    border-left: 1px solid #444143;
  }
`;
export const Label = styled.span`
  display: flex;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  justify-content: center;
`;
export const Quantity = styled.span`
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  font-weight: bold;
  margin: 6px auto;
`;
