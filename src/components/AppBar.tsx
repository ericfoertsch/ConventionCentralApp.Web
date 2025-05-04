import { useUserStore } from '../stores/UserStore'
import { NavLink } from 'react-router-dom'

export default function AppBar() {
  const { username } = useUserStore()

  interface NavLinkType {
    name: string
    path: string
  }

  const navLinks: NavLinkType[] = [{ name: 'Home', path: '/' }]

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-blue shadow-md h-16 flex items-center z-50">
      <nav className="flex justify-between items-center w-full px-6">
        {/* Logo or Username Avatar */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-teal flex items-center justify-center text-dark-blue font-bold text-lg hover:shadow-lg hover:shadow-teal/50 transition-shadow">
            {username[0]?.toUpperCase()}
          </div>
          <span className="text-white font-semibold text-xl">AppName</span>
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-teal font-semibold'
                    : 'text-white hover:text-teal transition-colors'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://chinwike.space"
              className="rounded-lg py-2 px-4 bg-[#1FABEB] text-dark-blue font-bold hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Further
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
