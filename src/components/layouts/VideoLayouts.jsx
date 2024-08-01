const VideoLayouts = () => {
    return (
        <div className="tutorial">
            <div className="video">
                <div className="container">
                    <h2 className="white">HOW TO USE APP PERFECTLY</h2>
                    <p className="semi-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                </div>
            </div>
            <div className="bottom">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JS5w4rUbjQE?si=jAYlgOJRJEqK688g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default VideoLayouts;