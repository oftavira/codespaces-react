// A navbar to our website

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Esfm Blog</h1>
        <div className="links">
            <a href="/"
            style={{
                textDecoration: 'solid',
                padding: '10px',
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
                }}>
            Home</a>
            <a href="/create" 
            style={{
            padding: '10px',
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
            }}>
            New Blog</a>
        </div>
        </nav>
    );
}

export default Navbar;