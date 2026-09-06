"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { useI18n } from "@/components/i18n-provider";

export const FocusSection = () => {
  const { dict } = useI18n();
  const { sectionTitle, sectionDescription, items } = dict.home.focus;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-content2">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4 gradient"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full border-none shadow-md">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary-100">
                      <Icon
                        className="w-6 h-6 text-primary-500"
                        icon={item.icon}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-foreground-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
