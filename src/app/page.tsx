import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
        <div className='relative z-30 p-5 text-2xl text-white bg-gray-500 bg-opacity-50 rounded-xl'>
          <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-gray-500 bg-opacity-100'>
            <div className='mx-auto text-center'>
              <h1 className='text-red-500 bg-white text-2xl font-bold sm:text-3xl mb-4'>
                ItalianAffairPizza.com
              </h1>
              <h2 className='text-white text-2xl font-bold sm:text-3xl'>
                DOMAIN FOR SALE
              </h2>
              <h2>Make an Offer</h2>

              <p className='mt-2 text-white text-sm'>
                This domain name is available for sale by its owner. If you
                require futher information please fill out the form below.
              </p>
            </div>

            <form
              name='contact'
              method='POST'
              // action='/success'
              className='mx-auto mb-0 mt-8 max-w-md space-y-4'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <div>
                <p className='hidden'>
                  <label>
                    Don&lsquo;t fill this out if you&lsquo;re human:{" "}
                    <input name='bot-field' />
                  </label>
                </p>
                <label htmlFor='name' className='sr-only'>
                  Name
                </label>

                <div className='relative'>
                  <input
                    type='name'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-gray-500 shadow-sm'
                    name='name'
                    aria-label='name'
                    placeholder='Enter name *'
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>

                <div className='relative'>
                  <input
                    type='email'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-gray-500 shadow-sm'
                    name='email'
                    aria-label='email'
                    placeholder='Enter email *'
                    required
                  />

                  <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor='phone' className='sr-only'>
                  Phone
                </label>

                <div className='relative'>
                  <input
                    type='phone'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-gray-500 shadow-sm'
                    name='phone'
                    aria-label='phone'
                    placeholder='Enter phone'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='message' className='sr-only'>
                  Write your proposal
                </label>

                <div className='relative'>
                  <textarea
                    // type='textarea'
                    className='w-full rounded-lg border-gray-500 p-4 pe-12 text-sm text-gray-500 shadow-sm form-control'
                    name='message'
                    aria-label='message'
                    placeholder='Write your proposal *'
                    required
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className='block text-sm font-medium text-white'>
                  Interests:
                </label>
                <div className='mt-1 grid grid-cols-2 gap-4'>
                  <label className='flex items-center text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox text-red-500'
                      name='interests[]'
                      value='domainname'
                    />
                    <span className='ml-2'>domain name</span>
                  </label>
                  <label className='flex items-center text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox text-red-500'
                      name='interests[]'
                      value='design'
                    />
                    <span className='ml-2'>Design</span>
                  </label>
                  <label className='flex items-center text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox text-red-500'
                      name='interests[]'
                      value='hosting'
                    />
                    <span className='ml-2'>Hosting</span>
                  </label>
                  <label className='flex items-center text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox text-red-500'
                      name='interests[]'
                      value='marketing'
                    />
                    <span className='ml-2'>Marketing</span>
                  </label>
                </div>
              </div>

              <div className='mb-4'>
                <label className='block text-sm font-medium text-white'>
                  Preferred Contact Method
                </label>
                <div className='mt-1 grid grid-cols-2 gap-4'>
                  <label className='flex items-center text-sm'>
                    <input
                      type='radio'
                      className='form-radio text-red-500'
                      name='contact_method'
                      value='email'
                    />
                    <span className='ml-2'>Email</span>
                  </label>
                  <label className='flex items-center text-sm'>
                    <input
                      type='radio'
                      className='form-radio text-red-500'
                      name='contact_method'
                      value='phone'
                    />
                    <span className='ml-2'>Phone</span>
                  </label>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white'
                  value='Submit Message'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          <source src='/assets/video/bg-video-pizza-opt.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
}
