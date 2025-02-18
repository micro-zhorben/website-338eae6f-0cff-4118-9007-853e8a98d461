import { useState } from "react";
import { motion } from "framer-motion";
import { SillyCard } from "@/components/silly-card";
import { DancingButton } from "@/components/dancing-button";
import { BouncingText } from "@/components/bouncing-text";
import { EmojiRain } from "@/components/emoji-rain";
import { Typography } from "@/components/ui/typography";

export function Home() {
  const [showEmojiRain, setShowEmojiRain] = useState(false);

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Typography.H1>
          Добро пожаловать на самый глупый сайт в мире! 🎉
        </Typography.H1>
        <Typography.Lead>
          Здесь нет ничего серьезного, только веселье и абсурд!
        </Typography.Lead>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SillyCard
          title="Попрыгай со мной!"
          description="Каждая буква хочет с тобой поиграть"
        >
          <BouncingText text="Наведи на меня курсор!" />
        </SillyCard>

        <SillyCard
          title="Нажми на кнопку!"
          description="Она очень хочет, чтобы ее нажали"
        >
          <div className="flex justify-center">
            <DancingButton text="Я танцую!" />
          </div>
        </SillyCard>

        <SillyCard
          title="Устрой дождь из эмодзи!"
          description="Потому что почему бы и нет?"
        >
          <div className="flex justify-center">
            <DancingButton
              text={showEmojiRain ? "Хватит!" : "Начать дождь!"}
              onClick={() => setShowEmojiRain(!showEmojiRain)}
            />
          </div>
        </SillyCard>
      </div>

      {showEmojiRain && <EmojiRain />}
    </div>
  );
}