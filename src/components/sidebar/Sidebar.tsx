

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-blue-800 p-5">
          <div className="flex items-center space-x-2 text-white mb-6">
          <img
  src="https://file.rendit.io/n/1R88qtOO0C73JDrTiRAw.svg"
  alt="Frame1" className="h-8 w-8" />
           
          </div>
          <div className="space-y-2">
            <a className="flex items-center space-x-2 text-white p-2 rounded hover:bg-blue-700" href="#">
              <img
  src="https://file.rendit.io/n/LGWMYwGeb7x0pwWQ3gb3.svg"
  alt="Vuesaxlinearhouse" className="h-6 w-6" />
              <span>Home</span>
            </a>
            <a className="flex items-center space-x-2 text-white p-2 rounded bg-blue-900" href="#">
              <img
  src="https://file.rendit.io/n/Nuh6n8Vatz2eM9PJfkUf.svg"
  alt="Vuesaxboldvolumehigh"className="h-6 w-6" />
              <span>Campaign</span>
            </a>
            <a className="flex items-center space-x-2 text-white p-2 rounded hover:bg-blue-700" href="#">
            <img
  src="https://file.rendit.io/n/s3uorzEGRF9hwdTGOWpp.svg"
  alt="Vuesaxoutlinebag"
  id="VuesaxoutlinebagRoot" className="h-6 w-6" />
              <span>Products</span>
            </a>
            <a className="flex items-center space-x-2 text-white p-2 rounded hover:bg-blue-700" href="#">
              <UsersIcon className="h-6 w-6" />
              <span>Customers</span>
            </a>
          </div>
        </nav>
        
  );
};

export default Sidebar;
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
