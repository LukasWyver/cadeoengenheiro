import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({ postsPerPage, totalPosts, paginate, previousPage, nextPage, activePage, maxPageLimit = 5, minPageLimit = 0}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i);
  }

  const pageNumbers = pages.map(number => {
    if(number ) {
        return(
          <li
            key={number}
            onClick={() =>  paginate(number)}
            className={`${activePage === number ? 'bg-primary text-white': 'bg-white text-body hover:text-primary'} p-4 font-medium`}
          >
            {number}
          </li>
        );
    } else {
        return null;
    }
}

);

  return (
      <nav className="">
        <ul className="flex items-center justify-center gap-2 [&>li]:cursor-pointer [&>li]:h-10 [&>li]:w-10 [&>li]:rounded-lg [&>li]:border [&>li:hover]:border-primary [&>li]:border-body/20 [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li]:transition-colors [&>li]:duration-300">

          <li  onClick={previousPage} className="bg-white group">
            <FiChevronLeft className="stroke-body/60 group-hover:stroke-primary" size={22}/>
          </li>

          {pageNumbers}

          <li  onClick={nextPage} className="bg-white group">
            <FiChevronRight className="stroke-body/60 group-hover:stroke-primary" size={22}/>
          </li>
        </ul>
      </nav>
    )
  }

export default Pagination;
