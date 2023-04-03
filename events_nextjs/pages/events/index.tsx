import Image from 'next/image';
import Link from 'next/link';
interface EventsPageProps {
    data: any
}

const EventsPage = (props: EventsPageProps) => {
    const { data } = props;
    return (
        <div>
            <h1>Main events page</h1>
            {data.map((ev: any) => (
                <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
                <a>
                    <Image width={200} height={100} src={ev.image} alt={ev.title} />
                    <h2>{ev.title}</h2>
                </a>
                </Link>
            ))}
        </div>
    );
}

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}