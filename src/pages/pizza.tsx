import { useState } from "react";
import { motion } from "framer-motion";
import { Pizza as PizzaIcon, Cheese, Sandwich } from "lucide-react";
import { SillyCard } from "@/components/silly-card";
import { DancingButton } from "@/components/dancing-button";
import { Typography } from "@/components/ui/typography";

export function Pizza() {
  const [toppings, setToppings] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  const addTopping = (topping: string) => {
    setToppings((prev) => [...prev, topping]);
  };

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Typography.H1>Пиццерия "У Глупого Повара" 🍕</Typography.H1>
        <Typography.Lead>
          Здесь мы готовим самую воображаемую пиццу в мире!
        </Typography.Lead>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SillyCard
          title="Собери свою пиццу"
          description="Добавляй что хочешь, это же воображаемая пицца!"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: isSpinning ? 360 : 0 }}
              transition={{ duration: 2, repeat: isSpinning ? Infinity : 0 }}
            >
              <PizzaIcon className="w-16 h-16 text-primary" />
            </motion.div>
            <Typography.P className="text-center">
              Топпингов: {toppings.length}
            </Typography.P>
            <DancingButton
              text="Крутить пиццу!"
              onClick={() => setIsSpinning(!isSpinning)}
            />
          </div>
        </SillyCard>

        <SillyCard
          title="Добавить топпинги"
          description="Нажми на ингредиенты, чтобы добавить их"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => addTopping("Сыр")}
                className="p-2"
              >
                <Cheese className="w-8 h-8 text-yellow-500" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => addTopping("Пепперони")}
                className="p-2"
              >
                <Sandwich className="w-8 h-8 text-red-500" />
              </motion.button>
            </div>
            <Typography.List>
              {toppings.map((topping, index) => (
                <li key={index}>{topping}</li>
              ))}
            </Typography.List>
          </div>
        </SillyCard>

        <SillyCard
          title="Пицца дня"
          description="Очень особенная пицца!"
        >
          <div className="flex flex-col items-center gap-4">
            <Typography.P className="text-center italic">
              "Пицца с ананасами - это преступление против человечества!"
            </Typography.P>
            <DancingButton text="Согласен!" />
          </div>
        </SillyCard>
      </div>
    </div>
  );
}