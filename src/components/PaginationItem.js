function PaginationItem({ isCurrent = false, number, onPageChange }) {
  return (
      <button
      type="button"
      disabled={isCurrent}
      aria-current={isCurrent ? "page" : undefined}
      aria-label={`Ir para a página ${number}`}
      onClick={() => !isCurrent && onPageChange(number)}
      className={`
        font-medium w-10 h-10 rounded-lg p-4 flex items-center justify-center
        ${isCurrent
          ? "bg-gradient-to-t to-primary/75 from-primary text-white cursor-default"
          : "drop-shadow-md bg-white text-body border border-body/10 hover:text-primary"
        }
      `}
    >
      {number}
    </button>
  )
}


export default PaginationItem;
