import { Tabs } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import PostedJobCard from './PostedJobCard';

const PostedJobs = (props: any) => {
  const [activeTab, setActiveTab] = useState<string | null>('ACTIVE');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(props.job?.jobStatus || 'ACTIVE');
  }, [props.job]);

  return (
    <div className="w-1/5 mt-4">
      <div className="text-2xl font-semibold mb-5 mt-5">Jobs</div>
      <div>
        <Tabs variant="pills" value={activeTab} onChange={setActiveTab}>
          <Tabs.List className="[&_button[aria-selected='false']] font-medium">
            <Tabs.Tab value="ACTIVE">
              Active [{props.jobList?.filter((job: any) => job?.jobStatus === 'ACTIVE').length || 0}]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT">
              Drafts [{props.jobList?.filter((job: any) => job?.jobStatus === 'DRAFT').length || 0}]
            </Tabs.Tab>
            <Tabs.Tab value="CLOSED">
              Close [{props.jobList?.filter((job: any) => job?.jobStatus === 'CLOSED').length || 0}]
            </Tabs.Tab>
          </Tabs.List>

          <div className="flex flex-col p-3 mt-3 gap-5">
            {props.jobList?.length > 0 ? (
              props.jobList
                .filter((job: any) => job?.jobStatus === activeTab)
                .map((item: any, index: number) =>
                  item.id ? <PostedJobCard key={index} {...item} /> : null
                )
            ) : (
              <div className="text-center text-gray-500">No jobs available</div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobs;
