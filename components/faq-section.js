import * as React from "react";

export const FaqDescription = ({ children }) => (
  <p className="mt-4 text-lg text-gray-500">{children}</p>
);

export const FaqContent = ({ children }) => (
  <dl className="space-y-12">{children}</dl>
);

export const FaqQuestion = ({ children }) => (
  <dt className="text-lg leading-6 font-medium text-gray-900">{children}</dt>
);

export const FaqAnswer = ({ children }) => (
  <dd className="mt-2 text-base text-gray-500">{children}</dd>
);

export const FaqSection = ({ title, children }) => {
  let description, qa;
  React.Children.forEach(children, (child) => {
    switch (child.type) {
      case FaqDescription:
        description = child;
        break;
      case FaqContent:
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
