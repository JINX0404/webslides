import { useEffect } from 'react'
import Head from 'next/head'

export default function Presentation() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initReveal = async () => {
        const Reveal = (await import('reveal.js')).default
        const deck = new Reveal({
          hash: true,
          controls: true,
          progress: true,
          center: true,
          transition: 'slide',
        })
        deck.initialize()
      }
      initReveal()
    }
  }, [])

  return (
    <>
      <Head>
        <title>プレゼンテーション</title>
        <meta name="description" content="Web-based presentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="reveal">
        <div className="slides">
          <section className="title-slide gradient-bg">
            <h1>プレゼンテーションタイトル</h1>
            <p>サブタイトル</p>
            <p className="text-sm mt-8">2025年7月17日</p>
          </section>

          <section>
            <h2>アジェンダ</h2>
            <ul className="text-left text-2xl space-y-4 mt-8">
              <li>導入</li>
              <li>メインコンテンツ</li>
              <li>デモンストレーション</li>
              <li>まとめ</li>
              <li>Q&A</li>
            </ul>
          </section>

          <section>
            <h2>導入</h2>
            <p className="text-xl mt-8">
              ここに導入の内容を記載します。
            </p>
          </section>

          <section>
            <h2>メインコンテンツ</h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3>ポイント1</h3>
                <p>説明文をここに記載</p>
              </div>
              <div>
                <h3>ポイント2</h3>
                <p>説明文をここに記載</p>
              </div>
            </div>
          </section>

          <section>
            <h2>コード例</h2>
            <pre className="mt-8"><code className="language-javascript">{`
function hello(name) {
  return \`Hello, \${name}!\`
}

console.log(hello('World'))
            `}</code></pre>
          </section>

          <section>
            <h2>まとめ</h2>
            <ul className="text-left text-xl space-y-3 mt-8">
              <li>重要なポイント1</li>
              <li>重要なポイント2</li>
              <li>重要なポイント3</li>
            </ul>
          </section>

          <section className="gradient-bg">
            <h1>ありがとうございました</h1>
            <p className="text-xl mt-8">質問はありますか？</p>
          </section>
        </div>
      </div>
    </>
  )
}