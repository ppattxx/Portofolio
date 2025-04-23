"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxStars?: number;
}

// Posisi dan arah random
const getRandomStartPoint = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const angle = Math.random() * 360;
  return { x, y, angle };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 0.2,
  maxSpeed = 0.5,
  minDelay = 4000,
  maxDelay = 8000,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 8,
  starHeight = 1,
  className,
  maxStars = 5,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // Gerakan
  useEffect(() => {
    let animationFrame: number;

    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX =
              star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            if (
              newX < -50 ||
              newX > window.innerWidth + 50 ||
              newY < -50 ||
              newY > window.innerHeight + 50
            ) {
              return null; // hapus yang keluar dari layar
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter(Boolean) as ShootingStar[]
      );

      animationFrame = requestAnimationFrame(moveStars);
    };

    animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Spawn awal + berulang jika kurang dari maxStars
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const spawnStar = () => {
      setStars((prev) => {
        if (prev.length >= maxStars) return prev;

        const { x, y, angle } = getRandomStartPoint();
        const newStar: ShootingStar = {
          id: Date.now() + Math.random(),
          x,
          y,
          angle,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };

        return [...prev, newStar];
      });

      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(spawnStar, delay);
    };

    // Jalankan spawner terus menerus
    const loopSpawner = () => {
      spawnStar();
      timeoutId = setTimeout(loopSpawner, 1000);
    };

    loopSpawner();

    return () => clearTimeout(timeoutId);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale * 3}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
