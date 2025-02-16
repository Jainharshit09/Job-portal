import {
  IconCalendarMonth,
  IconHeart,
  IconMapPin,
  IconCheck,
  IconCircleCheck,
  IconProgressX,
} from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import {
  Button,
  Divider,
  Modal,
  Text,
  Notification,
  LoadingOverlay,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';

const TalentCard = ({
  name,
  role,
  company,
  topSkills,
  about,
  expectedCtc,
  location,
  image,
  posted,
  invited,
}: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    close(); // Close the modal
    setShowNotification(true); // Show notification
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };
  
  return (
    <div className="relative">
                    <LoadingOverlay
                    className='!fixed'
                    visible={showNotification}
                    zIndex={1000}
                    overlayProps={{ radius: 'xs', blur: 2 }}
                    loaderProps={{ color: 'bright-sun.3', type: 'bars' }}
                    />

      <div className="bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-500">
        {/* Header Section */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2">
              <img
                className="w-12 rounded-full"
                src={`/${image}.png`}
                alt={image}
              />
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

        {/* Skills Section */}
        <div className="flex gap-2">
          {topSkills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* About Section */}
        <Text lineClamp={3} className="!text-xs !text-justify !text-mine-shaft-300">
          {about}
        </Text>

        {/* Divider */}
        <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />

        {/* Footer Section */}
        {
          invited?<div className='flex gap-1 text-mine-shaft-200 text-sm items-center'>
            <IconCalendarMonth stroke={1.5} className="w-5 h-5" />
            Interview: August 27th,2024  10:00
          </div>:
                  <div className="flex justify-between p-2">
                  <div className="font-semibold text-mineshaft-200">{expectedCtc}</div>
                  <div className="flex gap-2 text-xs items-center text-mine-shaft-400">
                    <IconMapPin className="h-5 w-5" />
                    {location}
                  </div>
                </div>
        }

        {/* Actions */}
        <Divider size="xs" color="mine-shaft.7" orientation="horizontal" />
        <div className="flex gap-2 justify-between">
          {
            !invited &&<>
                        <Link to="/talent-profile">
            <Button color="bright-sun.4" variant="outline">
              Profile
            </Button>
          </Link>
          {posted ? (
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
            invited && <>
            <div>
            <Button
            className='!bg-green text-mine-shaft-100'
              rightSection={<IconCircleCheck  className="w-5 h-5" />}
              color="green.5"
              variant="light"
            >
              Accept
            </Button>
            </div>
            <div>
            <Button
              rightSection={<IconProgressX className="w-5 h-5" />}
              color="red.8"
              variant="light"
            >
              Reject
            </Button>
            </div>
            </>
          }
        </div>

        {/* Schedule Modal */}
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
          <div className="flex flex-col gap-4">
            <DateInput
              value={value}
              minDate={new Date()}
              onChange={setValue}
              label="Date"
              placeholder="Enter Date"
            />
            <TimeInput
              label="Time"
              ref={ref}
              withSeconds
              onClick={() => ref.current?.showPicker()}
            />
            <Button
              onClick={handleSubmit}
              color="bright-sun.4"
              variant="light"
            >
              Schedule
            </Button>
          </div>
        </Modal>

        {/* Notification */}
        {showNotification && (
          <Notification
            className={`!border-bright-sun-400 z-[1001] !fixed top-0 items-center justify-center -translate-y-20 left-[35%] transition duration-300 ease-in-out ${
              showNotification ? 'translate-y-0' : ''
            }`}
            icon={<IconCheck style={{ width: 20, height: 20 }} />}
            color="teal"
            title="Schedule Sent"
            withBorder
            withCloseButton={false}
            mt="md"
          >
            Interview has been scheduled successfully...
          </Notification>
        )}
      </div>
    </div>
  );
};

export default TalentCard;
