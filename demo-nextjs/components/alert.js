import Container from './container'
import Link from 'next/link'


export default function Alert({ preview }) {
  console.log('Alert preview', preview);

  return (
    preview ? (
    <Container>
        <div className="py-2 text-sm text-center">
            This is page is a preview.{' '}
            <Link
                href="/api/exit-preview"
                className="font-bold underline transition-colors duration-200 hover:text-cyan"
                prefetch={false}
            >
                Click here
            </Link>
            {' '}
            to exit preview mode.
        </div>
    </Container>
    ) : (
        <></>
    )
  )
}
