import ReactPaginate from 'react-paginate'
import PaginationCss from './Pagination.module.scss'

interface IPaginationProps {
  itemsPerPage: number
  pageCount?: number
  onPaginationButtonClick: (page: number, limit: number) => void
}

const Pagination = ({
  itemsPerPage = 0,
  pageCount = 0,
  onPaginationButtonClick,
}: IPaginationProps) => {
  const onHandlePageClick = (event: { selected: number }) => {
    const activePage = event.selected + 1
    onPaginationButtonClick(activePage, itemsPerPage)
  }

  return (
    <ReactPaginate
      onPageChange={onHandlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={()=>{}}
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
