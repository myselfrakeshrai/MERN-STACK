import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">MERN STACK!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Dharan Nepal, MERN STACK  provides a trained staff ready to meet your CRUD needs.</p>
                <address className="public__addr">
                    Rakesh Rai<br />
                    Bagarkoth 56700<br />
                    Dharan, NP 56700<br />
                    <a href="tel:+97721315231">(977) 672-7189</a>
                </address>
                <br />
                <p>Owner: Rakesh Rai</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public