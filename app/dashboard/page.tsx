export default function DashboardPage(){
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your admin panel dashboard slot!</p>

      <div className= "grid grid-cols-1 md:grid-cols-4">
        <div className= "h-48 border-2 border-white flex items-center justify-center rounded-md text-blue-500 font-bold ">
          Total Request: 13
        </div>
        <div className= "border-2 border-white flex items-center justify-center rounded-md text-green-500 font-bold ">
          Approved: 6
        </div>
        <div className= "border-2 border-white flex items-center justify-center rounded-md text-pink-500 font-bold ">
          Pending: 5
        </div>
        <div className= "border-2 border-white flex items-center justify-center rounded-md text-red-500 font-bold ">
          Rejected: 3
        </div>
      </div>     

      <div className="flex items-center w-full justify-between" > 
        <p>Recent Requests</p> 
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">+ New</button>
      </div>    

    </div>
  );
}