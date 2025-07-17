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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg tracking-widest">UPHASH</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-yellow-600/20 text-yellow-500 border border-yellow-600/50'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1500 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight text-black">
              空間を保存する会社
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              次のメタバースの基盤を担う、見えない仕事の話
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 自分の軸 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-yellow-500">20年</span>見てきたから言えること
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-200 hover:bg-white/10 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">Epic Games / Fortnite</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">SVA, VFX, Epic Games</h3>
              <p className="text-gray-400 font-light">NYで学んだCG/VFX、Fortnite日本展開をリード</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-400 hover:bg-white/10 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">Global Tech Map</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">技術の翻訳者</h3>
              <p className="text-gray-400 font-light">世界中の3Dスキャン・AI技術を日本に届ける</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-600 hover:bg-white/10 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">Real × Virtual</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">リアルとバーチャルの接着剤</h3>
              <p className="text-gray-400 font-light">現実とデジタルを繋ぐ立ち位置</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 技術の今 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center text-black transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            3Dスキャンと<span className="text-yellow-600">ニューラルレンダリング</span>の現在地
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-200 hover:shadow-lg ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-full h-40 bg-gray-100 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-500">Gaussian Splatting Demo</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                Gaussian Splatting
              </h3>
              <p className="text-lg text-gray-600">2023年以降の革命的ブレイクスルー</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-400 hover:shadow-lg ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-full h-40 bg-gray-100 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-500">NVIDIA / Meta / Google</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                大手研究機関の参入
              </h3>
              <p className="text-lg text-gray-600">NVIDIA/Meta/Googleの研究が加速</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-600 hover:shadow-lg ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-full h-40 bg-gray-100 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-500">WebGL Viewer</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                リアルタイムWeb表示
              </h3>
              <p className="text-lg text-gray-600">ブラウザで動く3D空間の時代へ</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-800 hover:shadow-lg ${isVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-full h-40 bg-gray-100 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-500">Lixel / Reflct</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                実用プロダクト
              </h3>
              <p className="text-lg text-gray-600">Lixel、Reflctなど具体的なサービスが登場</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: なぜUPHASHなのか */}
      <section className="min-h-screen flex items-center justify-center bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="max-w-6xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            なぜ<span className="text-yellow-500 font-normal">UPHASH</span>なのか
          </h2>
          
          <div className={`border border-yellow-600/30 rounded-lg p-12 mb-12 transition-all duration-1000 delay-300 ${isVisible[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-3xl font-light mb-8 text-center text-yellow-500">技術の翻訳者</h3>
            <p className="text-xl text-center mb-12 text-gray-300 font-light">
              海外の最先端技術をローカライズし、日本の現場に再構成する
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600">建設現場</span>
                </div>
                <p className="text-lg font-light">建設・不動産</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600">家具3D</span>
                </div>
                <p className="text-lg font-light">家具・インテリア</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600">文化財</span>
                </div>
                <p className="text-lg font-light">文化財保存</p>
              </div>
            </div>
            
            <div className={`bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-8 transition-all duration-700 delay-500 ${isVisible[3] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xl text-center font-light">
                WebGL・PBR・Viewer・CMSまで<span className="text-yellow-500 font-normal">「全部わかる」</span>チーム体制
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 戦い方の戦略（核心） */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(0,0,0,0.05) 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center text-black transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            戦い方の<span className="text-yellow-600 font-normal">戦略</span>
          </h2>
          
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible[4] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black text-white rounded-lg p-8 border-2 border-yellow-600">
              <p className="text-2xl md:text-3xl font-light text-center mb-4">
                "ハード×ソフト×プラットフォーム"
              </p>
              <p className="text-xl text-center text-gray-300">
                が揃ってないと、今後勝てない。
              </p>
            </div>
            
            <div className={`text-center transition-all duration-700 delay-500 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl mb-8 text-gray-700">
                でもBtoCでそれをやるには日本は資金が小さすぎる。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-yellow-600">→</span>
                  <p className="text-2xl font-light text-black">
                    UPHASHは<span className="font-normal">BtoB</span>で「体制」を作る
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-yellow-600">→</span>
                  <p className="text-2xl font-light text-black">
                    いつでも作れる準備をしながら、<span className="font-normal">顧問・共同研究</span>で知を貯める戦略
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 見えている未来 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            見えている<span className="text-yellow-500">未来</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-200 hover:bg-white/10 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-40 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">AI Scene Generation</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-yellow-500">Prompt-to-Scene</h3>
              <p className="text-lg text-gray-300 font-light">空間を言葉で作る時代へ</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-400 hover:bg-white/10 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-40 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">3D Social Platform</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-yellow-500">3D空間SNS</h3>
              <p className="text-lg text-gray-300 font-light">スキャンEC、AI空間インフラ</p>
            </div>
            
            <div className={`md:col-span-2 bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-600 hover:bg-white/10 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gray-800 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">Reality Merge Concept</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-center text-yellow-500">デジタルツインではなく「現実のマージ」</h3>
              <p className="text-lg text-gray-300 text-center font-light">現実と仮想が融合する新しい世界</p>
            </div>
          </div>
          
          <div className={`bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-8 text-center transition-all duration-1000 delay-800 ${isVisible[5] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-2xl font-light">
              それらすべてを実装できる準備が、<span className="text-yellow-500 font-normal">UPHASH</span>にはある
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Closing */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1500 ${isVisible[6] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-black text-white rounded-lg p-12 mb-12">
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed">
                「空間が<span className="text-yellow-500">"記録され、編集され、共有される"</span>時代が来ます。
                <span className="block mt-6">
                  そのインフラを作るのが<span className="font-normal">UPHASH</span>の仕事です。」
                </span>
              </blockquote>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible[6] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl text-gray-700 mb-2 font-light">Thank you</p>
              <p className="text-lg text-gray-500">Metaverse Japan 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}