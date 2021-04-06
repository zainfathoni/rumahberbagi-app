import * as React from 'react'
import Image from 'next/image'
import { analytics } from '../utils/firebase'

export const ArticleCategory = ({ children }) => (
  <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>{children}</h2>
)

export const ArticleTitle = ({ children }) => (
  <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>{children}</h3>
)

export const ArticleFigure = ({ children, src, alt, width, height }) => (
  <figure>
    <div className='lg:aspect-none'>
      <Image
        className='rounded-lg shadow-lg object-cover object-center'
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
    <figcaption className='mt-3 flex text-sm text-gray-500'>
      <svg
        className='flex-none w-5 h-5 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path
          fillRule='evenodd'
          d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
          clipRule='evenodd'
        />
      </svg>
      <span className='ml-2'>{children}</span>
    </figcaption>
  </figure>
)

export const ArticleSubtitle = ({ children }) => (
  <div className='text-base max-w-prose mx-auto lg:max-w-none'>
    <p className='text-lg text-gray-500'>{children}</p>
  </div>
)

export const ArticleContent = ({ children }) => (
  <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
    {children}
  </div>
)

const logFileDownload = (fileName) => analytics().logEvent('file_download', { file_name: fileName })

export const ArticleCTA = ({ children, href, download }) => (
  <div className='rounded-md shadow'>
    <a
      href={href}
      className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
      download={download}
      onClick={() => logFileDownload(download)}
    >
      {children}
    </a>
  </div>
)

export const ArticleCTASecondary = ({ children, href, download }) => (
  <div className='rounded-md shadow ml-4'>
    <a
      href={href}
      className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50'
      download={download}
      onClick={() => logFileDownload(download)}
    >
      {children}
    </a>
  </div>
)

export const ArticleSection = ({ children }) => {
  let category, title, figure, subtitle, content, cta, ctaSecondary
  React.Children.forEach(children, (child) => {
    switch (child.type) {
      case ArticleCategory:
        category = child
        break
      case ArticleTitle:
        title = child
        break
      case ArticleFigure:
        figure = child
        break
      case ArticleSubtitle:
        subtitle = child
        break
      case ArticleContent:
        content = child
        break
      case ArticleCTA:
        cta = child
        break
      case ArticleCTASecondary:
        ctaSecondary = child
        break
    }
  })

  return (
    <div className='bg-gray-50 overflow-hidden'>
      <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
        <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
          <div>
            {category}
            {title}
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:row-start-1 lg:col-start-2'>
            <svg
              className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
            </svg>
            <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>{figure}</div>
          </div>
          <div className='mt-8 lg:mt-0'>
            {subtitle}
            {content}
            <div className='mt-8 flex text-base max-w-prose mx-auto lg:max-w-none'>
              {cta}
              {ctaSecondary}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
