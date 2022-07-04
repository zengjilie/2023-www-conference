// import Image from 'next/image';

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="/www-logo.svg" alt="" width={180} />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="nav-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      {/* <a href="" className="link">Authors</a>
      <a href="" className="link">Attendees</a>
      <a href="" className="link">Proceeding</a>
      <a href="" className="link">Sponsors</a>
      <a href="" className="link">About</a> */}
    </nav>
  )
}

export default NavBar