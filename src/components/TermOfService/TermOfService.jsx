import { useDispatch, useSelector } from 'react-redux';
import BaseButton from '../Buttons/BaseButtons/BaseButton';
import CustomModal from '../Modal/CustomModal';
import { Caption } from '../Typography/Caption/Caption';
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { closeTermOfServiceModal } from '../../store/features/modal.slice';

const TermOfService = () => {
  const dispatch = useDispatch();
  const { termOfServiceModal } = useSelector(state => state.modal);
  const [checkTerms, setCheckTerms] = useState(false);

  const handleCancel = () => {
    dispatch(closeTermOfServiceModal());
    setCheckTerms(false);
  };
  const handleOk = async () => {
    setCheckTerms(false);
  };
  const handleCheckedTerms = e => {
    const isChecked = e.target.checked;
    setCheckTerms(isChecked);
  };
  const handleAgree = () => {
    if (checkTerms) {
      handleOk();
      dispatch(closeTermOfServiceModal());
    }
  };
  useEffect(() => {
    if (termOfServiceModal) setCheckTerms(false);
  }, [termOfServiceModal]);

  return (
    <>
      <CustomModal
        width={500}
        nameOfModal={termOfServiceModal}
        title="Term Of Service"
        action={closeTermOfServiceModal}
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BaseButton style={{ width: 'auto', color: 'black' }} type="text" onClick={handleCancel}>
              CANCEL
            </BaseButton>
            <BaseButton style={{ width: 'auto' }} type="primary" onClick={handleAgree}>
              OK
            </BaseButton>
          </div>
        }>
        <div style={{ paddingBottom: 20 }}>
          <Caption>
            Welcome to On Demand Tutor. By signing up and providing tutoring services on our platform, you agree to
            comply with and be bound by the following terms and conditions. Please read them carefully.
            <br />
            <b>Responsibilities</b>
            <ul>
              <li>
                You agree to provide accurate and truthful information about your qualifications, experience, and
                expertise.
              </li>
              <li>You will conduct all tutoring sessions in a professional and respectful manner.</li>
              <li>
                You will prepare adequately for each session and provide the best possible educational experience for
                your students.
              </li>
              <li>You agree not to engage in any form of harassment, discrimination, or inappropriate behavior.</li>
            </ul>
          </Caption>
          <Checkbox onChange={handleCheckedTerms}>
            <Caption classNames="d-block">I agree to the terms & service</Caption>
          </Checkbox>
        </div>
      </CustomModal>
    </>
  );
};

export default TermOfService;
