import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Presentation() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: 'who', title: 'Who is Shota Imai?' },
    { id: 'history', title: 'History of 3D Scanning' },
    { id: 'now', title: "What's Happening Now?" },
    { id: 'uphash', title: 'Why UPHASH Matters' },
    { id: 'next', title: "What's Next?" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const currentSection = Math.floor(scrollPosition / windowHeight)
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>The Future of Spatial Capture – A Conversation with Shota Imai</title>
        <meta name="description" content="Exploring the evolution and future of 3D scanning and spatial capture technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">Spatial Capture</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === index
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Who is Shota Imai? */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-6">
              <span className="text-gray-400 text-sm">Profile Photo</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Who is Shota Imai?</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Ex-Fortnite Japan launch team (Epic Games), CG/VFX background (SVA NY), CEO of UPHASH Inc.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Real-time Rendering</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Photogrammetry</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">3D Scanning</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">XR/AI Tech</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: History of 3D Scanning */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">History of 3D Scanning</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold">1990s</h3>
                  <p className="text-gray-300">Industrial laser scanners</p>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold">2010</h3>
                  <p className="text-gray-300">Microsoft Kinect</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold">2015</h3>
                  <p className="text-gray-300">Photogrammetry boom</p>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold">2020</h3>
                  <p className="text-gray-300">NeRF (Neural Radiance Fields)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold">2023</h3>
                  <p className="text-gray-300">3D Gaussian Splatting</p>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
          <p className="text-center mt-12 text-lg text-gray-300">
            From hardware-heavy to AI-driven methods
          </p>
        </div>
      </section>

      {/* Section 3: What's Happening Now? */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What's Happening Now?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">3D Gaussian Splatting</h3>
              <p className="text-gray-300">Revolutionary real-time rendering with point clouds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">WebGL Viewers</h3>
              <p className="text-gray-300">Browser-based 3D experiences, no apps needed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Enhanced Scanning</h3>
              <p className="text-gray-300">Smart reconstruction and automated processing</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full">Construction</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">E-commerce</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Tourism</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Digital Twins</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why UPHASH Matters */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 to-cyan-900">
        <div className="max-w-5xl mx-auto px-4 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why UPHASH Matters</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Translating frontier technology into usable systems for the Japanese market
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center font-bold">1</div>
                <span className="text-lg">Import Tech</span>
              </div>
              <span className="text-2xl">→</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center font-bold">2</div>
                <span className="text-lg">Localize Workflow</span>
              </div>
              <span className="text-2xl">→</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold">3</div>
                <span className="text-lg">Commercialize</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Trusted by Major Clients</h3>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4">
                <span className="text-sm">Utility Companies</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <span className="text-sm">Furniture Retailers</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <span className="text-sm">Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What's Next? */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What's Next?</h2>
          
          <div className="space-y-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Prompt-to-Environment</h3>
              <p className="text-lg text-gray-300">AI-generated spatial design from text descriptions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Democratizing Spatial Web</h3>
              <p className="text-lg text-gray-300">Building the Sketchfab successor for everyone</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <blockquote className="text-2xl md:text-3xl font-light italic">
              "Spaces should be as editable as documents."
            </blockquote>
            <p className="mt-4 text-lg">— Shota Imai</p>
          </div>

          <div className="mt-12">
            <p className="text-xl text-gray-300">Thank you</p>
            <p className="text-sm text-gray-400 mt-2">Metaverse Japan 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}