import {
  IconCalendarMonth,
  IconHeart,
  IconMapPin,
  IconCircleCheck,
  IconProgressX,
} from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Divider,
  Modal,
  Text,
  LoadingOverlay,
  Avatar,
} from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import ProfileService from '../../Services/ProfileService';
import jobService from '../../Services/JobService';
import NotificationClass from '../../Services/NotificationClass';
import Utilites from '../../Services/Utilites';

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [date, setDalue] = useState<Date | null>(new Date());
  const [time, setTime] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<any>(props);
  const { id } = useParams();
  const [app, { open: openApp, close: closeApp }] = useDisclosure(false);

  useEffect(() => {
    if (props.applicantId) {
      ProfileService.getProfile(props.applicantId).then((res) => {
        setProfile(res);
      }).catch((err) => {
        console.log("Error fetching profile:", err);
      });
    } else {
      setProfile(props);
    }
  }, [props]);

  const handleSubmit = (status: string) => {
    let interview:any = { id, applicantID: profile?.id, applicationStatus: status};
    if(status === "INTERVIEWING") {
      const [hours, minutes] = time.split(":").map(Number);
      date?.setHours(hours, minutes);
      interview= { ...interview, interviewTime: date };
    }
    jobService.changeAppStatus(interview)
      .then(() => {
       if(status === "INTERVIEWING") {
        NotificationClass.successNotification("Interview Scheduled", "Interview scheduled successfully.");
       }
       else if (status === "OFFERED") {
        NotificationClass.successNotification("Offered", "Application had been Sent Successfully.");
       }
        else if (status === "REJECTED") { 
        NotificationClass.successNotification("Rejected", "Application had been  Rejected.");
        }
        window.location.reload();
      })
      .catch((err) => {
        NotificationClass.errorNotification("Interview Scheduling Failed", err.response.data.errorMessage || "Unknown error occurred.");
      });
  };

  return (
    <div className="relative sm-mx:w-full">
      <LoadingOverlay
        className='!fixed'
        zIndex={1000}
        overlayProps={{ radius: 'xs', blur: 2 }}
        loaderProps={{ color: 'bright-sun.3', type: 'bars' }}
      />

      <div className="bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 sm-mx:w-full rounded-xl hover:shadow-[0_0_8px_1px_wheat] shadow-bright-sun-500">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2">
              <Avatar src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}` : '/avatar.png'} alt="props.name" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">{props.name}</div>
              <div className="text-xs text-mine-shaft-300">
                {profile?.jobTitle} &bull; {profile?.company}
              </div>
            </div>
          </div>
          <IconHeart className="text-mine-shaft-300 hover:cursor-pointer" />
        </div>

        <div className="flex gap-2">
          {profile.skills?.map((skill: string, index: number) => index < 3 && (
            <div
              key={index}
              className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs"
            >
              {skill}
            </div>
          ))}
        </div>

        <Text lineClamp={3} className=" min-h-[3.1rem] !mt-3 !text-xs !text-justify !text-mine-shaft-300">
          {profile?.about}
        </Text>

        <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />

        {
          props.invited ? (
            <div className='flex gap-1 text-mine-shaft-200 text-sm items-center'>
              <IconCalendarMonth stroke={1.5} className="w-5 h-5" />
              Interview: {props.interviewTime && props.interviewTime.length >= 5 
                ? Utilites.formatInterviewTime(props.interviewTime) 
                : "Not scheduled"}
            </div>
          ) : (
            <div className="flex justify-between p-2">
              <div className=" text-xs text-mineshaft-200">
                Exp: {props.experience ? props.experience : 1} years
              </div>
              <div className="flex gap-2 text-xs items-center text-mine-shaft-400">
                <IconMapPin className="h-5 w-5" />
                {profile.location}
              </div>
            </div>
          )
        }

        <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />
        <div className="flex gap-2 justify-between">
          {
            !props.invited && <>
              <Link to={`/talent-profile/${profile?.id}`}>
                <Button color="bright-sun.4" variant="outline">
                  Profile
                </Button>
              </Link>
              {props.posted ? (
                <Button
                  onClick={open}
                  rightSection={<IconCalendarMonth className="w-5 h-5" />}
                  color="bright-sun.4"
                  variant="light"
                >
                  Schedule
                </Button>
              ) : (
                <Button color="bright-sun.4" variant="light">
                  Message
                </Button>
              )}
            </>
          }
          {
            props.invited && <>
              <div>
                <Button
                  className='!bg-green text-mine-shaft-100'
                  rightSection={<IconCircleCheck className="w-5 h-5" />}
                  color="green.5"
                  variant="light"
                  onClick={()=>handleSubmit("OFFERED")}
                >
                  Accept
                </Button>
              </div>
              <div>
                <Button
                  rightSection={<IconProgressX className="w-5 h-5" />}
                  color="red.8"
                  variant="light"
                  onClick={()=>handleSubmit("REJECTED")}
                >
                  Reject
                </Button>
              </div>
            </>
          }
        </div>
        {(props.invited || props.posted ) && <Button
                  autoContrast
                  color="bright-sun.4"
                  variant="filled"
                  onClick={openApp}
                >View Application</Button>                
        }

<Modal opened={opened} onClose={close} title="Schedule Interview" centered>
          <div className="flex flex-col gap-4">
            <DateInput
              value={date}
              minDate={new Date()}
              onChange={setDalue}
              label="Date"
              placeholder="Enter Date"
            />
            <TimeInput
              label="Time"
              value={time}
              onChange={(event) => setTime(event.currentTarget.value)}
              ref={ref}
              withSeconds
              onClick={() => ref.current?.showPicker()}
            />
            <Button
              onClick={() => handleSubmit("INTERVIEWING")}
              color="bright-sun.4"
              variant="light"
            >
              Schedule
            </Button>
          </div>
        </Modal>

        <Modal opened={app} onClose={closeApp} title="Application Details" centered>
          <div className="flex flex-col gap-4">
            <div>
              Email:&emsp;
              <a className='text-bright-sun-400 hover:underline cursor-pointer'  href={`mailto:${props.email}`}>
                {props.email} 
              </a>
            </div>
            <div>
              Website:&emsp;
              <a  className=' text-bright-sun-400 hover:underline cursor-pointer' href={props.website}  target="_blank" rel="noopener noreferrer">
                {props.website}
                </a>
            </div>
            <div>
              Resume:&emsp; 
              <span className="text-bright-sun-400 hover:underline cursor-pointer">
              {props.resume ? (
              <button 
                className="text-bright-sun-400 hover:underline cursor-pointer bg-transparent border-none" 
                onClick={() => Utilites.openBase64Pdf(props.resume)}
              >
                View
              </button>
            ) : (
              <span className="text-gray-500">Not Available</span>
            )}
              </span>
          </div>
          <div>
            Cover Letter:&emsp; 
            <div>{props.coverLetter}</div>
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TalentCard;
