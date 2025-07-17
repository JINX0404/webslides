import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Presentation() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState<boolean[]>([])

  const sections = [
    { id: 'who', title: '今井翔太について' },
    { id: 'evolution', title: '3Dの進化' },
    { id: 'neural', title: 'ニューラルレンダリング' },
    { id: 'why-now', title: 'なぜ今、3Dを学ぶべきか' },
    { id: 'uphash', title: 'UPHASH' },
    { id: 'next', title: "What's Next?" },
  ]

  useEffect(() => {
    setIsVisible(new Array(sections.length).fill(false))
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const currentSection = Math.floor(scrollPosition / windowHeight)
      setActiveSection(currentSection)

      // Trigger animations for visible sections
      setIsVisible(prev => {
        const newVisibility = [...prev]
        for (let i = 0; i <= currentSection + 1; i++) {
          newVisibility[i] = true
        }
        return newVisibility
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections.length])

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>The Future of Spatial Capture – 今井翔太との対話</title>
        <meta name="description" content="3Dスキャンと空間キャプチャ技術の進化と未来を探る" />
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-blue-600 text-white scale-105'
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

      {/* Section 1: 今井翔太について */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center text-white relative z-10">
          <div className={`transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <span className="text-gray-400 text-sm">Profile Photo</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              今井翔太について
            </h1>
          </div>
          
          <div className={`space-y-4 text-lg md:text-xl transition-all duration-1000 delay-300 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>🎨 CG/VFXをNYのSVAで学び、20年以上3Dの進化を見てきました</p>
            <p>🎮 Epic Games在籍中はUnreal EngineやFortniteの日本展開をリード</p>
            <p>🏢 現在はUPHASH Inc.の代表として、リアル空間の記録・可視化に取り組む</p>
            <p>🔄 AI・リアルタイム技術・XR・スキャンを横断する「翻訳者」として活動</p>
            <p>💼 技術顧問としても複数企業でAI×空間ビジネスのPoC支援を実施</p>
          </div>
        </div>
      </section>

      {/* Section 2: 3Dの進化を20年間見続けてきて */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            3Dの進化を20年間見続けてきて感じること
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="space-y-12 pl-20 md:pl-0">
              {[
                { year: '2000年代前半', desc: 'レンダリングもリアルタイムもまだ発展途上', color: 'from-blue-500 to-blue-600' },
                { year: '2010年', desc: 'PBR（物理ベースレンダリング）が現実感を劇的に向上', color: 'from-purple-500 to-purple-600' },
                { year: '2016年以降', desc: 'Photogrammetry（写真からの3D再構築）が商用化', color: 'from-pink-500 to-pink-600' },
                { year: '2022〜', desc: 'NeRF（神経表現場）による空間再構築が大きな転換点に', color: 'from-orange-500 to-orange-600' },
                { year: '2023〜2025', desc: 'Gaussian SplattingがNeRFを凌駕する勢いでリアルタイム化', color: 'from-red-500 to-red-600' },
              ].map((item, index) => (
                <div key={index} className={`relative transition-all duration-1000 delay-${index * 200} ${isVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="absolute -left-[76px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg"></div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <h3 className={`text-2xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {index % 2 === 0 ? item.year : ''}
                      </h3>
                      <p className="text-gray-300 mt-2">{index % 2 === 0 ? item.desc : ''}</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                      <h3 className={`text-2xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {index % 2 === 1 ? item.year : ''}
                      </h3>
                      <p className="text-gray-300 mt-2">{index % 2 === 1 ? item.desc : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: ニューラルレンダリングの進化 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            最近のニューラルレンダリングの進化とトレンド
            <span className="block text-2xl mt-2 text-gray-300">2024-2025</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: '3D Gaussian Splatting（GS）の普及',
                desc: 'フォトリアルで軽く、リアルタイム表示可能',
                icon: '🎯',
                gradient: 'from-pink-500 to-purple-500'
              },
              {
                title: '大手研究機関の参入',
                desc: 'NVIDIA・Meta・Googleが反射・屈折も再現可能に',
                icon: '🔬',
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                title: 'リアルタイムWeb可視化',
                desc: 'ReflctやINSTA GS Viewerなどとの融合',
                icon: '🌐',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: '生成系3Dとの合流',
                desc: 'LoRAやDreamGaussianで形状生成とスキャンのハイブリッド',
                icon: '🤖',
                gradient: 'from-cyan-500 to-green-500'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-700 delay-${index * 100} hover:scale-105 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`text-4xl mb-4`}>{item.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-1000 delay-500 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-center">商用応用の拡大</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['建設', '観光', 'EC', '文化財保存', '映像制作'].map((item, index) => (
                <span key={index} className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-110">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: なぜ今、3Dを学び直すべきか？ */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="max-w-4xl mx-auto px-4 text-white text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            なぜ今、3Dを学び直すべきか？
          </h2>
          
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible[3] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-2xl md:text-3xl leading-relaxed">
              <p className="mb-4">文章、画像、動画はもうAIで作れる。</p>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
                でも"空間"はまだこれから。
              </p>
              <p className="text-xl md:text-2xl text-gray-300">
                今、現実をどうスキャンし、保存し、操作するかを学んでいる人たちが、
                <span className="block mt-2 text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  次の波をつかむ。
                </span>
              </p>
            </div>
          </div>
          
          <div className={`mt-16 grid grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-lg">文章</p>
              <p className="text-sm text-gray-400 mt-1">✓ AI対応済</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🖼️</div>
              <p className="text-lg">画像・動画</p>
              <p className="text-sm text-gray-400 mt-1">✓ AI対応済</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🌐</div>
              <p className="text-lg font-bold">空間</p>
              <p className="text-sm text-yellow-400 mt-1">→ これから！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: UPHASH */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 to-cyan-900">
        <div className="max-w-5xl mx-auto px-4 text-white text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            UPHASH Inc.
          </h2>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            最先端技術を日本市場で使えるシステムに翻訳
          </p>
          
          <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${isVisible[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center font-bold">1</div>
                <span className="text-lg">Import Tech</span>
              </div>
              <span className="text-2xl animate-pulse">→</span>
              <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center font-bold">2</div>
                <span className="text-lg">Localize Workflow</span>
              </div>
              <span className="text-2xl animate-pulse">→</span>
              <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold">3</div>
                <span className="text-lg">Commercialize</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold mb-4">Trusted by Major Clients</h3>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4 transform transition-all duration-300 hover:scale-105">
                <span className="text-sm">Utility Companies</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4 transform transition-all duration-300 hover:scale-105">
                <span className="text-sm">Furniture Retailers</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4 transform transition-all duration-300 hover:scale-105">
                <span className="text-sm">Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What's Next? */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-white text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-1000 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What's Next?
          </h2>
          
          <div className={`space-y-8 mb-12 transition-all duration-1000 delay-300 ${isVisible[5] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">Prompt-to-Environment</h3>
              <p className="text-lg text-gray-300">AI-generated spatial design from text descriptions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">Democratizing Spatial Web</h3>
              <p className="text-lg text-gray-300">Building the Sketchfab successor for everyone</p>
            </div>
          </div>

          <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform transition-all duration-1000 delay-500 ${isVisible[5] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <blockquote className="text-2xl md:text-3xl font-light italic">
              "Spaces should be as editable as documents."
            </blockquote>
            <p className="mt-4 text-lg">— Shota Imai</p>
          </div>

          <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible[5] ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl text-gray-300">Thank you</p>
            <p className="text-sm text-gray-400 mt-2">Metaverse Japan 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}