import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Utilites from '../../Services/Utilites';

const PostedJobCard = (props: any) => {
  const { id } = useParams();
  const isActive = props.id ? Number(props.id) === Number(id) : false;

  return (
    <Link
      to={props.id ? `/posted-job/${props.id}` : '#'}
      className={`rounded-xl p-2 border-l-4 border-l-mine-shaft-100 ${
        isActive ? 'bg-mine-shaft-950 text-bright-sun-400' : 'bg-bright-sun-400 text-mine-shaft-950'
      }`}
    >
      <div className="text-sm">{props.jobTitle || 'Untitled Job'}</div>
      <div className="text-xs font-medium">{props.location || 'Unknown Location'}</div>
      <div className="text-xs">
        {props.jobStatus === 'DRAFT' ? 'Drafted' : props.jobStatus === 'CLOSED' ? 'Closed' : 'Posted'}{' '}
        {props.postTime ? Utilites.timeAgo(props.postTime) : ''}
      </div>
    </Link>
  );
};

export default PostedJobCard;
