"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
const Doubts = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="I don't know anything about Coding, is this batch good for me?"
        className="font-semibold"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Do I need to be a Computer Science student to take up this batch?"
        className="font-semibold"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Can I study from Alpha plus with my college classes?"
        className="font-semibold"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default Doubts;
