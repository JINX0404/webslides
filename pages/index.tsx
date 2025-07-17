import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Presentation() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState<boolean[]>([])

  const sections = [
    { id: 'opening', title: 'Opening Vision' },
    { id: 'axis', title: '自分の軸' },
    { id: 'tech-now', title: '技術の今' },
    { id: 'why-uphash', title: 'なぜUPHASH' },
    { id: 'strategy', title: '戦い方の戦略' },
    { id: 'future', title: '見えている未来' },
    { id: 'closing', title: 'Closing' },
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
        <title>空間を保存する会社 - UPHASH</title>
        <meta name="description" content="次のメタバースの基盤を担う、見えない仕事の話" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">UPHASH</span>
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

      {/* Section 1: Opening Vision */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center text-white relative z-10">
          <div className={`transition-all duration-1500 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              空間を保存する会社
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              次のメタバースの基盤を担う、見えない仕事の話
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 自分の軸 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 relative">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            20年見てきたから言えること
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-700 delay-200 hover:scale-105 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">SVA, VFX, Epic Games</h3>
              <p className="text-gray-400">NYで学んだCG/VFX、Fortnite日本展開をリード</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-700 delay-400 hover:scale-105 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">技術の翻訳者</h3>
              <p className="text-gray-400">世界中の3Dスキャン・AI技術を日本に届ける</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-700 delay-600 hover:scale-105 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3">リアルとバーチャルの接着剤</h3>
              <p className="text-gray-400">現実とデジタルを繋ぐ立ち位置</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 技術の今 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600 rounded-full filter blur-[150px] opacity-20 animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            3Dスキャンとニューラルレンダリングの現在地
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-200 hover:scale-105 ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Gaussian Splatting
              </h3>
              <p className="text-lg text-gray-300">2023年以降の革命的ブレイクスルー</p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-400 hover:scale-105 ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                大手研究機関の参入
              </h3>
              <p className="text-lg text-gray-300">NVIDIA/Meta/Googleの研究が加速</p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-600 hover:scale-105 ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                リアルタイムWeb表示
              </h3>
              <p className="text-lg text-gray-300">ブラウザで動く3D空間の時代へ</p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-800 hover:scale-105 ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                実用プロダクト
              </h3>
              <p className="text-lg text-gray-300">Lixel、Reflctなど具体的なサービスが登場</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: なぜUPHASHなのか */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            なぜUPHASHなのか
          </h2>
          
          <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 transition-all duration-1000 delay-300 ${isVisible[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-3xl font-semibold mb-8 text-center">技術の翻訳者</h3>
            <p className="text-xl text-center mb-12 text-gray-300">
              海外の最先端技術をローカライズし、日本の現場に再構成する
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🏗️</div>
                <p className="text-lg">建設・不動産</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🪑</div>
                <p className="text-lg">家具・インテリア</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <p className="text-lg">文化財保存</p>
              </div>
            </div>
            
            <div className={`bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 transition-all duration-700 delay-500 ${isVisible[3] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xl text-center font-semibold">
                WebGL・PBR・Viewer・CMSまで「全部わかる」チーム体制
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 戦い方の戦略（核心） */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            戦い方の戦略
          </h2>
          
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible[4] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-500/50">
              <p className="text-2xl md:text-3xl font-bold text-center mb-4">
                "ハード×ソフト×プラットフォーム"
              </p>
              <p className="text-xl text-center text-gray-300">
                が揃ってないと、今後勝てない。
              </p>
            </div>
            
            <div className={`text-center transition-all duration-700 delay-500 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl mb-8 text-gray-300">
                でもBtoCでそれをやるには日本は資金が小さすぎる。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl">→</span>
                  <p className="text-2xl font-semibold">
                    UPHASHはBtoBで「体制」を作る
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl">→</span>
                  <p className="text-2xl font-semibold">
                    いつでも作れる準備をしながら、顧問・共同研究で知を貯める戦略
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 見えている未来 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            見えている未来
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-200 hover:scale-105 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-4">Prompt-to-Scene</h3>
              <p className="text-lg text-gray-300">空間を言葉で作る時代へ</p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-400 hover:scale-105 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-4">3D空間SNS</h3>
              <p className="text-lg text-gray-300">スキャンEC、AI空間インフラ</p>
            </div>
            
            <div className={`md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-700 delay-600 hover:scale-105 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 text-center">デジタルツインではなく「現実のマージ」</h3>
              <p className="text-lg text-gray-300 text-center">現実と仮想が融合する新しい世界</p>
            </div>
          </div>
          
          <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center transition-all duration-1000 delay-800 ${isVisible[5] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-2xl font-bold">
              それらすべてを実装できる準備が、UPHASHにはある
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Closing */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-white text-center">
          <div className={`transition-all duration-1500 ${isVisible[6] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mb-12">
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed">
                「空間が"記録され、編集され、共有される"時代が来ます。
                <span className="block mt-4">
                  そのインフラを作るのがUPHASHの仕事です。」
                </span>
              </blockquote>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible[6] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl text-gray-300 mb-2">Thank you</p>
              <p className="text-lg text-gray-400">Metaverse Japan 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}