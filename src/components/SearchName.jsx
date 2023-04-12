import { useState } from "react";
import { users } from "../data/users";
import "../styles/SearchInput.css";

const SearchName = () => {
  const [searchProfile, setSearchProfile] = useState("");

  const handleChange = (e) => {
    setSearchProfile(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        value={searchProfile}
        onChange={handleChange}
        placeholder="Search by name..."
        className="Search-input"
      />

      <div className="container">
        {users
          .filter(
            (user) =>
              user.title
                .toLowerCase()
                .startsWith(searchProfile.toLowerCase()) ||
              user.firstName
                .toLowerCase()
                .startsWith(searchProfile.toLowerCase()) ||
              user.lastName
                .toLowerCase()
                .startsWith(searchProfile.toLowerCase()) ||
              searchProfile === ""
          )
          .map((user, index) => (
            <div>
              <div
                key={user.id}
                style={{
                  backgroundColor: "#fff",
                  width: "400px",
                  marginBottom: "8px",
                  padding: "5px",
                  borderRadius: '3px'
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    style={{ height: 50, marginTop: "16px" }}
                    src={user.picture}
                    alt=""
                  />
                  <span style={{ paddingLeft: "10px" }}>
                    <p>{user.id}</p>
                    <p>
                      {user.title} {user.firstName} {user.lastName}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchName;
