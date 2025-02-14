import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'

function Article({ article }) {
    return (
        <Card as="article" className="flex flex-col md:flex-row">
            <div className="relative w-full h-48 md:w-48 md:h-48 flex-shrink-0 z-10">
                <Image
                    src={article.image}
                    alt={`Image for ${article.title}`}
                    className="object-cover"
                    fill
                    unoptimized
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <Card.Title href={`/articles/${article.slug}`}>
                        {article.title}
                    </Card.Title>
                    <Card.Description>{article.description}</Card.Description>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <Card.Cta>Read article</Card.Cta>
                    <Card.Eyebrow as="time" dateTime={article.date} decorate>
                        {formatDate(article.date)}
                    </Card.Eyebrow>
                </div>
            </div>

        </Card>
    )
}

export const metadata = {
    title: 'Articles',
    description:
        'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
    let articles = await getAllArticles()

    return (
        <SimpleLayout
            title="Exploring Software, Robotics, and AI"
            intro="Here you'll find my journey through software development, robotics, AI, and the creative projects that bring these fields to life"
        >
            <div className="flex max-w-3xl flex-col space-y-16">
                {articles.map((article) => (
                    <Article key={article.slug} article={article} />
                ))}
            </div>
        </SimpleLayout>
    )
}
