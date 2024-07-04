import { Result } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography';

const ResultSuccessfully = ({ leadingToHomepage, leadingToUserProfile }) => (
  <div className="center-container">
    <Result
      status="success"
      title={
        <SubHeading size={230} strong>
          Account Successfully Topped Up
        </SubHeading>
      }
      subTitle="Thank you for topping up your account. The transaction was successful, and your balance has been updated. We appreciate your trust in our platform."
      extra={[
        <>
          <div className="flex-btn">
            <BaseButton style={{ width: 'auto' }} type="primary" key="console" onClick={leadingToHomepage}>
              Back to home
            </BaseButton>
            <BaseButton style={{ width: 'auto' }} key="buy" onClick={leadingToUserProfile}>
              View your profile
            </BaseButton>
          </div>
        </>,
      ]}
    />
  </div>
);

export default ResultSuccessfully;
