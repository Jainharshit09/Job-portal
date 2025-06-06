import { ActionIcon } from '@mantine/core'
import { IconPlus, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import CertfCard from './CertfCard'
import CertInput from './CertInput'
import { useSelector } from 'react-redux'

const Certificate = () => {
    const profile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [addCeti, setAddCert] = useState(false);
    const handleEdit = () => setEdit((prev) => !prev);
  return (
    <div>
         <div className='text-2xl font-bold mb-5 flex justify-between'>
          Certification
          <div className='flex gap-2'>
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => setAddCert (true)}>
            <IconPlus className='h-4/5 w-4/5'/>
          </ActionIcon>
          <ActionIcon  color={edit ? 'red.5' : 'bright-sun.3'} size='lg' variant="subtle" onClick={ handleEdit}>
            {edit ? <IconX className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
          </div>
        </div> 
          <div className='flex flex-col gap-8'>
            {profile?.certifications?.map((cert: any, index: number) => <CertfCard key={index} index={index} edit={edit} {...cert} />)}
            {
              addCeti && <CertInput setEdit={setAddCert}/>
            }
          </div>
    </div>
  )
}

export default Certificate