import Image from 'next/image';
import Link from 'next/link';

const EventCategoryPage = ({ data, city }: any) => {

    return (
        <div>
            <h1>Events in {city}</h1>
            <div>{data.map((ev: any) => (
                <Link
                    key={ev.id}
                    href={`/events/${ev.city}/${ev.id}`} passHref legacyBehavior>
                    <a>
                        <Image width={200} height={100} src={ev.image} alt={ev.title} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </a>
                </Link>
            ))}</div>

        </div>
    );
}

export default EventCategoryPage

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');

    const allPaths = events_categories.map((ev: any) => {
        return {
            params: {
                category: ev.id.toString(),
            }
        }
    })

    return {
        paths: allPaths, // pages and routes it needs to create in the build time before deploying the app
        fallback: false, //404 sort of page
    }
}

export async function getStaticProps(context: any) {
    const id = context?.params.category
    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter((ev: any) => ev.city === id);
    return { props: { data, city: id } };
}