import * as React from "react";

type DescriptionProps = {
  children: React.ReactNode
}
const Description = ({ children }: DescriptionProps): JSX.Element => (
  <p className="mt-4 text-lg text-gray-500">{children}</p>
);

type ContentProps = {
  children: React.ReactNode
}
const Content = ({ children }: ContentProps): JSX.Element => (
  <dl className="space-y-12">{children}</dl>
);

type QuestionProps = {
  children: string
}
const Question = ({ children }: QuestionProps): JSX.Element => (
  <dt className="text-lg leading-6 font-medium text-gray-900">{children}</dt>
);

type AnswerProps = {
  children: string
}
const Answer = ({ children }: AnswerProps): JSX.Element => (
  <dd className="mt-2 text-base text-gray-500">{children}</dd>
);

type FaqProps = {
  title: string,
  children: React.ReactNode
}
export const Faq = ({ title, children }: FaqProps): JSX.Element => {
  let description, qa;
  React.Children.forEach(children, (child: React.ReactElement) => {
    switch (child.type) {
      case Description:
        description = child;
        break;
      case Content:
        qa = child;
        break;
    }
  });
  return (
    <div className="bg-white" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
            {description}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">{qa}</div>
        </div>
      </div>
    </div>
  );
};

Faq.Description = Description
Faq.Content = Content
Faq.Question = Question
Faq.Answer = Answer
