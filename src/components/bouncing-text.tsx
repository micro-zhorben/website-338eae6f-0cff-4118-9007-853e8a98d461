import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface BouncingTextProps {
  text: string;
}

export function BouncingText({ text }: BouncingTextProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {text.split("").map((char, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Typography.Large
            className="cursor-pointer select-none"
            style={{
              color: `hsl(${index * (360 / text.length)}, 70%, 50%)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </Typography.Large>
        </motion.div>
      ))}
    </div>
  );
}