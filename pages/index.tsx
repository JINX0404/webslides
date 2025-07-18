import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Presentation() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState<boolean[]>([])

  const sections = [
    { id: 'opening', title: 'Opening Vision' },
    { id: 'hero', title: 'Hero Message' },
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

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        const nextSection = Math.min(activeSection + 1, sections.length - 1)
        scrollToSection(nextSection)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevSection = Math.max(activeSection - 1, 0)
        scrollToSection(prevSection)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [sections.length, activeSection])

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

      {/* Navigation - Hidden on mobile, dots on desktop */}
      <nav className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-yellow-500 scale-150'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={section.title}
            />
          ))}
        </div>
      </nav>

      {/* Next/Prev Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        <button
          onClick={() => scrollToSection(Math.max(activeSection - 1, 0))}
          disabled={activeSection === 0}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            activeSection === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-black/80 text-white hover:bg-yellow-600 backdrop-blur-sm'
          }`}
        >
          ← 前へ
        </button>
        <button
          onClick={() => scrollToSection(Math.min(activeSection + 1, sections.length - 1))}
          disabled={activeSection === sections.length - 1}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            activeSection === sections.length - 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-black/80 text-white hover:bg-yellow-600 backdrop-blur-sm'
          }`}
        >
          次へ →
        </button>
      </div>

      {/* Section 1: Opening Vision */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/marble-bg.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-white/80"></div>
        
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

      {/* NEW Section: Hero Message */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1500 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl md:text-7xl font-light mb-12 text-white">
              あらゆる<span className="text-yellow-500 font-normal">"今"</span>を　未来に残す
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-white/80 text-lg font-light">測量・地理空間</div>
              <div className="text-white/80 text-lg font-light">建築・都市計画</div>
              <div className="text-white/80 text-lg font-light">公共安全</div>
              <div className="text-white/80 text-lg font-light">エネルギー・鉱業</div>
              <div className="text-white/80 text-lg font-light">文化財・歴史継承</div>
              <div className="text-white/80 text-lg font-light">不動産・施設管理</div>
            </div>
            
            <div className="mt-8 mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-light mb-6 text-yellow-500">僕らの今やっていること</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📷</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-yellow-500 mb-1">共同研究開発・論文制作</h4>
                    <p className="text-gray-300">3Dおよび4Dに関するガウシアンスプラットの共同研究開発</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌏</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-yellow-500 mb-1">海外の商材をローカライズ日本で展開</h4>
                    <p className="text-gray-300">いち早く海外の商材を見つけて日本で展開</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-yellow-500 mb-1">コンテンツ制作支援・スキャンの提供</h4>
                    <p className="text-gray-300">様々な分野でのスキャン技術の提供</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-yellow-500 mb-1">他業種連携・技術顧問・開発</h4>
                    <p className="text-gray-300">AIやXRをこれから活用していきたい会社への技術顧問</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reflct Embed */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe 
                  src="https://www.reflct.app/share-scene?token=ZGUyMDY1MjEtZmFmNi00ODFlLWI0MmYtODY0ZGE4YWJlY2FkOjdoVWM0MVB0elVQa0R1Q3pKbW0zbWQ=" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Reflct 3D Scene"
                />
              </div>
              <p className="text-gray-400 text-center mt-4 font-light">Reflct - 3D Gaussian Splatting</p>
            </div>

            {/* Sketchfab Embed */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe 
                  title="Armchair" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; fullscreen; xr-spatial-tracking" 
                  src="https://sketchfab.com/models/de9129efbcc64a18b121b6815dd9cf8e/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0"
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="text-gray-400 text-center mt-4 font-light">Sketchfab - 3D Model Viewer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 自分の軸 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-yellow-500">20年</span>見てきたから言えること
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-200 hover:bg-white/10 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-6 flex items-center justify-center overflow-hidden">
                <img src="/images/profile.png" alt="今井翔太" className="w-32 h-32 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">SVA, VFX, Epic Games</h3>
              <p className="text-gray-400 font-light">NYで学んだCG/VFX、Fortnite日本展開をリード</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-400 hover:bg-white/10 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <span className="text-gray-400 text-sm">Global Tech Map</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">技術の翻訳者</h3>
              <p className="text-gray-400 font-light">世界中の3Dスキャン・AI技術を日本に届ける</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-600 hover:bg-white/10 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔗</div>
                  <span className="text-gray-400 text-sm">Real × Virtual</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 text-yellow-500">リアルとバーチャルの接着剤</h3>
              <p className="text-gray-400 font-light">現実とデジタルを繋ぐ立ち位置</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 技術の今 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center text-black transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            3Dスキャンと<span className="text-yellow-600">ニューラルレンダリング</span>の現在地
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-200 hover:shadow-lg ${isVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <span className="text-gray-600 text-sm">Gaussian Splatting</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                Gaussian Splatting
              </h3>
              <p className="text-lg text-gray-600">2023年以降の革命的ブレイクスルー</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-400 hover:shadow-lg ${isVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏢</div>
                  <span className="text-gray-600 text-sm">Big Tech Research</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                大手研究機関の参入
              </h3>
              <p className="text-lg text-gray-600">NVIDIA/Meta/Googleの研究が加速</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-600 hover:shadow-lg ${isVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <span className="text-gray-600 text-sm">WebGL Viewer</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                リアルタイムWeb表示
              </h3>
              <p className="text-lg text-gray-600">ブラウザで動く3D空間の時代へ</p>
            </div>
            
            <div className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm transform transition-all duration-700 delay-800 hover:shadow-lg ${isVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-yellow-100 to-orange-100 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <span className="text-gray-600 text-sm">Lixel / Reflct</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                実用プロダクト
              </h3>
              <p className="text-lg text-gray-600">Lixel、Reflctなど具体的なサービスが登場</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: なぜUPHASHなのか */}
      <section className="min-h-screen flex items-center justify-center bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="max-w-6xl mx-auto px-4 text-white relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            なぜ<span className="text-yellow-500 font-normal">UPHASH</span>なのか
          </h2>
          
          <div className={`border border-yellow-600/30 rounded-lg p-12 mb-12 transition-all duration-1000 delay-300 ${isVisible[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-3xl font-light mb-8 text-center text-yellow-500">技術の翻訳者</h3>
            <p className="text-xl text-center mb-12 text-gray-300 font-light">
              海外の最先端技術をローカライズし、日本の現場に再構成する
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">🏗️</div>
                    <span className="text-gray-500 text-xs">Construction</span>
                  </div>
                </div>
                <p className="text-lg font-light">建設・不動産</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">🪑</div>
                    <span className="text-gray-500 text-xs">Furniture</span>
                  </div>
                </div>
                <p className="text-lg font-light">家具・インテリア</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">🏛️</div>
                    <span className="text-gray-500 text-xs">Heritage</span>
                  </div>
                </div>
                <p className="text-lg font-light">文化財保存</p>
              </div>
            </div>
            
            <div className={`bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-8 transition-all duration-700 delay-500 ${isVisible[4] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xl text-center font-light">
                WebGL・PBR・Viewer・CMSまで<span className="text-yellow-500 font-normal">「全部わかる」</span>チーム体制
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 戦い方の戦略（核心） */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(0,0,0,0.05) 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center text-black transition-all duration-1000 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            戦い方の<span className="text-yellow-600 font-normal">戦略</span>
          </h2>
          
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible[5] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black text-white rounded-lg p-8 border-2 border-yellow-600">
              <p className="text-2xl md:text-3xl font-light text-center mb-4">
                "ハード×ソフト×プラットフォーム"
              </p>
              <p className="text-xl text-center text-gray-300">
                が揃ってないと、今後勝てない。
              </p>
            </div>
            
            <div className={`text-center transition-all duration-700 delay-500 ${isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      {/* Section 7: 見えている未来 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className={`text-4xl md:text-6xl font-light mb-16 text-center transition-all duration-1000 ${isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            見えている<span className="text-yellow-500">未来</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-200 hover:bg-white/10 ${isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <span className="text-gray-400 text-sm">AI Scene Generation</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-yellow-500">Prompt-to-Scene</h3>
              <p className="text-lg text-gray-300 font-light">空間を言葉で作る時代へ</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-400 hover:bg-white/10 ${isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-40 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌍</div>
                  <span className="text-gray-400 text-sm">3D Social Platform</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-yellow-500">3D空間SNS</h3>
              <p className="text-lg text-gray-300 font-light">スキャンEC、AI空間インフラ</p>
            </div>
            
            <div className={`md:col-span-2 bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-lg p-8 transform transition-all duration-700 delay-600 hover:bg-white/10 ${isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-48 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔮</div>
                  <span className="text-gray-400 text-sm">Reality Merge</span>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-center text-yellow-500">デジタルツインではなく「現実のマージ」</h3>
              <p className="text-lg text-gray-300 text-center font-light">現実と仮想が融合する新しい世界</p>
            </div>
          </div>
          
          <div className={`bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-8 text-center transition-all duration-1000 delay-800 ${isVisible[6] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-2xl font-light">
              それらすべてを実装できる準備が、<span className="text-yellow-500 font-normal">UPHASH</span>にはある
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Closing */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1500 ${isVisible[7] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-black text-white rounded-lg p-12 mb-12">
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed">
                「空間が<span className="text-yellow-500">"記録され、編集され、共有される"</span>時代が来ます。
                <span className="block mt-6">
                  そのインフラを作るのが<span className="font-normal">UPHASH</span>の仕事です。」
                </span>
              </blockquote>
            </div>
            
            <img src="/images/uphash-logo.png" alt="UPHASH" className="h-16 mx-auto mb-8" />
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible[7] ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl text-gray-700 mb-2 font-light">Thank you</p>
              <p className="text-lg text-gray-500">Metaverse Japan 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}