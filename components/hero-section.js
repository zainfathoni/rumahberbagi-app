import { Transition } from '@headlessui/react'
import * as React from 'react'
import { Alert } from './alert'

export const HeroSection = ({ cta: [ctaTitle, ctaHref], menu }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='hidden lg:block lg:absolute lg:inset-0' aria-hidden='true'>
        <svg
          className='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8'
          width='640'
          height='784'
          fill='none'
          viewBox='0 0 640 784'
        >
          <defs>
            <pattern
              id='9ebea6f4-a1f5-4d96-8c4e-4c2abf658047'
              x='118'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
            </pattern>
          </defs>
          <rect y='72' width='640' height='640' className='text-gray-50' fill='currentColor' />
          <rect x='118' width='404' height='784' fill='url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)' />
        </svg>
      </div>
      <div className='relative pt-6 pb-16 sm:pb-24 lg:pb-32'>
        <nav className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6' aria-label='Global'>
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#'>
                <span className='sr-only'>Rumah Berbagi</span>
                <img className='h-8 w-auto sm:h-10' src='/rumah-berbagi.svg' alt='Logo Rumah Berbagi' />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  aria-expanded={isOpen ? 'true' : 'false'}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden md:block md:ml-10 md:space-x-10'>
              {Object.entries(menu).map(([title, href]) => (
                <a key={title} href={href} className='font-medium text-gray-500 hover:text-gray-900'>
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className='hidden md:block text-right'>
            <span className='inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5'>
              <a
                href={ctaHref}
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50'
              >
                {ctaTitle}
              </a>
            </span>
          </div>
        </nav>

        <Transition
          show={isOpen}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img className='h-8 w-auto' src='/rumah-berbagi.svg' alt='Logo Rumah Berbagi' />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className='sr-only'>Close main menu</span>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {Object.entries(menu).map(([title, href]) => (
                  <a
                    key={title}
                    href={href}
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  >
                    {title}
                  </a>
                ))}
              </div>
              <a
                href={ctaHref}
                className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
              >
                {ctaTitle}
              </a>
            </div>
          </div>
        </Transition>

        <header className='mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mt-8'>
          <Alert />
        </header>
        <main className='mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mt-8'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <h1>
                <span className='block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base'>
                  Kelas Rumah Berbagi
                </span>
                <span className='mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl'>
                  <span className='block text-gray-900'>Tahun</span>
                  <span className='block text-indigo-600'>Prasekolahku</span>
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Membangun fondasi pendidikan prasekolah PAUD dan TK dengan dasar-dasar filosofi Charlotte Mason
              </p>
              <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <p className='text-base font-medium text-gray-900'>
                  Daftar di sini untuk mendapatkan notifikasi ketika kelas siap diluncurkan.
                </p>
                <form action='#' method='POST' className='mt-3 sm:flex'>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300'
                    placeholder='Masukkan alamat email Anda'
                  />
                  <button
                    type='submit'
                    className='mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto'
                  >
                    Kabari saya
                  </button>
                </form>
                <p className='mt-3 text-sm text-gray-500'>
                  Kami peduli dengan perlindungan data Anda. Baca{' '}
                  <a href='#' className='font-medium text-gray-900 underline'>
                    Kebijakan Privasi
                  </a>{' '}
                  kami di sini.
                </p>
              </div>
            </div>
            <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <svg
                className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
                width='640'
                height='784'
                fill='none'
                viewBox='0 0 640 784'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
                    x='118'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect y='72' width='640' height='640' className='text-gray-50' fill='currentColor' />
                <rect x='118' width='404' height='784' fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)' />
              </svg>
              <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
                <button
                  type='button'
                  className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Tonton video ini untuk mengetahui lebih lanjut</span>
                  <img
                    className='w-full'
                    src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt=''
                  />
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center' aria-hidden='true'>
                    <svg className='h-20 w-20 text-indigo-500' fill='currentColor' viewBox='0 0 84 84'>
                      <circle opacity='0.9' cx='42' cy='42' r='42' fill='white' />
                      <path d='M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z' />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
