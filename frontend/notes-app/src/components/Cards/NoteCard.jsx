import PropTypes from 'prop-types';
import {MdOutlinePushPin ,MdCreate,MdDelete} from 'react-icons/md'
import moment from 'moment';
import React from 'react';

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {

  return (
    <div className='border rounded p-4 mx-5 md:mx-0 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className="flex items-center justify-between">
            <div className="">
                <h6 className="text-sm font-medium">{title}</h6>
                <span className="text-xs text-slate-500">{moment(date).format('Do MMM YYYY')}</span>
            </div>
            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote}/>

        </div>
        <p className='text-xs text-slate-600 mt-2'>{content?.slice(0,60)}</p>


        <div className='flex items-center justify-between mt-2'>
        <div className="text-xs">
  {tags && tags.map((tag, index) => (
    <React.Fragment key={index}>
      {index > 0 && ' '}
      #{tag}
    </React.Fragment>
  ))}
</div>


            <div className="flex">
                <MdCreate
                className='icon-btn hover:text-green-600 cursor-pointer'
                onClick={onEdit}
                />
                <MdDelete 
                className='icon-btn hover:text-red-500 cursor-pointer'
                onClick={onDelete}/>
            </div>
        </div>
    </div>
)
};

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array,
  isPinned: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onPinNote: PropTypes.func.isRequired,
};

export default NoteCard;
