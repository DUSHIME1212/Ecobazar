import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center my-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 hover:bg-transparent mx-1 bg-transparent text-black disabled:opacity-50"
      >
        <ArrowLeft size={12}/>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-500 text-green-700' : 'bg-gray-300'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 hover:bg-transparent mx-1 bg-transparent text-black disabled:opacity-90"
      >
        <ArrowRight size={12}/>
      </button>
    </div>
  );
};

export default Pagination;
