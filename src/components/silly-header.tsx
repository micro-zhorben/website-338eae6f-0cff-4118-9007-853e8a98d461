import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Home, Coffee, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";

export function SillyHeader() {
  const [bounce, setBounce] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          animate={{ rotate: bounce ? [0, -10, 10, -10, 10, 0] : 0 }}
          onMouseEnter={() => setBounce(true)}
          onMouseLeave={() => setBounce(false)}
          className="flex items-center gap-2"
        >
          <Sparkles className="h-6 w-6 text-primary" />
          <Typography.H3>Глупый Сайт</Typography.H3>
        </motion.div>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary">
            <Button variant="ghost" className="gap-2">
              <Home className="h-4 w-4" />
              Домой
            </Button>
          </Link>
          <Link to="/coffee" className="text-foreground hover:text-primary">
            <Button variant="ghost" className="gap-2">
              <Coffee className="h-4 w-4" />
              Кофе
            </Button>
          </Link>
          <Link to="/pizza" className="text-foreground hover:text-primary">
            <Button variant="ghost" className="gap-2">
              <Pizza className="h-4 w-4" />
              Пицца
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}