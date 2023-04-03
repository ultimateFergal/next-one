import Image from 'next/image';

const EventPage = ({ data }: any) => {
    return (
    <div>
        <Image src={data.image} width={500} height={300} alt={data.title}></Image>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>);
}

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');

    const allPaths = allEvents.map((path: any) => {
        return {
            params: {
                category: path.city,
                id: path.id,
            }
        }
    })

    return {
        paths: allPaths, // pages and routes it needs to create in the build time before deploying the app
        fallback: false, //404 sort of page
    }
}

export async function getStaticProps(context: any) {
    const id = context?.params.id
    const { allEvents } = await import('/data/data.json');
    const eventData = allEvents.find((ev: any) => ev.id === id);
    return { props: { data: eventData, } };
}