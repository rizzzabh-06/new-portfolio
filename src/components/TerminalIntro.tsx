"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "> rishabh_raj_singh",
  "$ cat role.txt",
  "> Cybersecurity Researcher & Builder (Student)",
  "$ echo $MISSION",
  "> Breaking systems, building better ones — and occasionally breaking my own code.",
  "$ ./start_session",
  "> Session initialized. Welcome.",
];

export default function TerminalIntro() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex]);

  return (
    <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/30 p-6 font-mono text-sm max-w-2xl">
      {displayedLines.map((line, index) => (
        <div
          key={index}
          className={`${
            line.startsWith("$")
              ? "text-green-400"
              : "text-green-300/80"
          } mb-1 animate-fade-in`}
        >
          {line}
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
      )}
    </div>
  );
}