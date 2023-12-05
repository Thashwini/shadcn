import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const PostDetails = () => {
  return (
    <div className='flex p-10 flex-col rounded-2xl border-2 gap-8 h-full mx-72'>
        <p className='text-primary text-3xl font-semibold'>User Experience (UX) Designer</p>
        <div className='flex gap-2 items-center'>
            <div>
                <Avatar className='w-10 h-10'>
                <AvatarImage src="images/ascentic.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <p className=' text-lg font-semibold'>Ascentic</p>
                <p className=' text-sm font-normal'>Stockholm, Sweden</p>
            </div>
        </div>
        <div className='grid grid-cols-4 '>
            <div className='col-span-1'>
                <p className=' text-base font-normal'>Job type</p>
                <p className=' text-lg font-semibold'>Full-time</p>
            </div>
            <div className='col-span-1'>
                <p className=' text-base font-normal'>Salary range</p>
                <p className=' text-lg font-semibold'>50,000-70,000 SEK</p>
            </div>
            <div className='col-span-1'>
                <p className=' text-base font-normal'>Location</p>
                <p className=' text-lg font-semibold'>On-site</p>
            </div>
        </div>
        <div>
            <p className=' text-lg font-semibold'>Job description</p>
            <p className=' text-base font-normal'>
                We are looking for a UX Designer to design software and platforms that meet people’s needs. You will combine interfaces and workflows to enhance user experience. In this role, you should be an analytical and creative designer who is able to grasp user needs and solve problems. A strong portfolio of successful UX and other technical projects is essential. Ultimately, you will make our product more user-friendly and intuitive to attract and retain customers.
            </p>
        </div>
        <div>
            <p className=' text-lg font-semibold'>Our Dream Hire:</p>
            <ul className=' list-disc pl-2'>
                <li>Proven experience as a UX Designer, UI Designer or similar role</li>
                <li>Strong portfolio of design projects</li>
                <li>Background in project management and research</li>
                <li>Familiarity with interaction design and information architecture</li>
                <li>Proficient in design software (e.g. UXPin, Balsamiq)</li>
                <li>Knowledge of HTML/CSS; JavaScript is a plus</li>
                <li>Problem-solving aptitude</li>
                <li>Analytical mind with a business acumen</li>
                <li>Excellent communication skills</li>
            </ul>
        </div>
        <div>
            <p className=' text-lg font-semibold'>Our Dream Hire:</p>
            <ul className=' list-disc pl-2'>
                <li>Understand product specifications and user psychology</li>
                <li>Conduct concept and usability testing and gather feedback</li>
                <li>Create personas through user research and data</li>
                <li>Define the right interaction model and evaluate its success</li>
                <li>Develop wireframes and prototypes around customer needs</li>
                <li>Find creative ways to solve UX problems (e.g. usability, findability)</li>
                <li>Work with UI designers to implement attractive designs</li>
                <li>Communicate design ideas and prototypes to developers</li>
                <li>Keep abreast of competitor products and industry trends</li>
            </ul>
        </div>
        <div>
            <p className=' text-lg font-semibold'>Company benefits & perks</p>
            <ul className=' list-disc pl-2'>
                <li>Educational opportunities</li>
                <li>Share option program</li>
                <li>Gym membership</li>
            </ul>
        </div>
    </div>
  )
}

export default PostDetails