import React from 'react';
import { motion } from 'framer-motion';
import Services from './Services';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="gradient-text">Engineering with a DevOps Heart</span>
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              Hi, I'm Sidhdharth. I sit right at the intersection of 'Software Engineering' and 'System Operations.'
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              I believe that great software isn't just about features—it's about reliability. I’ve spent my career helping teams move from fragile, manual processes to robust, automated pipelines. There is a specific kind of satisfaction I get from watching a deployment go green or seeing latency numbers drop, knowing that the system is running smoother than it was yesterday.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              I’m not tied to a single tool; I’m tied to the solution. Whether that requires Python, Kubernetes, or a whiteboard and a fresh perspective, I’m ready to build.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              <span className="font-bold text-purple-400">The Human Side:</span> When I step away from the screen, I make sure to unplug completely. I’m an avid explorer of the analog world—always on the hunt for a new travel destination or a hidden gem restaurant in the city. On quieter days, you can find me binge-watching a gripping movie series or debating plot twists with friends. I believe that staying curious about the world keeps me grounded and brings a fresh energy back to my work.
            </p>
          </div>
        </motion.section>

        <Services />
      </div>
    </div>
  );
};

export default About;
