import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'Clarity',
      description: 'I focus on building with purpose and clean architecture that solves real problems.'
    },
    {
      icon: <Users size={24} />,
      title: 'Ownership',
      description: 'I love taking end-to-end responsibility and turning ideas into actionable solutions.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Curiosity',
      description: 'I keep learning, experimenting, and pushing boundaries every single day.'
    },
    {
      icon: <Code size={24} />,
      title: 'Impact',
      description: 'I choose projects that bring change, solve real issues, and inspire users.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Currently, I'm interning at <span className="text-blue-400 font-medium">IIT Ropar</span>, working on an AI-powered poll generation system using the MERN stack, audio transcription (Whisper), and custom AI models for education. 
            </p>
            <p>
              I'm also the creator of <span className="text-emerald-400 font-medium">Shortcut Sensei</span>, a unique platform to help people master productivity shortcuts — combining smart design, quizzes, and community interaction.
            </p>
            <p>
              I build projects with a purpose — blending strong UI/UX, deep logic, and scalable architecture. Whether it's blockchain-based donation platforms, real-time dashboards, or intelligent automation tools, I aim to solve real-world problems with transparency and creativity.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;