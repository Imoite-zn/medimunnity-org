'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import  styles  from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradident-02 z-0"/>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| About Medimmunity" textStyles="text-center" />
            <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
              <span className="font-extrabold text-white">Medimmunity</span> The future of community in medicine, let's get there <span className="font-extrabold text-white">together</span>. Education in general medicine creates specialists who would provide appropriate health care to the community and advance the cause of science through research, training, and teaching the medical fraternity . Medimmunity's plan is to bring a tremendous richness of experience and maturity. Let's <span className='font-extrabold'>explore</span> and realise the importance of growth in the medical field and the well-being of the community.
            </motion.p>
            <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]" 
            />
    </motion.div>
  </section>
);

export default About;
