import Logo from "../../assets/logo.png";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate, Link } from "react-router-dom";
import Search from "../Search/SearchBar";
import { useState } from "react";
import PropTypes from 'prop-types';

const Navbar = ({userInfo ,onSearchNote,handleClearSearch}) => {

  const [searchQuery,setSearchQuery]=useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  const handleSearch=()=>{
if(searchQuery){
  onSearchNote(searchQuery)
}
  }
  const onClearSearch=()=>{
    setSearchQuery("")
    handleClearSearch();
  }
  return (
    <div className="bg-white fixed w-full top-0 md:relative flex items-center justify-between gap-5 md:gap-0 px-4 md:px-6 py-2 drop-shadow">
      <Link to="/dashboard">
        {" "}
        <img src={Logo} alt="QuickNotes" className="py-2 h-20 cursor-pointer" />
      </Link>

      <Search value={searchQuery} onChange={({target})=>{
        setSearchQuery(target.value)
      }}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}/>
    {userInfo && userInfo.fullName && (
  <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
)}


    </div>
  );
};

Navbar.propTypes = {
  userInfo: PropTypes.object,
  onSearchNote:PropTypes.func,
  handleClearSearch:PropTypes.func
};
export default Navbar;
