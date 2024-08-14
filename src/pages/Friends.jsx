import Layout from "../components/Layout";
import "../styles/friends.css";

function Friends() {
  return (
    <>
      <Layout>
        <div className="friendsMain">
          <div className="searchFriend">
            <form className="searchFriend">
              <label htmlFor="searchFriend">Add a new friend</label>
              <input
                name="searchFriend"
                type="text"
                placeholder="Your friend's username"
              ></input>
              <button type="submit">Search</button>
            </form>
            <ul>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
              <li>Friend...</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Friends;
