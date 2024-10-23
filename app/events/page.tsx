import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const events = [
    { id: 1, title: '春のコンサート', date: '2024年4月15日', venue: '大分市民ホール' },
    { id: 2, title: '夏の野外ライブ', date: '2024年7月20日', venue: '大分城址公園' },
    { id: 3, title: '秋の合同演奏会', date: '2024年10月5日', venue: '別府ビーコンプラザ' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">イベント情報</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">日時: {event.date}</p>
            <p className="text-gray-600 mb-4">場所: {event.venue}</p>
            <Button variant="outline">詳細を見る</Button>
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
