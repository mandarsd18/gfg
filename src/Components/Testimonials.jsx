import React from 'react'

const Testimonials = () => {
  return (
   <>
    <div className='w-full h-[40vh] '>
    <div className='w-[80%] mx-auto h-full items-center justify-center mt-9'>
    <span className="text-blue-600 font-semibold text-sm ">
              Company Progress
            </span>
            <div className="flex items-center justify-between mb-7 mt-3">
              <h1 className="text-3xl font-bold ">
                We're ready very Happy to <br /> share client's review{" "}
              </h1>
              <p className="text-sm w-[35%] text-gray-500 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos
                unde, dolores quam doloribus iste nesciunt deleniti ipsa sint
                iusto accusantium nulla repudiandae verit.
              </p>
            </div>
            <div  className='flex
             gap-4 items-center justify-center'>
                <div className='border-gray-300 border-2 p-4 rounded-sm hover:shadow-md'>
                   <p className='text-sm mb-2 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente velit dolorum ex quaerat, ullam fuga necessitatibus praesentium, officia eius obcaecati quam cumque cupiditate.</p>
                   <h1 className='text-sm font-bold '>-John Doe</h1>
                </div>

                <div className='border-gray-300 border-2 p-4 rounded-sm hover:shadow-md'>
                   <p className='text-sm mb-2 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente velit dolorum ex quaerat, ullam fuga necessitatibus praesentium, officia eius obcaecati quam cumque cupiditate.</p>
                   <h1 className='text-sm font-bold '>-John Doe</h1>
                </div>

                <div className='border-gray-300 border-2 p-4 rounded-sm hover:shadow-md'>
                   <p className='text-sm mb-2 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente velit dolorum ex quaerat, ullam fuga necessitatibus praesentium, officia eius obcaecati quam cumque cupiditate.</p>
                   <h1 className='text-sm font-bold '>-John Doe</h1>
                </div>
               
            </div>
    </div>

    </div>
   </>
  )
}

export default Testimonials
