import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a1a2f] to-[#050f1c] text-white py-12 w-full">
      <div className="w-full px-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] bg-clip-text text-transparent">Ahmet YILMAZ</h3>
            <p className="text-gray-400">Flutter Developer</p>
          </div>

          <div className="flex justify-center flex-wrap gap-3">
            <a
              href="https://www.instagram.com/ahmet.ylmzzz/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              📸 Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ahmeeet/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/Ahmetyilmazz"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition"
            >
              🐱 GitHub
            </a>
            <a
              href="mailto:ahmeet.ylmzzz@gmail.com"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              📧 Gmail
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center w-full max-w-6xl mx-auto">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} // Ahmet YILMAZ
          </p>
          <p className="text-gray-400 mt-2">- Her hakkı saklıdır. - All rights reserved. - </p>
        </div>
        
      </div>
    </footer>
  )
}