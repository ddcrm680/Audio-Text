"use client";

import FAQItem from "./FAQItem";

interface FAQItemType {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItemType[];
}

export default function FAQAccordion({ items }: Props) {
  return (
    <div>
      {items.map((faq, index) => (
        <FAQItem
          key={index}
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
