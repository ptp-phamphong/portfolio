"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem, Chip } from "@heroui/react";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";
import { SITE } from "@/data";
import { TechGroup } from "@/data/types";

interface SkillsProps {
  technologies: TechGroup[];
  title: string;
}

export const Skills = ({ technologies, title }: SkillsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="mdi:tools" title={title} />

    <Accordion
      defaultExpandedKeys={technologies.map(({ key }) => key)}
      selectionMode="multiple"
      variant="bordered"
    >
      {technologies.map(({ key, label, description }) => {
        // Tool names and icons are language-invariant, so they come from SITE.
        const tools = SITE.tech[key];

        return (
          <AccordionItem
            key={key}
            aria-label={label}
            classNames={{ trigger: "cursor-pointer py-4" }}
            title={label}
          >
            <p className="mb-4 text-sm text-muted-foreground">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
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

            {/* Decorative: the tool names are already listed as chips above. Each
                orbiting icon sits in a full-size absolute box (so it rotates around
                the container's centre), which means the boxes cover this whole area
                — they must not take pointer events or they swallow clicks. */}
            <div className="pointer-events-none relative h-[300px] w-full overflow-hidden">
              <OrbitingCircles
                className="h-full w-full"
                duration={20}
                radius={120}
              >
                {tools.map((tool) => (
                  <Icon
                    key={tool.name}
                    height={24}
                    icon={tool.icon}
                    width={24}
                  />
                ))}
              </OrbitingCircles>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  </motion.div>
);
