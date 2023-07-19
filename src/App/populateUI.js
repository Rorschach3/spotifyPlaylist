function populateUI(profile) {
    return (
      <section id="profile">
        <h2>Logged in as: <span id="displayName">{profile.display_name}</span></h2>
        {profile.images[0] && (
          <div id="avatar">
            <img src={profile.images[0].url} alt="Profile" />
            <span id="imgUrl">{profile.images[0].url}</span>
          </div>
        )}
        <ul>
          <li>User ID: <span id="id">{profile.id}</span></li>
          <li>Email: <span id="email">{profile.email}</span></li>
          <li>Spotify URI: <a id="uri" href={profile.external_urls.spotify}>{profile.uri}</a></li>
          <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li>
        </ul>
      </section>
    );
  }
  
  export default populateUI;
  