import { useUserStore } from '../stores/UserStore'

export default function AppBar() {
  const { username } = useUserStore()

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-dark-blue shadow-md">
      {/* Logo and App Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/JAFAX_Logo.png" // Make sure your logo exists
          alt="Logo"
          className="w-8 h-8 object-contain"
          style={{ maxWidth: '10rem', maxHeight: '10rem' }}
        />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-teal flex items-center justify-center text-dark-blue font-bold transition-shadow duration-300 hover:shadow-lg hover:shadow-teal/50">
            {username[0]?.toUpperCase()}
        </div>
        <span className="text-white text-base">{username}</span>
      </div>
    </header>
  )
}
