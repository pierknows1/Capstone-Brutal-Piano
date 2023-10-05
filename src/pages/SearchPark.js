import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './SearchPark.module.css';
import { FiSearch } from 'react-icons/fi';

const SearchPark = () => {
  const [stateCode, setStateCode] = useState('');
  const [parks, setParks] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchBarClass, setSearchBarClass] = useState(styles.centered); 

  const parkSearchAPI = () => {
    if (stateCode.trim() === '') {
      return;
    }

      const apiKey = 'QDzPwbDBoLdn0Sy95L6Rfl59LXnt4BmefytYHaBu';
      const apiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}`;

        axios
          .get(apiUrl)
          .then((response) => {
            setParks(response.data.data);
            setShowResults(true);
            setSearchBarClass(styles.left);
          })
          .catch((error) => {
          });
  };

    const backButton = () => {
      setStateCode('');
      setParks([]);
      setShowResults(false);
      setSearchBarClass(styles.centered);
  };

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <div className={searchBarClass}>
            <div className={styles.searchBar}>
              <div className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="State"
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  className={styles.input}
                />
                <FiSearch
                  className={styles.searchIcon}
                  onClick={parkSearchAPI}
                />
              </div>
            </div>
          </div>
        </div>
        {showResults ? (
          <div className={styles.resultsContainer}>
            <h2 className={styles.subHeader}>National Parks in {stateCode}</h2>
            <div className={styles.scrollableResults}>
              <ul className={styles.list}>
                {parks.map((park) => (
                  <li key={park.id} className={styles.listItem}>
                    <Link to={`/park/${park.id}`} className={styles.link}>
                      {park.fullName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {parks.length > 0 && (
              <button onClick={backButton} className={styles.backButton}>
                Back
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPark;
