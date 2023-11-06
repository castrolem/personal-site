import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import type {HTMLAttributes, MouseEvent, PropsWithChildren} from "react";
import { cn } from "../../utils/cn";

export function Spotlight({children, ...rest}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
                             currentTarget,
                             clientX,
                             clientY,

                           }: MouseEvent) {
    const {left, top} = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("bg-mongoose-50 perspective-1200 transition duration-75 ease-in-out group relative rounded-xl border p-8 shadow-md border-nobel-700/30 shadow-nobel-600/25", rest.className)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              hsla(30, 38%, 92%, 0.5),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
