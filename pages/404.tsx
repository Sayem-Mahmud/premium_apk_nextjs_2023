import Link from 'next/link'
import Script from 'next/script'

export default function FourOhFour() {
  return <>
    {/* <h1>404 - Page Not Found</h1> */}
    {/* <Link href="/">
      <a>
        Go back home
      </a>
    </Link> */}
    <Script>
     document.location.href='/'
    </Script>
  </>
}