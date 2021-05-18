import { AcademicCapIcon, BookOpenIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline'

const timeline = [
  {
    batch: 1,
    content: 'Pendaftaran dan persiapan grup WhatsApp',
    date: '19—26 Mei',
    datetime: '2021-05-19/2021-05-26',
    icon: LoginIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    batch: 1,
    content: 'Pembagian handout, planner, dan printables',
    date: '27—28 Mei',
    datetime: '2021-05-27/2021-05-28',
    icon: BookOpenIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    batch: 1,
    content: 'Materi kelas',
    date: '29—30 Mei',
    datetime: '2021-05-29/2021-05-30',
    icon: AcademicCapIcon,
    iconBackground: 'bg-green-500',
  },
  {
    batch: 2,
    content: 'Pendaftaran dan persiapan grup WhatsApp',
    date: '1—8 Juni',
    datetime: '2021-06-01/2021-06-08',
    icon: LoginIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    batch: 2,
    content: 'Pembagian handout, planner, dan printables',
    date: '9—11 Juni',
    datetime: '2021-06-09/2021-06-11',
    icon: BookOpenIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    batch: 2,
    content: 'Materi kelas',
    date: '12—13 Juni',
    datetime: '2021-06-12/2021-06-13',
    icon: AcademicCapIcon,
    iconBackground: 'bg-green-500',
  },
  {
    batch: 1,
    content: 'Pembubaran grup WhatsApp',
    date: '19 Juni',
    datetime: '2021-06-19',
    icon: LogoutIcon,
    iconBackground: 'bg-red-500'
  },
  {
    batch: 2,
    content: 'Pembubaran grup WhatsApp',
    date: '19 Juli',
    datetime: '2021-07-19',
    icon: LogoutIcon,
    iconBackground: 'bg-red-500'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Timeline = (): JSX.Element => {
  return (
    <div className="bg-white" id="jadwal">
      <div className="max-w-xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Timeline</h2>
        </div>
        <div className="flow-root">
          <ul className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.content}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                        )}
                      >
                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {event.content}{' '}
                          <span className="text-gray-500">(Batch {event.batch})</span>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
       </div>
    </div>
  )
}
