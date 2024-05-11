import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types'

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-52 md:w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-slate-500 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};


SearchBar.propTypes={
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  handleSearch:PropTypes.func.isRequired,
  onClearSearch:PropTypes.func.isRequired
}
export default SearchBar;
