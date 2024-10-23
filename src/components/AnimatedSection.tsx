import { AuditIcon } from "@/assets/images/auditProcess/auditIcon";
import { cn } from "@/helpers/classHelpers";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typography from "./Typography";
import { Button } from "./common/Button";

interface TProps {
  data: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
  position: "left" | "right";
}

const AnimatedSection = ({ data, position }: TProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3500);

    return () => clearTimeout(interval);
  }, [count]);

  const handleHover = (id: number) => {
    setCount(count !== id ? id : count);
  };

  return (
    <div className="flex gap-[1.5em] items-center my-[2em]">
      {position === "left" && (
        <div className="bg-[#030124] rounded-xl h-[570px] w-[65%] flex items-center justify-center relative">
          {data.map((el, i) => (
            <motion.div
              key={i}
              className="h-[85%] absolute w-[85%]" // Layer images on top of each other
              initial={{ opacity: 0 }} // Start with hidden
              animate={{ opacity: count === i ? 1 : 0 }} // Show current image, hide others
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
            >
              <img src={el.image} alt={`image-${i}`} className="h-[100%] w-[100%] object-center rounded-xl" />
            </motion.div>
          ))}
        </div>
      )}
      <div className="w-[35%] space-y-4">
        {data.map((el, i) => (
          <motion.div
            className={cn("border-[1px] rounded-xl p-6 space-y-3 transition-all duration-300 cursor-pointer bg-white ", count === i ? "" : "")}
            key={el.id}
            onClick={() => handleHover(i)}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleHover(count)}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <AuditIcon />

            <Typography className="font-semibold">{el.title}</Typography>
            {count === i ? (
              <motion.div
                // initial={{ opacity: 0, height: 0 }}
                // animate={{ opacity: 1, height: "auto" }}
                // exit={{ opacity: 0, height: 0 }}
                // transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-3"
              >
                <Typography>{el.subtitle}</Typography>

                <Button>Hire George Today</Button>
              </motion.div>
            ) : null}
          </motion.div>
        ))}
      </div>

      {position === "right" && (
        <div className="bg-[#030124] rounded-xl h-[570px] w-[65%] flex items-center justify-center relative">
          {data.map((el, i) => (
            <motion.div
              key={i}
              className="h-[85%] absolute w-[85%]" // Layer images on top of each other
              initial={{ opacity: 0 }} // Start with hidden
              animate={{ opacity: count === i ? 1 : 0 }} // Show current image, hide others
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
            >
              <img src={el.image} alt={`image-${i}`} className="h-[100%] w-[100%] object-center rounded-xl" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedSection;
