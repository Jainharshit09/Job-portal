import React from 'react'

const PostedJobCard = (props:any) => {
  return (
    <div className="bg-bright-sun-400 rounded-xl p-2 border-l-4 border-l-mine-shaft-100">
        <div className='text-sm text-mine-shaft-950'>
            {props.jobTitle}
        </div>
        <div className='text-xs text-mine-shaft-900 font-medium'>
            {props.location}
        </div>
        <div className='text-xs text-mine-shaft-900'>
            {props.posted}
        </div>
    </div>
  )
}

export default PostedJobCard