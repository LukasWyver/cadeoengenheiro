function PaginationItem({ isCurrent = false, number, onPageChange }) {
  if (isCurrent) {
    return (
      <button
        className={`bg-gradient-to-t to-primary/75  from-primary text-white font-medium w-10 h-10 rounded-lg p-4 flex items-center justify-center`}
      >
        {number}
      </button>
    )
  }

  return (
    <button
      className={`drop-shadow-md bg-white text-body border border-body/10 hover:text-primary font-medium w-10 h-10 rounded-lg p-4 flex items-center justify-center`}
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  )
}


export default PaginationItem;
