import React, { useEffect, useState } from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import jobService from '../../Services/JobService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../Slice/FilterSlice';
import { resetSort } from '../../Slice/SortSlice';

const Jobs = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.filter);
  const [filteredJobs, setFilteredJobs] = useState<any>([]);
  const sort= useSelector((state: any) => state.sort);
  const [jobList, setJobList] = useState([{}]);

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort());
    jobService.getAllJobs()
      .then((res) => {
        setJobList(res.filter((job: any) => job.jobStatus === "ACTIVE"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    if (sort === "Most Recent") {
      setJobList((prevState: any) =>
        [...prevState].sort((a: any, b: any) => {
          const [yearA, monthA, dayA, hourA, minuteA, secondA, msA] = a.postTime;
          const [yearB, monthB, dayB, hourB, minuteB, secondB, msB] = b.postTime;
          const dateA = new Date(yearA, monthA - 1, dayA, hourA, minuteA, secondA, msA).getTime();
          const dateB = new Date(yearB, monthB - 1, dayB, hourB, minuteB, secondB, msB).getTime();
          return dateB - dateA;
        })
      );
    }
    if(sort==="Salary(Low to High)"){
      setJobList((prevState: any) => [...prevState].sort((a: any, b: any) => a.packageOffered - b.packageOffered));
    }
    if(sort==="Salary(High to Low)"){
      setJobList((prevState: any) => [...prevState].sort((a: any, b: any) => b.packageOffered - a.packageOffered));
    }
  },[sort]);

  useEffect(() => {
    if (jobList.length === 0) return;
    let filtered = jobList;

    if (filter.name) {
      filtered = filtered.filter((item: any) => item.name.toLowerCase().includes(filter.name.toLowerCase()));
    }
    if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter((item: any) =>
        filter.Location.some((location: any) => item.location.toLowerCase().includes(location.toLowerCase()))
      );
    }
    if (filter["Experience"] && filter["Experience"].length > 0) {
      filtered = filtered.filter((item: any) =>
        filter["Experience"].some((title: any) => item.experience.toLowerCase().includes(title.toLowerCase()))
      );
    }
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filtered = filtered.filter((item: any) =>
        filter["Job Type"].some((title: any) => item.jobType.toLowerCase().includes(title.toLowerCase()))
      );
    }
    if (Array.isArray(filter.salary) && filter.salary.length === 2) {
      filtered = filtered.filter((item: any) =>
        item.packageOffered >= filter.salary[0] && item.packageOffered <= filter.salary[1]
      );
    }

    setFilteredJobs(filtered);
  }, [filter, jobList]);

  return (
    <div className='p-5'>
      <div className='flex justify-between xsm-mx:flex-wrap xsm-mx:gap-5 '>
        <div className='text-2xl font-semibold'>Recommended Jobs</div>
        <Sort  sort="job" />
      </div>

      <div className='justify-center flex flex-wrap gap-5 pt-10'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job: any, index: any) => (
            <JobCard key={index} {...job} />
          ))
        ) : (
          <div className="text-bright-sun-400 text-lg justify-center items-center font-semibold">
            No Job Available at this Time
          </div>
        )}
      </div>
    </div>
  )
}

export default Jobs;
