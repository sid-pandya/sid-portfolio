import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text text-center">Let's Connect</h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:sidhdharth19pandya@gmail.com"
                className="glass p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 sm:gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-all group cursor-pointer w-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-neutral-900 dark:text-white font-medium mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm break-words">sidhdharth19pandya@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/sidhdharth-pandya"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 sm:gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-all group cursor-pointer w-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-neutral-900 dark:text-white font-medium mb-1 text-sm sm:text-base">LinkedIn</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">Connect with me</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/sid-pandya"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 sm:gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-all group cursor-pointer w-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Github size={20} className="text-white" />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-neutral-900 dark:text-white font-medium mb-1 text-sm sm:text-base">GitHub</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">View my code</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
