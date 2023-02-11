import React from 'react';

const Question = () => {
    return (
        <div className='my-4'>
            <div className='w-[80%] bg-[#3272BA] h-10 ml-2 flex justify-between'>
                <p className='ml-2 text-white text-center font-semibold'>Q No:1</p>
                <select className=" mr-2 px-6 flex justify-center items-center  h-8">
  <option disabled selected>English</option>
  <option>Hindi</option>
  <option>Bangla</option>
  
</select>







            </div>
            <div>
            <table className=" w-[80%] h-full ml-2 mr-2 border-2 border-gray-300 ">
  <thead className=''>
    <tr >
      <th className='border-2 border-gray-300 p-2 text-start'>Question Instruction</th>
      <th className='border-2 border-gray-300 p-2 text-start'>Question</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='border-2 border-gray-300 p-2 w-[40%] '>
        <p className=''>Write a clear and concise question stem that poses a problem or scenario.
        Provide a list of answer choices in bullet points.
        Ensure that the answer choices are mutually exclusive, meaning that only one option is the correct answer.
        Make sure the answer choices are concise and clearly worded.
        </p>
      </td>
      <td className='border-2 border-gray-300 p-2 w-[40%]'>
        <p>What is the formula of kinetic energy?</p>
        <div className='my-2'>
       <div className='flex gap-2'>
       <input type="radio" name="radio-2" className="radio " checked  /> <span> (1/2)mv2</span><br></br>
       </div>
       <div className='flex gap-2 my-2'>
       <input type="radio" name="radio-2" className="radio "   /> <span>mv2</span><br></br>
       </div>
       <div className='flex gap-2 '>
       <input type="radio" name="radio-2" className="radio "   /> <span>mgh</span><br></br>
       </div>
       <div className='flex gap-2 my-2'>
       <input type="radio" name="radio-2" className="radio "   /> <span>p∫dv</span><br></br>
       </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Question;