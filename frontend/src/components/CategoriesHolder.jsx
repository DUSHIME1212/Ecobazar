import PropTypes from 'prop-types';

const CategoriesHolder = ({ imag, title }) => {
    
  return (
    <div className='w-full sm:w-1/2 md:w-1/4 lg:w-[16%] border-2 p-2 duration-700 text-center hover:border-green-500 rounded-xl mih-h-56'>
        <img src={imag} alt={title} className='w-full h-48 object-contain'/>
        <h2 className='text-lg font-bold'>{title}</h2>
    </div>
  );
}

CategoriesHolder.propTypes = {
  imag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CategoriesHolder;