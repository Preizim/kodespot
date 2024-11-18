import React, { useEffect, useState, useRef } from "react";

const GitHubProfile = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users?per_page=5");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGitHubUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="github-profile">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProfile;
