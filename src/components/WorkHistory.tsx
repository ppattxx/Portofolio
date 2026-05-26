"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div className="space-y-5 md:space-y-6">
      {timeline.map((item, index) => (
        <div
          key={`timeline-${index}`}
          className="glass rounded-2xl p-5 md:p-6 card-hover"
        >
          <p className="text-xs md:text-sm text-[#c7c7c7] mb-1">{item.date}</p>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            {item.company}
          </h3>
          <p className="text-sm font-medium text-white/70 mb-3">
            {item.title}
          </p>
          <p className="text-xs md:text-sm text-[#c7c7c7]/80 mb-4 leading-relaxed">
            {item.description}
          </p>
          <ul className="space-y-2">
            {item.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex gap-2 text-xs md:text-sm text-[#c7c7c7]/80">
                <IconCircleCheckFilled className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 shrink-0 text-white/40" />
                <span className="leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
