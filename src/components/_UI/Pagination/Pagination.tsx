import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  itemsPerPage?: number
  pageCount?: number
  fetchPage?: ()=> void
}

const Pagination = ({
  itemsPerPage,
  pageCount = 0,
  fetchPage,
}: IPaginationProps) => {
  const onHandlePageClick = (event: { selected: number; }) => {
    const activePage = event.selected;
    console.log(activePage);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onHandlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
