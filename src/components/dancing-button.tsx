import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface DancingButtonProps {
  text?: string;
}

export function DancingButton({ text = "Нажми меня!" }: DancingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      animate={
        isHovered
          ? {
              y: [0, -20, 0],
              rotate: [0, -10, 10, -10, 0],
            }
          : {}
      }
      transition={{ duration: 0.5 }}
    >
      <Button
        size="lg"
        variant="default"
        className="group relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-30"
          animate={
            isHovered
              ? {
                  x: ["-100%", "100%"],
                }
              : {}
          }
          transition={{ duration: 1, repeat: Infinity }}
        />
        <Typography.Large>{text}</Typography.Large>
      </Button>
    </motion.div>
  );
}