import { Fragment, useState } from 'react';
import TutorCardRow from './components/TutorCardRow/TutorCardRow';
import { Pagination } from 'antd';
import './styles.scss';

const TutorList = ({ tutors = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentTutors = tutors.slice(startIndex, endIndex);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentTutors.map(item => {
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
      <div className="pagination">
        <Pagination
          current={currentPage}
          total={tutors.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default TutorList;
