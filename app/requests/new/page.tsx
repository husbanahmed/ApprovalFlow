export default function NewRequestPage() {
    return(
    <div className="max-w-auto p-6 text-center">
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

        <div>
            <p className="text-left m-4">Description</p>
            <textarea className="border w-full rounded-md px-3"></textarea>
        </div>

        <div className="text-left m-4">
            <p>Priority</p>
            <select className="border" >
                <option value=""hidden> Please choose an option</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>

        <div className="flex flex-row justify-center gap-4 mt-6">
            <button className="rounded-md border py-4 px-4 bg-red-600 hover:bg-red-300 text-white"> Cancel </button>
            <button className="rounded-md border py-4 px-4 bg-blue-600 hover:bg-blue-300 text-white"> Submit </button>
        </div>
       
    </div>
 )
}
