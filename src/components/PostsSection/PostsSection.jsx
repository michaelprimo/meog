import { Link } from 'react-router-dom';

const PostsSection = () => {
    return (
        <section>
            <h2 id="category-title">Articles</h2>
            
            <nav id='home-nav'>
                <p className="mb-10 font-normal">
                    <Link to="/welcome_to_meog" className="linkButton">Welcome to Meog!</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/how_a_webpage_is_made" className="linkButton">How a webpage is made</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/where_meog_lives" className="linkButton">Where Meog lives</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/habemus_logo" className="linkButton">Habemus Logo!</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/the_beauty_of_sharing_a_website" className="linkButton">The beauty of sharing a website</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/heres_how_we_can_style_a_website" className="linkButton">Here's how we can style a website</Link>
                </p>
                <p className="mb-10 font-normal">
                    <Link to="/how_meog_got_indexed_on_search_engines" className="linkButton">How Meog got indexed on Search Engines</Link>
                </p>
            </nav>
           
        </section>
    );
};

export default PostsSection;