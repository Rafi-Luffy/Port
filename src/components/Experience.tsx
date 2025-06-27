import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cloud Intern',
      company: 'NPTEL (IIT Ropar)',
      location: 'Remote',
      period: '2025 – Present',
      type: 'Internship',
      description: 'Working on AI-powered poll generation system using MERN stack, audio transcription (Whisper), and custom AI models for education.',
      achievements: [
        'Optimizing cloud infrastructure through auto-scaling and efficient resource provisioning',
        'Enhancing performance and reducing costs for large-scale deployments',
        'Implementing AI-driven educational tools with real-world applications'
      ]
    },
    {
      title: 'Draft Head',
      company: 'ACM Student Chapter, VVIT',
      location: 'Guntur',
      period: 'Mar 2024 – Present',
      type: 'Leadership',
      description: 'Leading content strategy and documentation for the ACM chapter, ensuring professional communication standards.',
      achievements: [
        'Authored technical reports, event descriptions, and official newsletters',
        'Maintained clarity, accuracy, and professional tone across all communications',
        'Managed documentation workflow and coordinated team communications'
      ]
    },
    {
      title: 'Coordinator',
      company: 'Foreign Language Club, VVIT',
      location: 'Guntur',
      period: 'Nov 2023 – Present',
      type: 'Cultural Leadership',
      description: 'Organizing events promoting Japanese language and cultural exchange, fostering an inclusive student environment.',
      achievements: [
        'Organized cultural exchange events promoting Japanese language learning',
        'Managed logistics and communication for club activities',
        'Built inclusive environment for international cultural appreciation'
      ]
    }
  ];

  const certifications = [
    { name: 'Google Cloud Data Analytics', issuer: 'Google', year: '2024' },
    { name: 'Frontend Development', issuer: 'Infosys Springboard', year: '2024' },
    { name: 'Business Japanese', issuer: 'NPTEL', year: '2023' },
    { name: 'Japanese Culture I & II', issuer: 'NPTEL', year: '2023' },
    { name: 'Cloud Computing', issuer: 'NPTEL', year: '2023' },
    { name: 'Blockchain & Its Applications', issuer: 'NPTEL', year: '2023' }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-slate-900"></div>
                
                <div className="ml-20 bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm mb-4">
                    {exp.type}
                  </span>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-emerald-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            <Award className="inline-block mr-2 mb-1" size={28} />
            Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;