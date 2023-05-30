import Link from 'next/link';

export default function PreviewModeAlert() {
    return (
        <div className="py-2 text-xs text-center bg-black text-white">
            This is page is displaying preview data.{' '}
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
    );
}
