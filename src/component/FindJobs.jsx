import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const jobs = [
  {
    name: 'Frontend Developer',
    description:
      'Build sleek user interfaces using React, Tailwind, and modern frontend tooling. Collaborate closely with designers and backend engineers.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Backend Engineer',
    description:
      'Design scalable APIs, manage databases, and implement core services using Node.js, Rust, or Go.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Product Designer',
    description:
      'Craft intuitive experiences from wireframes to polished UIs. Must have strong skills in Figma and user research.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Security Engineer',
    description:
      'Implement zero-trust systems, audit codebases, and ensure platform resilience. Familiarity with cryptography is a bonus.',
    icon: LockClosedIcon,
  },
  {
    name: "Residential Cleaner",
    description: "Responsible for deep-cleaning homes, apartments, and short-term rentals. Must be detail-oriented and have strong time management skills.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Office Janitor",
    description: "Maintain cleanliness and sanitation in office buildings. Duties include sweeping, mopping, trash removal, and bathroom upkeep.",
    icon: ArrowPathIcon,
  },
]

export default function FindJobs() {
  return (
    <div className="py-17 mt-0 lg:-mt-38 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-7">
        <div className="mx-auto max-w-2xl lg:text-center">

          <p className=" text-4xl font-body font-semibold tracking-tight text-center text-[#02101b] sm:text-5xl">
            Find Available Jobs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700 text-center">
            Passionate and  curious minds are needed  to help build the future. Explore job offers below.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-xl lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-y-16">
            {jobs.map((job) => (
              <div
                key={job.name}
                className="relative rounded-xl  text-[#f0f5ff] bg-[#02101b] p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <dt className="flex items-center gap-x-4 text-lg font-semibold ">
                  <job.icon className="h-6 w-6 text-[#f14126] font-bold" aria-hidden="true" />
                  {job.name}
                </dt>
                <dd className="mt-2 text-base ">{job.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
