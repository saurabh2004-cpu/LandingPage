'use client'
import { Facebook, Youtube, Instagram, Twitter, ArrowRight } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';


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
    }
];

interface Therapist {
    name: string;
    role: string;
    image: string;
}

interface Props {
    therapists?: Therapist[];
    title?: string;
    section?: string
}

export const TherapistTeam = ({ therapists = team, title, section }: Props) => {
    return (
        <div className="w-full bg-white px-4 md:px-16 lg:px-40 py-16 relative rounded-t-[50px] top-[-47px] z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                {title && section &&
                    <>
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="text-blue-600 mb-2"
                            >
                                / {section}
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="text-4xl lg:text-5xl text-[#0B2C3D] font-medium max-w-2xl"
                            >
                                {title}
                            </motion.h2>
                        </div>

                        <div className='mt-6'>
                            <Button text="View All Team" icon={<ArrowRight className="w-4 h-4 " />} />
                        </div>
                    </>
                }

            </div>

            {/* Team Member Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-4 lg:p-16">
                {therapists.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="group relative bg-gray-50 rounded-2xl overflow-hidden"
                    >
                        <div className="relative overflow-hidden">
                            <div className="aspect-[3/4]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full bg-[#d4d8e0] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                {[Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
                                    <button
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors hover:scale-110"
                                    >
                                        <Icon className="w-4 h-4 text-[#0B2C3D]" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-medium text-[#0B2C3D] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
