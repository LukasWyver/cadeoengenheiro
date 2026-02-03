import PaginationItem from "./PaginationItem"

const siblingsCount = 1

function generatePagesArray(from, to) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}) {

   const handlePageChange = (page) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  // const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); //  arredondado para baixo
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage) // arredondado para cima

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <div className="flex items-center gap-4">
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem onPageChange={handlePageChange} number={1} />
          {currentPage > 2 + siblingsCount && (
            <span className="bg-white text-body hover:text-primary font-medium w-10 h-10 rounded-lg p-4 flex items-center justify-center">
              ...
            </span>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map(page => {
          return (
            <PaginationItem
              onPageChange={handlePageChange}
              key={page}
              number={page}
            />
          )
        })}

      <PaginationItem
        onPageChange={handlePageChange}
        number={currentPage}
        isCurrent
      />

      {nextPages.length > 0 &&
        nextPages.map(page => {
          return (
            <PaginationItem
              onPageChange={handlePageChange}
              key={page}
              number={page}
            />
          )
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <span className="bg-white text-body hover:text-primary font-medium w-10 h-10 rounded-lg p-4 flex items-center justify-center">
              ...
            </span>
          )}
          <PaginationItem onPageChange={handlePageChange} number={lastPage} />
        </>
      )}
    </div>
  )
}

export default Pagination;
