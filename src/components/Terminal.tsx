import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
interface Command {
  command: string;
  response: string[];
}
export const Terminal: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  // Simular efecte del cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);
  const commands = {
    help: ['Available commands:', '  help     - Show this help message', '  about    - About DuckHats', '  projects - List our projects', '  clear    - Clear terminal', '  contact  - How to reach us'],
    about: ['DuckHats - Developing with passion and creativity', 'We are a team of developers creating innovative open source projects.', 'Type "projects" to see what we\'re working on!'],
    projects: ['📂 Current projects:', '  • eduQuack - Educational platform', '  • DuckHunt - Modern game remake', '  • DuckDocs - Documentation system', '', 'Type "cd project-name" for more info'],
    contact: ['📫 Get in touch:', '  • GitHub: github.com/DuckHats', '  • Email: info@duckhats.com'],
    clear: []
  };
  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    let response: string[] = [];
    if (normalizedCmd.startsWith('cd ')) {
      const project = normalizedCmd.split(' ')[1];
      response = [`Navigating to ${project}...`, 'Project details will be displayed below'];
      // Simular navegació al projecte corresponent
      setTimeout(() => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 1000);
    } else if (normalizedCmd in commands) {
      response = commands[normalizedCmd as keyof typeof commands];
      if (normalizedCmd === 'clear') {
        setTimeout(() => setHistory([]), 100);
        return;
      }
    } else if (normalizedCmd) {
      response = [`Command not found: ${cmd}`, 'Type "help" for available commands'];
    }
    setHistory([...history, {
      command: cmd,
      response
    }]);
    setInput('');
  };
  return <div className="bg-black/90 rounded-lg p-4 font-mono text-sm md:text-base w-full max-w-2xl mx-auto backdrop-blur-sm border border-gray-800">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">duckhats@terminal</span>
      </div>
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          <p className="text-green-400 mb-2">Welcome to DuckHats Terminal!</p>
          <p className="text-gray-400 mb-2">
            Type "help" to see available commands
          </p>
        </motion.div>
        <AnimatePresence>
          {history.map((entry, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }}>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400 ml-2">~</span>
                <span className="ml-2">{entry.command}</span>
              </div>
              {entry.response.map((line, j) => <p key={j} className="text-gray-400 ml-4">
                  {line}
                </p>)}
            </motion.div>)}
        </AnimatePresence>
      </div>
      <div className="flex items-center text-gray-300">
        <span className="text-green-400">➜</span>
        <span className="text-blue-400 ml-2">~</span>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => {
        if (e.key === 'Enter') {
          handleCommand(input);
        }
      }} className="bg-transparent border-none outline-none ml-2 flex-1 text-gray-300" autoFocus />
        <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
          ▋
        </span>
      </div>
    </div>;
};