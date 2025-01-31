import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the best programming language to start with?",
    answer:
      "It depends on your goals, but Python is often recommended for beginners due to its readability and simplicity.",
    value: "item-1",
  },
  {
    question: "How long does it take to learn programming?",
    answer:
      "The time it takes to learn programming varies greatly depending on the individual and the amount of time dedicated to learning. On average, it can take several months to a year to become proficient.",
    value: "item-2",
  },
  {
    question: "Do I need a computer science degree to become a programmer?",
    answer:
      "No, a computer science degree is not required to become a programmer. Many successful programmers are self-taught or have completed coding bootcamps.",
    value: "item-3",
  },
  {
    question: "What resources are available for learning programming?",
    answer:
      "There are many resources available, including online courses, tutorials, books, and coding bootcamps.",
    value: "item-4",
  },
  {
    question: "How do I stay motivated while learning programming?",
    answer:
      "Setting small, achievable goals, working on projects that interest you, and joining a community of learners can help you stay motivated.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
