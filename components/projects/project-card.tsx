"use client";

import { Button, Card, CardBody, Chip, Link, Snippet } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ThemedImage } from "@/components/themed-image";
import { SITE } from "@/data";
import { Dictionary, ProjectContent } from "@/data/types";

type ProjectFacts = (typeof SITE.projects)[number];

interface ProjectCardProps {
  content: ProjectContent;
  facts: ProjectFacts;
  labels: Dictionary["projects"]["labels"];
}

/** Type guards: only some projects carry a demo login / a live URL. */
const hasDemo = (
  facts: ProjectFacts,
): facts is Extract<ProjectFacts, { demo: unknown }> => "demo" in facts;

const hasLive = (
  facts: ProjectFacts,
): facts is Extract<ProjectFacts, { live: unknown }> => "live" in facts;

export const ProjectCard = ({ content, facts, labels }: ProjectCardProps) => (
  <Card className="h-full overflow-hidden border border-divider" shadow="none">
    {/* Real screenshot of the running app, cropped to a banner. object-top
        keeps the app's header/nav in frame. Light and dark shots swap with the
        theme. A hairline ends the banner, not a fade: a fade to the card
        colour smears grey wherever image and card differ in brightness. */}
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-divider">
      <ThemedImage
        fill
        alt={content.title}
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 768px"
        src={facts.image}
      />
    </div>

    <CardBody className="flex flex-col gap-5 p-6 md:p-8">
      <h2 className="text-2xl font-medium">{content.title}</h2>

      <p className="leading-relaxed text-foreground-600">
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
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground-700">
            <Icon
              className="h-4 w-4 text-foreground-500"
              icon="lucide:key-round"
            />
            {labels.demoAccount}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <span className="mb-1 block text-xs text-foreground-500">
                {labels.username}
              </span>
              <Snippet hideSymbol size="sm" variant="bordered">
                {facts.demo.username}
              </Snippet>
            </div>
            <div className="flex-1">
              <span className="mb-1 block text-xs text-foreground-500">
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
            isExternal
            as={Link}
            className="w-full sm:w-auto"
            color="primary"
            endContent={<Icon icon="lucide:external-link" />}
            href={facts.demo.url}
          >
            {labels.visitDemo}
          </Button>
        )}
        {hasLive(facts) && (
          <Button
            isExternal
            as={Link}
            className="w-full sm:w-auto"
            color="primary"
            endContent={<Icon icon="lucide:external-link" />}
            href={facts.live.url}
          >
            {labels.visitSite}
          </Button>
        )}
        <Button
          isExternal
          as={Link}
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
);
