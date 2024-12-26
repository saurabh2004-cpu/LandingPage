'use client'
import { HeroSection } from '@/components/HeroSection'
import { TherapistTeam } from '@/components/TherapistTeam'
import React from 'react'

const page = () => {
  const team = [
    {
      name: 'Dr. Emily Brown',
      role: 'Senior Physiotherapist',
      image: '/images/15.jpg'
    },
    {
      name: 'Dr. Lisa Johnson',
      role: 'Pediatric Therapist',
      image: '/images/16.png'
    },
    {
      name: 'Dr. Jessica Wilson',
      role: 'Neurological Therapist',
      image: '/images/17.jpg'
    },
    {
      name: 'Dr. Linda Thomas',
      role: 'Orthopedic Therapist',
      image: '/images/18.jpg'
    },
    {
      name: 'Dr. Michael Carter',
      role: 'Sports Rehabilitation Specialist',
      image: '/images/19.jpg'
    },
    {
      name: 'Dr. Sophia Davis',
      role: 'Occupational Therapist',
      image: '/images/20.jpg'
    },
    {
      name: 'Dr. Andrew Moore',
      role: 'Geriatric Physiotherapist',
      image: '/images/21.jpg'
    },
    {
      name: 'Dr. Olivia Garcia',
      role: 'Cardiopulmonary Therapist',
      image: '/images/21.jpg'
    }
  ];

  return (
    <>
      <HeroSection image='/images/1.jpg' title='Our Team' />

      {/* team */}
      <TherapistTeam therapists={team} />
    </>
  )
}

export default page
