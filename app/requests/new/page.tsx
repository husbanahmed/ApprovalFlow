export default function NewRequestPage() {
    return(
    <div className="max-w-2xl p-6 text-center">
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
       
    </div>
 )
}
