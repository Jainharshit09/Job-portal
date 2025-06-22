import React from 'react'
import TalentCard from '../FindTalent/TalentCard'
import { useParams } from 'react-router-dom';

const RecommendTalent = (props: any) => {
  const { id } = useParams();
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>
        Recommended Talent
      </div>
      <div
        className="
          flex flex-row overflow-x-auto gap-5 px-1
          sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0
          lg:grid-cols-1 lg:flex-col lg:gap-5
        "
        style={{ maxWidth: '100%' }}
      >
        {
          props?.talents?.map((talent: any, index: any) =>
            index < 4 && id !== talent.id ? (
              <div
                key={index}
                className="
                  min-w-[250px] max-w-[250px] sm:min-w-[300px] sm:max-w-[300px] 
                  w-full flex-shrink-0
                "
              >
                <TalentCard {...talent} />
              </div>
            ) : null
          )
        }
      </div>
    </div>
  )
}

export default RecommendTalent