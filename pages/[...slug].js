import {DiscoveryContext, fetchDiscoveryPageData} from '@discovery-frontend/cms-connector'
import DiscoveryComponents from "../components/Discovery/DiscoveryComponents";

export default function Dynamic({ data }) {
  if (data === null) {
    return <span>Loading..</span>
  }
  return (
      <div className="relative h-4/6">
        <div className="max-w-9xl mx-auto lg:mt-16 mb-24">

          <DiscoveryContext.Provider value={data}>
            <DiscoveryComponents/>
          </DiscoveryContext.Provider>

        </div>
      </div>
  )
}

export async function getServerSideProps(context) {
  if (context.query.token) {
    context.token = context.query.token;
  }

  const data = await fetchDiscoveryPageData(context.params.slug.join('/'), context);

  return {
    props: {
      data: data
    },
  }
}
