import { Fragment } from 'react';
import TutorCardRow from './components/TutorCardRow/TutorCardRow';
import './styles.scss';

const TutorList = ({ tutors = [] }) => {
  return (
    <>
      {tutors.map(item => {
        return (
          <Fragment key={item.id}>
            <TutorCardRow
              id={item.id}
              name={item.fullname}
              eduLevel={item.educationLevel}
              brief={item.brief}
              subject={item.subjects}
              video={item.tutorVideos}
              schedule={item.scheduleRecords}
            />
          </Fragment>
        );
      })}
    </>
  );
};

export default TutorList;
