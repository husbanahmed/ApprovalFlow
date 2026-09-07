export default function NewRequestPage() {
    return(
    <div className="max-w p-6 text-center">
        <h1 className="text-2xl font-bold text-center mt-2">
         Create a New Request
        </h1>
        <p>Submit a request for review</p>

        <div className="flex flex-col gap-4">
            <label className="text-left m-2" >
                Request Title
            </label>
            <input 
            className="border rounded-md px-3"
            placeholder=" Type Request here " />
        </div>

        <div className="">
            <p className="text-left m-4">Description</p>
            <textarea className="border w-full rounded-md"></textarea>
        </div>

        <div >
            <p>Priority</p>
            <select className="border" >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>
       
    </div>
 )
}
