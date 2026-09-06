"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/data";

export const Footer = () => {
  const { dict } = useI18n();
  const { connectTitle, contactTitle, description } = dict.footer;
  const socialLinks = Object.values(SITE.social);

  return (
    <footer className="bg-content1 py-12">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{connectTitle}</h3>
            <p className="text-foreground-600 mb-4 max-w-md">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.url}
                  aria-label={social.handle}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button isIconOnly variant="light">
                    <Icon className="w-5 h-5" icon={social.icon} />
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{contactTitle}</h4>
            <ul className="space-y-2 text-foreground-600">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" />
                {dict.contact.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-8 text-center text-foreground-500">
          <p>
            © {new Date().getFullYear()} {SITE.name}. made with &hearts;.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
