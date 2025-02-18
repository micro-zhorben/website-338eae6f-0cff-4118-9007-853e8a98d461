import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee as CoffeeIcon, Heart } from "lucide-react";
import { SillyCard } from "@/components/silly-card";
import { DancingButton } from "@/components/dancing-button";
import { Typography } from "@/components/ui/typography";

export function Coffee() {
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [isHappy, setIsHappy] = useState(false);

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Typography.H1>Кофейная страница ☕</Typography.H1>
        <Typography.Lead>
          Здесь мы делаем вид, что варим виртуальный кофе!
        </Typography.Lead>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SillyCard
          title="Счетчик кофе"
          description="Сколько чашек ты уже выпил?"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: coffeeCount * 360 }}
              transition={{ duration: 0.5 }}
            >
              <CoffeeIcon className="w-16 h-16 text-primary" />
            </motion.div>
            <Typography.H2>{coffeeCount} чашек</Typography.H2>
            <DancingButton
              text="Ещё кофе!"
              onClick={() => setCoffeeCount((prev) => prev + 1)}
            />
          </div>
        </SillyCard>

        <SillyCard
          title="Настроение бариста"
          description="Попробуй сделать бариста счастливым!"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={isHappy ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              <Heart
                className={`w-16 h-16 ${
                  isHappy ? "text-red-500" : "text-muted-foreground"
                }`}
              />
            </motion.div>
            <DancingButton
              text={isHappy ? "Бариста счастлив!" : "Подбодрить бариста"}
              onClick={() => setIsHappy(!isHappy)}
            />
          </div>
        </SillyCard>

        <SillyCard
          title="Кофейная мудрость"
          description="Случайные факты о кофе"
        >
          <div className="flex flex-col items-center gap-4">
            <Typography.P className="text-center italic">
              "Жизнь слишком коротка для плохого кофе!"
            </Typography.P>
          </div>
        </SillyCard>
      </div>
    </div>
  );
}