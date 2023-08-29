const Home = () => {
    return (
        <div className="dashboard">

            <form>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button>Sign out</button>
            </form>
        </div>
    )
}

export default Home;