import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-900 hover:bg-green-600 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 shadow-sm"
      >
        <ChevronLeft size={20}/>
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-medium transition-all shadow-sm ${
            currentPage === index + 1 
              ? 'bg-green-600 text-white shadow-green-100' 
              : 'bg-white text-gray-900 border border-gray-100 hover:border-green-600 hover:text-green-600'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-900 hover:bg-green-600 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 shadow-sm"
      >
        <ChevronRight size={20}/>
      </button>
    </div>
  );
};

export default Pagination;
