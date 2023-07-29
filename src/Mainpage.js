import Nav from './Nav';

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Nav />
      <h1 className="display-5 fw-bold">Spotify API Webplayer</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This is a webplayer that uses the Spotify API to search for artists and albums.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
