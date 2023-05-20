import PropTypes from 'prop-types';
import { Table, Header, Data, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
