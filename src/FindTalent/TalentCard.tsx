import { IconHeart, IconMapPin } from '@tabler/icons-react';
import React from 'react';
import { Button, Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const TalentCard = ({ 
  name, role, company, topSkills, about, expectedCtc, location, image 
}: any) => {
  return (
    <div className="bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-500">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2">
            <img className="w-12 rounded-full" src={`/${image}.png`} alt={image} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-mine-shaft-300">
              {role} &bull; {company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 hover:cursor-pointer" />
      </div>
      <div className="flex gap-2">
        {topSkills?.map((skill: string, index: number) => (
          <div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
            {skill}
          </div>
        ))}
      </div>
      <Text lineClamp={3} className="!text-xs !text-justify !text-mine-shaft-300">
        {about}
      </Text>
      <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />
      <div className="flex justify-between p-1">
        <div className="font-semibold text-mineshaft-200">
         {expectedCtc}
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" />
          {location}
        </div>
      </div>
      <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />
      <div className="flex gap-2 justify-between">
        <Link to="/talent-profile">
          <Button color="bright-sun.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <Button color="bright-sun.4" variant="light" >
          Message
        </Button>
      </div>
    </div>
  );
};

export default TalentCard;
