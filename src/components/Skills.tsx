import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Vite', level: 90 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'MongoDB', level: 82 },
        { name: 'Firebase', level: 88 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Turborepo', level: 78 }
      ]
    },
    {
      title: 'AI/ML & Blockchain',
      skills: [
        { name: 'OpenAI APIs', level: 85 },
        { name: 'Whisper', level: 80 },
        { name: 'Solidity', level: 75 },
        { name: 'Smart Contracts', level: 72 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'Google Cloud', level: 82 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-blue-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions from concept to deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-xl font-semibold mb-4 text-white">Special Expertise</h3>
            <p className="text-gray-300 mb-4">
              Fluent in <span className="text-emerald-400 font-medium">Japanese language</span> and 
              <span className="text-blue-400 font-medium"> business culture</span>, enabling effective collaboration in global environments
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Business Japanese', 'Cultural Fluency', 'International Collaboration', 'Cross-cultural Communication'].map((item) => (
                <span key={item} className="bg-slate-700 px-4 py-2 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;