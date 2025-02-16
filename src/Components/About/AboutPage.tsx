import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@mantine/core';

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto overflow-x-hidden p-6">
            {/* Hero Section */}
            <section className="bg-mine-shaft-800 rounded-xl shadow-lg p-12 mb-16">
                <motion.div
                 style={{ pointerEvents: 'none' }}
                    className="absolute inset-0 opacity-10 bg-gradient-to-r"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.h1
                    className="text-5xl font-bold text-bright-sun-400 relative z-10"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    About Our Job Portal
                </motion.h1>
                <motion.p
                    className="mt-6 text-xl text-mine-shaft-300 relative z-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Connecting ambition with opportunities, we create pathways for students and recruiters to achieve their goals.
                </motion.p>
            </section>

            {/* About Students Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-bright-sun-400">Empowering Students</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-lg text-mine-shaft-200">
                            We are dedicated to helping students navigate their career journey. Our job portal provides tools and resources to:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-3 text-mine-shaft-300">
                            <li>Build standout resumes and profiles tailored for success.</li>
                            <li>Access internships and job opportunities at top organizations.</li>
                            <li>Gain personalized career guidance and insights.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="bg-mine-shaft-700 p-6 rounded-lg shadow"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-xl font-bold text-bright-sun-300">Student Features:</h3>
                        <ul className="mt-4 space-y-3">
                            <li>AI-powered resume builder.</li>
                            <li>Custom job alerts based on skills and interests.</li>
                            <li>Interview preparation guides and practice tools.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* About Recruiters Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-bright-sun-400">Empowering Recruiters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <motion.div
                        className="bg-mine-shaft-700 p-6 rounded-lg shadow"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-xl font-bold text-bright-sun-400">Recruiter Features:</h3>
                        <ul className="mt-4 space-y-3 text-mine-shaft-300">
                            <li>Advanced candidate search and filtering tools.</li>
                            <li>Automated candidate matching based on job requirements.</li>
                            <li>Analytics dashboard for tracking recruitment metrics.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-lg text-mine-shaft-200">
                            For recruiters, finding the right talent is critical. We simplify the process with cutting-edge features and seamless workflows, ensuring:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-3 text-mine-shaft-300">
                            <li>Access to a diverse and talented pool of candidates.</li>
                            <li>Efficient communication and scheduling tools.</li>
                            <li>Streamlined hiring processes for better outcomes.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="mb-16 bg-mine-shaft-700 p-12 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-bright-sun-400 text-center">Our Vision</h2>
                <p className="mt-6 text-lg text-center text-mine-shaft-300">
                    To bridge the gap between aspiring talent and organizations seeking exceptional candidates, fostering a future where everyone finds their perfect opportunity.
                </p>
            </section>

            {/* Testimonials Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-bright-sun-400 text-center">What People Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <motion.div
                        className="bg-bright-sun-500 p-6 rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="Boy.png"
                            alt="Student A"
                            className="w-16 h-16 rounded-full mb-4 mx-auto border-2 border-mine-shaft-100"
                        />
                        <p className="text-mine-shaft-700">
                            "This platform made my job search so much easier! I found an internship that perfectly matches my skills." - <span className="font-bold">John Doe</span>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-bright-sun-500 p-6 rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img
                            src="avatar2.png"
                            alt="Recruiter B"
                            className="w-16 h-16 rounded-full mb-4 mx-auto"
                        />
                        <p className="text-mine-shaft-700">
                            "The advanced search features helped us hire top talent in no time. Highly recommend!" - <span className="font-bold">Jane Smith</span>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-bright-sun-500 p-6 rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <img
                            src="avatar.png"
                            alt="Student C"
                            className="w-16 h-16 rounded-full mb-4 mx-auto"
                        />
                        <p className="text-mine-shaft-700">
                            "A game-changer for students looking to start their careers." - <span className="font-bold">Emily Johnson</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center bg-mine-shaft-800 p-12 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-bright-sun-400">Get in Touch</h2>
                <p className="mt-4 text-lg text-mine-shaft-200">
                    Have questions or need assistance? We’re here to help. Reach out to us at:
                </p>
                <a
                    href="mailto:support@jobportal.com"
                    className="mt-4 inline-block text-bright-sun-400 hover:underline text-lg font-semibold"
                >
                    support@jobportal.com
                </a>
            </section>

            {/* FAQ Section */}
            <section className=" mt-10 p-3">
    <h2 className="text-3xl font-semibold text-bright-sun-400 text-center">Frequently Asked Questions</h2>
    <div className="mt-10  flex flex-col gap-10 justify-center p-2"> {/* Increased gap between items */}
        <Accordion>
            {/* FAQ Item 1 */}
            <AccordionItem value="item-1" className='bg-mine-shaft-950 rounded-lg mb-6 gap-5'> {/* Added margin bottom */}
                <AccordionControl className="bg-mine-shaft-800 gap-3 p-6 rounded-lg shadow cursor-pointer flex justify-between items-center">
                    <h3 className="text-xl text-bright-sun-400 font-semibold">What is the purpose of this job portal?</h3>
                </AccordionControl>
                <AccordionPanel className="bg-mine-shaft-700 p-6 rounded-b-lg shadow text-mine-shaft-200">
                    Our platform is designed to connect students with career opportunities while providing recruiters with a streamlined process to find talented candidates.
                </AccordionPanel>
            </AccordionItem>

            {/* FAQ Item 2 */}
            <AccordionItem value="item-2" className='bg-mine-shaft-950 rounded-lg mb-6 gap-5'> {/* Added margin bottom */}
                <AccordionControl className="bg-mine-shaft-700 p-6 rounded-lg shadow cursor-pointer text-bright-sun-300 flex justify-between items-center">
                    <h3 className="text-xl text-bright-sun-400 font-semibold">How can students create a profile?</h3>
                </AccordionControl>
                <AccordionPanel className="bg-mine-shaft-700 p-6 rounded-b-lg shadow text-mine-shaft-200">
                    Students can create a profile by signing up on the portal, providing their personal details, uploading their resumes, and filling out information related to their skills, education, and career goals.
                </AccordionPanel>
            </AccordionItem>

            {/* FAQ Item 3 */}
            <AccordionItem value="item-3" className='bg-mine-shaft-950 rounded-lg mb-6 gap-5'> {/* Added margin bottom */}
                <AccordionControl className="bg-mine-shaft-700 p-6 rounded-lg shadow cursor-pointer text-bright-sun-300 flex justify-between items-center">
                    <h3 className="text-xl text-bright-sun-400 font-semibold">Can recruiters post job openings?</h3>
                </AccordionControl>
                <AccordionPanel className="bg-mine-shaft-700 p-6 rounded-b-lg shadow text-mine-shaft-200">
                    Yes, recruiters can easily post job openings, create job descriptions, and set criteria for candidate selection directly on the portal.
                </AccordionPanel>
            </AccordionItem>

            {/* FAQ Item 4 */}
            <AccordionItem value="item-4" className='bg-mine-shaft-950 rounded-lg mb-6 gap-5'> {/* Added margin bottom */}
                <AccordionControl className="bg-mine-shaft-700 p-6 rounded-lg shadow cursor-pointer text-bright-sun-300 flex justify-between items-center">
                    <h3 className="text-xl text-bright-sun-400 font-semibold">Is there any fee to use the job portal?</h3>
                </AccordionControl>
                <AccordionPanel className="bg-mine-shaft-700 p-6 rounded-b-lg shadow text-mine-shaft-200">
                    The platform is free to use for students. For recruiters, there may be certain premium features or plans to access advanced functionalities such as job posting and candidate searching.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
</section>

        </div>
    );
};

export default AboutPage;
