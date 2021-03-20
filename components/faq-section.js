import * as React from 'react'

export const FaqSection = ({ title, children }) => (
  <div class='bg-white'>
    <div class='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
      <div class='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div>
          <h2 class='text-3xl font-extrabold text-gray-900'>{title}</h2>
          <p class='mt-4 text-lg text-gray-500'>
            Can’t find the answer you’re looking for? Reach out to our{' '}
            <a href='#' class='font-medium text-indigo-600 hover:text-indigo-500'>
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <div class='mt-12 lg:mt-0 lg:col-span-2'>
          <dl class='space-y-12'>
            <div>
              <dt class='text-lg leading-6 font-medium text-gray-900'>How do you make holy water?</dt>
              <dd class='mt-2 text-base text-gray-500'>
                You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
                laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt class='text-lg leading-6 font-medium text-gray-900'>What&#039;s the best thing about Switzerland?</dt>
              <dd class='mt-2 text-base text-gray-500'>
                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas cupiditate laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt class='text-lg leading-6 font-medium text-gray-900'>
                What do you call someone with no body and no nose?
              </dt>
              <dd class='mt-2 text-base text-gray-500'>
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>

            <div>
              <dt class='text-lg leading-6 font-medium text-gray-900'>
                Why do you never see elephants hiding in trees?
              </dt>
              <dd class='mt-2 text-base text-gray-500'>
                Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cupiditate laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
)
