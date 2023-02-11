import ReactPaginate from 'react-paginate'
import PaginationCss from './Pagination.module.scss'

interface IPaginationProps {
  itemsPerPage?: number
  pageCount?: number
  fetchPage?: () => void
}

const Pagination = ({
  itemsPerPage,
  pageCount = 0,
  fetchPage,
}: IPaginationProps) => {
  const onHandlePageClick = (event: { selected: number }) => {
    const activePage = event.selected
    console.log(activePage)
  }

  return (
    <ReactPaginate
      onPageChange={onHandlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName={PaginationCss.wrapper}
      previousLinkClassName={PaginationCss.previousBtn}
      nextLinkClassName={PaginationCss.nextBtn}
      disabledClassName={PaginationCss.disabled}
      activeClassName={PaginationCss.active}
      previousLabel="назад"
      nextLabel="далее"
    />
  )
}

export default Pagination
