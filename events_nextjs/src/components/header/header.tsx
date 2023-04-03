import Link from "next/link"

export const Header = () => {
    return (

        <header>
            <nav>
                <Link href="/" passHref legacyBehavior><a>Home</a></Link>
                <Link href="/events" passHref legacyBehavior><a>Events</a></Link>
                <Link href="/about-us" passHref legacyBehavior><a>About us</a></Link>
            </nav>
        </header>
    )
}