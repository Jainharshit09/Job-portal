import React, { useEffect, useState } from 'react';
import Sort from '../Findjobs/Sort';
import TalentCard from './TalentCard';
import ProfileService from '../../Services/ProfileService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../Slice/FilterSlice';
import { resetSort } from '../../Slice/SortSlice';

const Talents = () => {
  const dispatch = useDispatch();
  const [talents, setTalent] = useState<any>([]);
  const filter = useSelector((state: any) => state.filter);
  const [filteredTalent, setFilteredTalent] = useState<any>([]);
    const sort= useSelector((state: any) => state.sort);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(resetFilter()); 
    dispatch(resetSort());
    setLoading(true);
    ProfileService.getAllProfiles()
      .then((res) => {
        const applicants = res.filter((profile: any) => profile.accountType === "APPLICANT");
        setTalent(applicants);
        setFilteredTalent(applicants);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

    useEffect(() => {
      if(sort==="Experience(Low to High)"){
        setTalent((prevState: any) => [...prevState].sort((a: any, b: any) => a.experience - b.experience));
      }
      if(sort==="Experience(High to Low)"){
        setTalent((prevState: any) => [...prevState].sort((a: any, b: any) => b.experience - a.experience));
      }
    },[sort]);

  useEffect(() => {
    if (talents.length === 0) return;
    let filtered = talents;

    if (filter.name) {
      filtered = filtered.filter((item: any) => item.name.toLowerCase().includes(filter.name.toLowerCase()));
    }
    if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter((item: any) =>
        filter.Location.some((location: any) => item.location.toLowerCase().includes(location.toLowerCase()))
      );
    }
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filtered = filtered.filter((item: any) =>
        filter["Job Title"].some((title: any) => item.jobTitle.toLowerCase().includes(title.toLowerCase()))
      );
    }
    if (filter.Skills && filter.Skills.length > 0) {
      filtered = filtered.filter((item: any) =>
        filter.Skills.some((skill: any) => item.skills?.some((s: any) => s.toLowerCase().includes(skill.toLowerCase())))
      );
    }
    if (Array.isArray(filter.exp) && filter.exp.length === 2) {
      filtered = filtered.filter((item: any) =>
        item.experience >= filter.exp[0] && item.experience <= filter.exp[1]
      );
    }

    setFilteredTalent(filtered);
  }, [filter, talents]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="flex justify-center flex-wrap gap-5 pt-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-2xl font-semibold text-bright-sun-400">Loading...</div>
          </div>
        ) : filteredTalent.length === 0 ? (
            <div className="text-2xl items-center justify-center font-semibold text-bright-sun-400">No Talent Found</div>
         
        ) : (
          filteredTalent.map((talent: any, index: any) => (
            <TalentCard key={index} {...talent} />
          ))
        )}
      </div>
    </div>
  );
};

export default Talents;
