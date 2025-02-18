import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface SillyCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function SillyCard({ title, description, children }: SillyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"
          animate={
            isHovered
              ? {
                  opacity: [0, 1],
                  scale: [0.95, 1],
                }
              : { opacity: 0 }
          }
        />
        <CardHeader>
          <CardTitle>
            <Typography.H3>{title}</Typography.H3>
          </CardTitle>
          <CardDescription>
            <Typography.Muted>{description}</Typography.Muted>
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}