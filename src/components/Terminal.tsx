import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


interface Command {
  command: string;
  response: string[];
}

type CommandHandler = () => string[];

interface CommandDefinition {
  description: string;
  handler: CommandHandler;
}

export const Terminal: React.FC = () => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, CommandDefinition> = {
    help: {
      description: 'Show this help message',
      handler: () => [
        'Available commands:',
        ...Object.entries(commands).map(([cmd, def]) => `  ${cmd.padEnd(10)} - ${def.description}`)
      ]
    },
    about: {
      description: 'About DuckHats',
      handler: () => [
        'DuckHats - Developing with passion and creativity',
        'We are a team of developers creating innovative open source projects.',
        'Type "projects" to see what we\'re working on!'
      ]
    },
    projects: {
      description: 'List our projects',
      handler: () => [
        '📂 Current projects:',
        '  • eduQuack - Educational platform',
        '  • DuckHunt - Modern game remake',
        '  • DuckDocs - Documentation system',
        '',
        'Type "cd project-name" for more info'
      ]
    },
    contact: {
      description: 'How to reach us',
      handler: () => [
        '📫 Get in touch:',
        '  • GitHub: github.com/DuckHats',
        '  • Email: info@duckhats.com'
      ]
    },
    clear: {
      description: 'Clear terminal',
      handler: () => {
        setTimeout(() => setHistory([]), 100);
        return [];
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  const navigate = useNavigate();

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();

    if (normalizedCmd) {
      setCommandHistory(prev => [cmd, ...prev]);
      setHistoryIndex(-1);

      let response: string[] = [];

      if (normalizedCmd.startsWith('cd ')) {
        const project = normalizedCmd.split(' ')[1];
        response = [`Navigating to ${project}...`, 'Project details will be displayed below'];

        setTimeout(() => {
          navigate('/projects', { state: { scrollToId: 'projects' } });
        }, 1000);
      } else if (normalizedCmd in commands) {
        response = commands[normalizedCmd].handler();
      } else {
        response = [
          `Command not found: ${cmd}`,
          'Type "help" for available commands'
        ];
      }

      setHistory(prev => [...prev, { command: cmd, response }]);
      setInput('');
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = input.toLowerCase();
      const matchingCommands = Object.keys(commands).filter(cmd =>
        cmd.startsWith(currentInput)
      );

      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        setHistory(prev => [...prev, {
          command: input,
          response: ['Available completions:', ...matchingCommands]
        }]);
      }
    }
  };

  return (
    <div className="bg-black/90 rounded-lg p-4 font-mono text-sm md:text-base w-full max-w-2xl mx-auto backdrop-blur-sm border border-gray-800">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">duckhats@terminal</span>
      </div>
      <div
        ref={terminalRef}
        className="h-64 overflow-y-auto mb-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400 mb-2">Welcome to DuckHats Terminal!</p>
          <p className="text-gray-400 mb-2">
            Type "help" to see available commands
          </p>
        </motion.div>
        <AnimatePresence>
          {history.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center text-gray-300">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400 ml-2">~</span>
                <span className="ml-2">{entry.command}</span>
              </div>
              {entry.response.map((line, j) => (
                <p key={j} className="text-gray-400 ml-4">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center text-gray-300">
        <span className="text-green-400">➜</span>
        <span className="text-blue-400 ml-2">~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none ml-2 flex-1 text-gray-300"
          autoFocus
        />
      </div>
    </div>
  );
};