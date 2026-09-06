"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Card, CardBody, Chip, Link, Snippet } from "@heroui/react";
import { Icon } from "@iconify/react";

import { SITE } from "@/data";
import { Dictionary, ProjectContent } from "@/data/types";

type ProjectFacts = (typeof SITE.projects)[number];

interface ProjectCardProps {
  content: ProjectContent;
  facts: ProjectFacts;
  labels: Dictionary["projects"]["labels"];
  index: number;
}

/** Type guards: only some projects carry a demo login / a live URL. */
const hasDemo = (
  facts: ProjectFacts,
): facts is Extract<ProjectFacts, { demo: unknown }> => "demo" in facts;

const hasLive = (
  facts: ProjectFacts,
): facts is Extract<ProjectFacts, { live: unknown }> => "live" in facts;

export const ProjectCard = ({
  content,
  facts,
  labels,
  index,
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="h-full border-none shadow-md overflow-hidden">
      {/* Real screenshot of the running app, cropped to a banner. object-top
          keeps the app's header/nav in frame; the gradient fades it into the
          card body so text below stays readable. */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-divider">
        <Image
          alt={content.title}
          className="object-cover object-top"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          src={facts.image}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-content1 to-transparent" />
      </div>

      <CardBody className="p-6 md:p-8 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-primary-100 text-primary-500">
            <Icon className="w-7 h-7" icon={facts.icon} />
          </div>
          <h3 className="text-2xl font-bold">{content.title}</h3>
        </div>

        <p className="text-foreground-600 leading-relaxed">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {facts.tech.map((tool) => (
            <Chip
              key={tool.name}
              startContent={
                <Icon className="ml-1" height={16} icon={tool.icon} width={16} />
              }
              variant="flat"
            >
              {tool.name}
            </Chip>
          ))}
        </div>

        {hasDemo(facts) && (
          <div className="rounded-medium border border-divider bg-content2/60 p-4">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground-700">
              <Icon className="w-4 h-4 text-primary-500" icon="lucide:key-round" />
              {labels.demoAccount}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <span className="mb-1 block text-xs uppercase tracking-wide text-foreground-500">
                  {labels.username}
                </span>
                <Snippet hideSymbol size="sm" variant="bordered">
                  {facts.demo.username}
                </Snippet>
              </div>
              <div className="flex-1">
                <span className="mb-1 block text-xs uppercase tracking-wide text-foreground-500">
                  {labels.password}
                </span>
                <Snippet hideSymbol size="sm" variant="bordered">
                  {facts.demo.password}
                </Snippet>
              </div>
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
          {hasDemo(facts) && (
            <Button
              as={Link}
              isExternal
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:external-link" />}
              href={facts.demo.url}
              variant="shadow"
            >
              {labels.visitDemo}
            </Button>
          )}
          {hasLive(facts) && (
            <Button
              as={Link}
              isExternal
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:external-link" />}
              href={facts.live.url}
              variant="shadow"
            >
              {labels.visitSite}
            </Button>
          )}
          <Button
            as={Link}
            isExternal
            className="w-full sm:w-auto"
            endContent={<Icon icon="mdi:github" />}
            href={facts.repo}
            variant="bordered"
          >
            {labels.viewCode}
          </Button>
        </div>
      </CardBody>
    </Card>
  </motion.div>
);
