import * as React from 'react'

export const ArticleSection = () => (
  <div className='bg-white overflow-hidden'>
    <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
      <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
        <div>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>Free Download</h2>
          <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            15 days countdown to Ramadhan
          </h3>
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
          <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
            <figure>
              <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                <img
                  className='rounded-lg shadow-lg object-cover object-center'
                  src='/ramadhan-planner.jpeg'
                  alt='Ramadhan Planner'
                  width='2160'
                  height='1620'
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
                    fill-rule='evenodd'
                    d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Photograph by Marcus O’Leary</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className='mt-8 lg:mt-0'>
          <div className='text-base max-w-prose mx-auto lg:max-w-none'>
            <p className='text-lg text-gray-500'>Sesaat lagi Ramadhan tiba.</p>
          </div>
          <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
            <p>
              Kami ingin Ramadhan tahun ini jadi lebih bermakna, mindful. Bukan sekadar mencapai target banyaknya
              ibadah, tetapi juga menjalin hubungan yang lebih dekat dengen Allah SWT dan Rasulullah saw.
            </p>
            <p>
              Untuk mencapai itu, kami baru saja membuat rencana 15 hari hitung mundur Ramadhan. Setiap harinya ada
              waktu khusus yang kami dedikasikan untuk mempersiapkan bulan suci ini.
            </p>
            <p>
              Gimana dengan kalian? Apa yang sudah teman-teman persiapkan? Atau masih bingung bagaimana menyiapkannya?
            </p>
            <p>
              Nah, jika masih bingung, silakan download rencana menyambut ramadhan keluarga kami. Siapa tahu bisa
              membantu. Kami buat ini jadi dua versi Bahasa inggris dan Bahasa indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
