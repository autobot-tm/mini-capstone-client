import { Result } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { Caption, SubHeading } from '../../../../components/Typography';
const ResultFailed = ({ leadingToHomepage, leadingToUserProfile }) => (
  <div className="center-container">
    <Result
      status="error"
      title={
        <SubHeading size={230} strong>
          Payment Failed
        </SubHeading>
      }
      subTitle={
        <Caption size={140}>
          We encountered an error with your transaction. Please attempt the payment again or contact support.
        </Caption>
      }
      extra={[
        <>
          <div className="flex-btn">
            <BaseButton style={{ width: 'auto' }} type="primary" onClick={leadingToHomepage}>
              Back to Homepage
            </BaseButton>
            <BaseButton style={{ width: 'auto' }} onClick={leadingToUserProfile}>
              View your profile
            </BaseButton>
          </div>
        </>,
      ]}></Result>
  </div>
);

export default ResultFailed;
