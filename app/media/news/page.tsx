import Link from 'next/link'

const newsArticles = [
  {
    title: "WatchDog Launches New AI-Powered Surveillance System",
    date: "2023-05-15",
    excerpt: "WatchDog introduces a state-of-the-art AI-powered surveillance system that revolutionizes security monitoring.",
    link: "#"
  },
  {
    title: "WatchDog Partners with Smart City Initiative",
    date: "2023-04-22",
    excerpt: "WatchDog announces a strategic partnership with the Smart City Initiative to enhance urban security infrastructure.",
    link: "#"
  },
  {
    title: "New WatchDog Mobile App Released",
    date: "2023-03-10",
    excerpt: "WatchDog releases a new mobile app that allows users to monitor their security systems on-the-go.",
    link: "#"
  },
  {
    title: "WatchDog Expands Operations to Southeast Asia",
    date: "2023-02-05",
    excerpt: "WatchDog continues its global expansion with new offices opening in key Southeast Asian markets.",
    link: "#"
  }
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest News</h1>
      <div className="space-y-8">
        {newsArticles.map((article, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={article.link} className="hover:text-primary transition-colors duration-200">
                {article.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
            <p className="text-foreground mb-4">{article.excerpt}</p>
            <Link href={article.link} className="text-primary hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

