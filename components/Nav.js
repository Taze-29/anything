const Nav = () => {

  return (
    <div className="w-full h-28 flex justify-between">
      <div className="flex items-center">

        {/* Logo */}
        <div className="w-28 h-28 text-5xl flex justify-center items-center">
        🕸️
        </div>

        {/* Title */}      
        <h1 className="text-md text-center">Website Name</h1>      

      </div>

      {/* Menu */}
      <div className="flex justify-center items-center mr-6">
        <div className="w-16 h-16 border border-black rounded-full">

        </div>                
      </div>

    </div>
  )
}

export default Nav;