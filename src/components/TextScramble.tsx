import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

interface TextScrambleOptions {
  framesPerChar?: number;
  scrambleDuration?: number;
}

export interface TextScrambleRef {
  setText: (newText: string, options?: TextScrambleOptions) => Promise<void>;
}

const TextScramble = forwardRef<TextScrambleRef, { 
  initialText?: string; 
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>(({ initialText = '', className = '', as: Component = 'span' }, ref) => {
  const elRef = useRef<HTMLElement>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRequest = useRef<number | null>(null);
  const frame = useRef(0);
  const queue = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const resolvePromise = useRef<(() => void) | null>(null);

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const update = () => {
    if (!elRef.current) return;

    let output = '';
    let complete = 0;
    for (let i = 0; i < queue.current.length; i++) {
      let item = queue.current[i];
      if (frame.current >= item.end) {
        complete++;
        output += item.to;
      } else if (frame.current >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = randomChar();
          queue.current[i].char = item.char;
        }
        output += `<span style="opacity: 0.75">${item.char}</span>`;
      } else {
        output += item.from;
      }
    }
    elRef.current.innerHTML = output;

    if (complete === queue.current.length) {
      if (resolvePromise.current) {
        resolvePromise.current();
        resolvePromise.current = null;
      }
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    } else {
      frameRequest.current = requestAnimationFrame(update);
      frame.current++;
    }
  };

  const setText = (newText: string, options: TextScrambleOptions = {}) => {
    const { framesPerChar = 6, scrambleDuration = 30 } = options;
    return new Promise<void>((resolve) => {
      resolvePromise.current = resolve;
      const oldText = elRef.current?.innerText || '';
      const length = Math.max(oldText.length, newText.length);
      queue.current = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = i * framesPerChar;
        const end = start + scrambleDuration;
        queue.current.push({ from, to, start, end });
      }

      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
      frame.current = 0;
      update();
    });
  };

  useImperativeHandle(ref, () => ({
    setText,
  }));

  useEffect(() => {
    if (initialText && elRef.current) {
      elRef.current.innerText = initialText;
    }
    return () => {
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [initialText]);

  return React.createElement(Component, {
    ref: elRef,
    className
  });
});

TextScramble.displayName = 'TextScramble';

export default TextScramble;