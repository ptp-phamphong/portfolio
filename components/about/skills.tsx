"use client";

import { Icon } from "@iconify/react";
import { Chip } from "@heroui/react";

import { AboutSection } from "@/components/about/about-section";
import { SITE } from "@/data";
import { TechGroup } from "@/data/types";

interface SkillsProps {
  technologies: TechGroup[];
  title: string;
}

export const Skills = ({ technologies, title }: SkillsProps) => (
  <AboutSection title={title}>
    <ul className="flex flex-col divide-y divide-divider">
      {technologies.map(({ key, label, description }) => (
        <li key={key} className="py-6 first:pt-0 last:pb-0">
          <h3 className="font-medium">{label}</h3>
          <p className="mt-1 text-sm text-foreground-600">{description}</p>

          {/* Tool names and icons are language-invariant, so they come from SITE. */}
          <div className="mt-4 flex flex-wrap gap-2">
            {SITE.tech[key].map((tool) => (
              <Chip
                key={tool.name}
                startContent={
                  <Icon
                    className="ml-1"
                    height={16}
                    icon={tool.icon}
                    width={16}
                  />
                }
                variant="flat"
              >
                {tool.name}
              </Chip>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </AboutSection>
);
