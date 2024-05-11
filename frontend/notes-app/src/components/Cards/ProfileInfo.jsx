import { getInitials } from "../../utils/helper";
import PropTypes from 'prop-types'
const ProfileInfo = ({  userInfo ,onLogout}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
      {getInitials(userInfo.fullName)}
      </div>

      <div className="">
        <p className="text-sm font-medium capitalize hidden md:block">{userInfo.fullName}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

ProfileInfo.propTypes={
    onLogout:PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
      fullName: PropTypes.string.isRequired 
    }).isRequired,
}

export default ProfileInfo;
