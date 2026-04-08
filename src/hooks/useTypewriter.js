import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, delaySec = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delaySec);
      } else {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySec]);

  return text;
}
