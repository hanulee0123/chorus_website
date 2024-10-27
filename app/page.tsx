// app/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, MapPin, Music } from 'lucide-react'

export default function ChoirHomepage() {
  const [choirName, setChoirName] = useState('合唱団名をここに入力')
  const [foundationDate, setFoundationDate] = useState('2025年4月1日')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{choirName}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="/events" className="hover:underline">イベント</Link></li>
              <li><Link href="/conductors" className="hover:underline">指揮者</Link></li>
              <li><Link href="#join" className="hover:underline">入団案内</Link></li>
              <li><Link href="#contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site_main_image-I91oRhcfOScBRoKUrXb4Su8L3xqwEA.png"
              alt="合唱団のメンバーのシルエット"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">九州の歌声を世界へ</h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl">私たちと一緒に素晴らしい音楽の旅に出かけましょう</p>
            <Button size="lg" asChild>
              <Link href="#about">詳しく見る</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">ミッション</h3>
                <p>私たちは、九州、特に大分を中心に活動し、地域の合唱文化を盛り上げることを目指しています。3年間の限定プロジェクトとして、情熱的な歌声を通じて人々の心に感動を届けます。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">ビジョン</h3>
                <p>合唱を通じて地域コミュニティを強化し、音楽の力で人々をつなぎます。私たちの活動が、将来的な九州の合唱シーンの発展につながることを願っています。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">イベント情報</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">コンサート{index + 1}</h3>
                  <p className="text-gray-600 mb-4">日時: 2024年{index + 5}月1日</p>
                  <p className="text-gray-600 mb-4">場所: 大分市民ホール</p>
                  <Button variant="outline" asChild>
                    <Link href="/events">イベント一覧を見る</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">団員募集中</h2>
            <p className="text-xl mb-8">合唱指導の練習をしたい方から、合唱が大好きな方まで、合唱に対する熱い想いがある方を募集しています！</p>
            <Button size="lg">入団案内を見る</Button>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="お名前" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="メールアドレス" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="メッセージ" />
              </div>
              <Button type="submit" className="w-full">送信</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{choirName}</h3>
              <p>設立: {foundationDate}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">連絡先</h3>
              <ul>
                <li className="flex items-center mb-2"><Mail className="mr-2" /> info@kyushu-choir.jp</li>
                <li className="flex items-center mb-2"><MapPin className="mr-2" /> 大分県大分市</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><span className="sr-only">Facebook</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-gray-300"><span className="sr-only">Instagram</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-gray-300"><span className="sr-only">Twitter</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27  5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 {choirName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
