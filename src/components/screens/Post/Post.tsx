import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Nav from '../../Nav'
import PostDetails from '../PostDetails/PostDetails'
import Victory from '../../../../public/images/group-26.png'
import Image from 'next/image'

const Post = () => {
  return (
    <>
    <div><Nav /></div>
    <div className='mx-28 my-16 bg-primary rounded-2xl grid grid-cols-6 p-20 relative'>
        <div className='col-span-1'>
        <Avatar className='w-20 h-20'>
        <AvatarImage src="images/ellipse-40.svg" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        <div className='col-span-5 text-primary-foreground'>
            <p className='text-lg font-semibold'>Hi Mikael!</p>
            <p className='text-xl font-medium py-2'>I’m asking for referrals for our User Experience (UX) Designer position.</p>
            <p className='text-4xl font-semibold pb-4'>If the person gets hired your reward will be 25000 SEK!</p>

            <Button variant={'secondary'} className='rounded-3xl'>Check how it works</Button>
        </div>  
        <div className=' absolute bottom-0 right-8'>
            <Image src={Victory} alt=''/>
        </div>
    </div>
    <PostDetails />
    <div className=' mx-44 my-16 bg-secondary rounded-2xl border-secondary border-2 p-12 text-center flex flex-col gap-5'>
        <p className=' text-2xl font-semibold'>Do you have anyone to recommend for the position?</p>
        <Button className=' rounded-3xl w-52 m-auto'>Next step</Button>
        <p className=' text-base font-normal'>By clicking Next, I consent to the processing of personal data related to the referral.</p>
        <div className='flex gap-2 justify-center'>
            <p className=' text-base font-normal'>Learn more about</p>
            <p className=' text-base font-semibold text-accent-foreground'>Terms & Condition</p>
            <p className=' text-base font-normal'>and</p>
            <p className=' text-base font-semibold text-accent-foreground'>Privacy Policy</p>
        </div>
    </div>
    </>
    
  )
}

export default Post