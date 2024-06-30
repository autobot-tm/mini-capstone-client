import { useDispatch, useSelector } from 'react-redux';
import BaseButton from '../Buttons/BaseButtons/BaseButton';
import CustomModal from '../Modal/CustomModal';
import { Caption } from '../Typography/Caption/Caption';
import { Checkbox, notification } from 'antd';
import { useEffect, useState } from 'react';
import { closeTermOfServiceModal } from '../../store/features/modal.slice';
import { upRoleTutorService } from '../../services/apis/auth.service';
import FileUploader from '../FileUploader/FileUploader';
import { getUserProfile, useUserSlice } from '../../store/features/user.slice';

const TermOfService = () => {
  const dispatch = useDispatch();
  const { termOfServiceModal } = useSelector(state => state.modal);
  const { actions: userActions } = useUserSlice();
  const [uploadedCertificateUrl, setUploadedCertificateUrl] = useState(null);
  const [checkTerms, setCheckTerms] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleCancel = () => {
    dispatch(closeTermOfServiceModal());
    setCheckTerms(false);
    setUploadedCertificateUrl(null);
  };
  const handleOk = async () => {
    if (!uploadedCertificateUrl) {
      api.error({
        type: 'error',
        message: 'Please upload your certificate.',
      });
      return;
    }
    try {
      await upRoleTutorService({ certificateUrl: uploadedCertificateUrl });
      api.success({
        message: 'Your certificate upload successful',
        description: 'Please allow 24 hours for us to review!',
        type: 'success',
      });
      dispatch(getUserProfile());
    } catch (error) {
      console.log('error', error);
    } finally {
      setCheckTerms(false);
      setUploadedCertificateUrl(null);
      dispatch(userActions.clearSuccess());
      dispatch(userActions.clearError());
    }
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
  const handleUploadSuccess = url => {
    console.log('Uploaded file URL:', url);
    setUploadedCertificateUrl(url);
  };
  const handleDeleteSuccess = url => {
    setUploadedCertificateUrl(null);
    console.log('delete certificate success', url);
  };
  useEffect(() => {
    if (termOfServiceModal) setCheckTerms(false);
  }, [termOfServiceModal]);

  return (
    <>
      {contextHolder}
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
              <li>
                You must upload a valid certificate of your qualifications. This is required to complete your
                registration as a tutor.
              </li>
            </ul>
          </Caption>
          <Caption>Please upload your certificate to proceed:</Caption>
          <FileUploader
            storagePath="tutorCertificate/"
            onUploadSuccess={handleUploadSuccess}
            onDeleteSuccess={handleDeleteSuccess}
            limit={1}
          />
          <Checkbox style={{ paddingBottom: 20 }} onChange={handleCheckedTerms}>
            <Caption classNames="d-block">I agree to the terms & service</Caption>
          </Checkbox>
        </div>
      </CustomModal>
    </>
  );
};

export default TermOfService;
