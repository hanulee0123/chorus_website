import Image from 'next/image'
import Link from 'next/link'

export default function ConductorsPage() {
  const conductors = [
    { id: 1, name: '山田太郎', image: '/placeholder.svg?height=200&width=200', bio: '東京音楽大学卒業。国内外で多数の合唱団を指揮。' },
    { id: 2, name: '佐藤花子', image: '/placeholder.svg?height=200&width=200', bio: 'ウィーン国立音楽大学留学。オペラ指揮者としても活躍。' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">指揮者紹介</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {conductors.map((conductor) => (
          <div key={conductor.id} className="flex flex-col items-center text-center">
            <Image
              src={conductor.image}
              alt={conductor.name}
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{conductor.name}</h2>
            <p className="text-gray-600">{conductor.bio}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ホームページに戻る
        </Link>
      </div>
    </div>
  )
}
