import { getDiscoveryCms } from '@discoverycms/connector';

export default function ContentsPage({ contents }) {
    return (
        <>
            {contents.entities.map((content) => {
                return (
                    <div key={content._id}>
                        <img src={content.preview.url} alt={'preview'} />
                        <span>{content.title}</span>
                    </div>
                );
            })}
        </>
    );
}

export async function getServerSideProps(context) {
    const contents = await getDiscoveryCms().getContents({
        type: 'DemoProduct',
        children: 'details',
        ...context.query,
    });

    return {
        props: {
            contents: contents,
        },
    };
}
