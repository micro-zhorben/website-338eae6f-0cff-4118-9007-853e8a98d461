import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmojiRainProps {
  emoji?: string[];
  duration?: number;
}

export function EmojiRain({
  emoji = ["🌟", "🎈", "🎉", "✨", "🎊", "🌈"],
  duration = 2000,
}: EmojiRainProps) {
  const [emojis, setEmojis] = useState<
    Array<{ id: number; x: number; emoji: string }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((current) => [
        ...current,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          emoji: emoji[Math.floor(Math.random() * emoji.length)],
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, [emoji]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setEmojis((current) =>
        current.filter((e) => e.id > Date.now() - duration)
      );
    }, 1000);

    return () => clearInterval(cleanup);
  }, [duration]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {emojis.map(({ id, x, emoji }) => (
          <motion.div
            key={id}
            initial={{ y: -20, x, opacity: 1 }}
            animate={{ y: window.innerHeight + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="absolute text-2xl"
          >
            {emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}