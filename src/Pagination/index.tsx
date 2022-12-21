import React from 'react';
import styles from './styles.module.css';

export const Pagination = ({
  numOfPagination,
  paginationView,
  setPaginationView,
  limit,
}: {
  numOfPagination: number;
  paginationView: number;
  setPaginationView: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}) => {
  let arrPagination: number[] = [];
  for (var i = 1; i <= numOfPagination; i++) {
    arrPagination.push(i);
  }
  const handleClick = (event: any): void => {
    setPaginationView(Number(event.target.value));
  };
  const handleNextPrev = (isPrev: boolean) => {
    if (paginationView > 0 && isPrev) {
      setPaginationView(paginationView - 1);
    } else if (!isPrev && paginationView < limit - 1) {
      setPaginationView(paginationView + 1);
    }
  };
  return (
    <>
      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationButton}
          onClick={() => handleNextPrev(true)}
        >
          &lt;
        </button>
        {arrPagination.map((num) => (
          <button
            key={num}
            className={styles.paginationButton}
            value={num - 1}
            onClick={handleClick}
          >
            {num}
          </button>
        ))}
        <button
          className={styles.paginationButton}
          onClick={() => handleNextPrev(false)}
        >
          &gt;
        </button>
      </div>
    </>
  );
};
