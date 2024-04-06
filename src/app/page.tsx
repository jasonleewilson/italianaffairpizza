import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-half flex-col items-center justify-between p-24'>
      <h1>ItalianAffairPizza.com</h1>

      {/* <form
        name='contact'
        // action='/success'
        method='post'
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
        data-netlify='true'
      >
        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <div className='relative'>
            <input
              type='email'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              name='email'
              aria-label='email'
              placeholder='Enter email'
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
          <label htmlFor='message' className='sr-only'>
            Messgage
          </label>

          <div className='relative'>
            <textarea
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm form-control'
              name='message'
              aria-label='message'
              placeholder='Enter Message'
              required
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>
            Don't worry we will not spam you :)
          </p>

          <button
            type='submit'
            className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
            value='Submit Message'
          >
            Say Hi
          </button>
        </div>
      </form> */}
    </main>
  );
}
