import React from "react";
import "../styles/character.scss";
import CharProperty from "./CharProperty";

const Character = character => {
  const { char } = character;
  // const charProperties = ["status","species","gender","origin","location"];
  return (
    <div className="characterWrapper col-6 col-sm-3">
      <div className="">
        <div className="card p-1">
          <img src={char.image} className="card-img-top" alt="..." />
          <div className="card-body p-0">
            <div className="char-title p-2 mt-n-title">
              <h2 className="card-title text-nowrap m-0">{char.name}</h2>
              <small>
                id: {char.id} - created{" "}
                {Math.floor(
                  (new Date() - new Date(char.created)) /
                    (1000 * 60 * 60 * 24 * 365)
                )}{" "}
                years ago
              </small>
            </div>
            <div className="card-text p-3">
              <ul className="list-group list-group-flush">
                <CharProperty char={{ label: "STATUS", value: char.status }} />
                <CharProperty
                  char={{ label: "SPECIES", value: char.species }}
                />
                <CharProperty char={{ label: "GENDER", value: char.gender }} />
                <CharProperty
                  char={{ label: "ORIGIN", value: char.origin.name }}
                />
                <CharProperty
                  char={{ label: "LAST LOCATION", value: char.location.name }}
                />
                {/* <li className="list-group-item">
                  <div className="row">
                    <div className="col-4">
                      <span className="char-label">SPECIES</span>
                    </div>
                    <div className="col-8">
                      <span className="char-value">{char.species}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-4">
                      <span className="char-label">GENDER</span>
                    </div>
                    <div className="col-8">
                      <span className="char-value">{char.gender}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-4">
                      <span className="char-label">ORIGIN</span>
                    </div>
                    <div className="col-8">
                      <span className="char-value">{char.origin.name}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-4">
                      <span className="char-label">LAST LOCATION</span>
                    </div>
                    <div className="col-8">
                      <span className="char-value">{char.location.name}</span>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
