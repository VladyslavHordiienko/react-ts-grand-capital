import React from 'react';
import classNames from "classnames";
import uniqid from "uniqid";

type propTypes = {
    pageNumbers:number[]
    lastPage:number
    currentPage: number
    paginate: (number: number) => void
}

const Pagination: React.FC<propTypes> = ({pageNumbers,lastPage, currentPage, paginate}) => {


            return (
                <div className="catalog__pagination">
                <span
                    onClick={() => paginate(currentPage - 1)}
                    className={classNames("catalog__pagination-arrow prev", {'inactive': currentPage === 1})}
                >
                  <svg className="icon">
                    <use xlinkHref="#arrow-icon"></use>
                  </svg>
                </span>
                    {pageNumbers.map(number => (
                        <div
                            key={uniqid()}
                            onClick={() => paginate(number)}
                            className={classNames("catalog__pagination-item", {'catalog__pagination-current': currentPage === number})}
                        >
                            {number}
                        </div>
                    ))}
                    <span
                        onClick={() => paginate(currentPage + 1)}
                        className={classNames("catalog__pagination-arrow next", {'inactive': currentPage === lastPage})}
                    >
                  <svg className="icon">
                    <use xlinkHref="#arrow-icon"></use>
                  </svg>
                </span>
                </div>
            );
    };

export default Pagination;