import { React, useState, useContext} from  "react";
import AppContext from "../../Context/Context";



function AddNewExperience({showModal}){

   const {addExperience} = useContext(AppContext)
   const [newExperiennce, setNewExperience] = useState({id:"", company:"", Role:"", jobDescription:"", startDate:"", endDate:""})

   const {company, Role, jobDescription, startDate, endDate} = newExperiennce

   const handleInputChange = (e) =>{
    const { name, value } = e.target
    setNewExperience({...newExperiennce, [name] : value})
   }

   
   const handleAddExperience = (e) =>{
    e.preventDefault()
    addExperience(company, Role, jobDescription, startDate, endDate)
    showModal(false)
}

return(
<>
<form action="">
<div className="flex flex-col gap-3">
     <div className='flex flex-col'>
        <label htmlFor="">Company</label>
         <input className='rounded-md border-gray-900/20 dark:border-slate-50/20  dark:bg-sky-300/[0.15]'
            type="text" 
            name="company" 
            id="" 
            value={company}
            onChange={(e)=>handleInputChange(e)}
            required
            minLength="3"
            
            />
     </div>
     <div className='flex flex-col'>
        <label htmlFor="">Role</label>
         <input className='rounded-md border-gray-900/20  dark:border-slate-50/20  dark:bg-sky-300/[0.15]'
            type="text" 
            name="Role" 
            id="role" 
            value={Role}
            onChange={(e)=>handleInputChange(e)}
            required
            minLength="3"
            
            />
     </div>
     <div className='flex flex-col'>
        <label htmlFor="">Job Description</label>
         <textarea  className=" resize-none outline-none text-justify indent-1   border-gray-900/20  dark:bg-sky-300/[0.15] dark:border-gray-100/20 text-gray-900 dark:text-gray-50  rounded "
         name="jobDescription" 
         id="" 
         value={jobDescription}
         onChange={(e)=>handleInputChange(e)}
         cols="30" 
         rows="5" 
         required
         maxLength="120"
         minLength="25"
         
         />
     </div>
     <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
            <label htmlFor="">Start Date</label>
            <input  className='rounded-md w-40 border-gray-900/20 dark:border-slate-50/20  dark:bg-sky-300/[0.15]'
            type="month" 
            name="startDate" 
            id="" 
            value={startDate}
            onChange={(e)=>handleInputChange(e)}
            required
            
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">End Date</label>
            <input  className='rounded-md w-40 border-gray-900/20 dark:border-slate-50/20  dark:bg-sky-300/[0.15]'
            type="month" 
            name="endDate" 
            id="" 
            value={endDate}
            onChange={(e)=>handleInputChange(e)}
            required
            
            />
        </div>
     </div>
 </div>
 <div className="flex items-center justify-end px-0 p-6 mt-6 gap-5 rounded-b">
                  <button
                    className="text-white bg-red-500/70  uppercase px-6 py-3 hover:bg-red-600 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   onClick={() =>showModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                  onClick={handleAddExperience}
                    className="bg-blue-700 text-white active:bg-emerald-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    
                  >
                    Save
                  </button>
                </div>
</form>
</>


)
}
export default AddNewExperience;