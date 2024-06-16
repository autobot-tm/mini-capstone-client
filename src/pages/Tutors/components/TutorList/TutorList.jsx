import { Fragment } from 'react';
import TutorCardRow from './components/TutorCardRow/TutorCardRow';
import './styles.scss';

const TutorList = ({ subjects = [] }) => {
  return (
    <>
      {subjects.map(item => {
        return (
          <Fragment key={item.id}>
            <TutorCardRow
              id={item.id}
              name={item.tutor.fullname}
              rating={item.tutor.rating}
              description={item.description}
              subject={item.name}
            />
          </Fragment>
        );
      })}
    </>
  );
};

export default TutorList;
