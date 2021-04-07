import * as React from 'react'
import { Alert } from './alert'
import Image from 'next/image'

export const HeroSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(
      'Mohon maaf, sitem pendaftaran peserta masih sedang dalam persiapan. Nantikan pengumuman berikutnya di Instagram @vika.riandini setelah Ramadhan.'
    )
  }

  const handleWatchVideo = () => {
    window.open('https://rbagi.id/youtube', '_blank')
  }

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
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <Alert />
        </div>
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
                <form onSubmit={handleSubmit} className='mt-3 sm:flex'>
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
                  onClick={handleWatchVideo}
                >
                  <span className='sr-only'>Tonton video ini untuk mengetahui lebih lanjut</span>
                  <Image
                    className='w-full'
                    src='/images/tahun-prasekolahku-video-preview.jpeg'
                    alt='Tahun Prasekolahku Video Preview'
                    height={959}
                    width={1280}
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
