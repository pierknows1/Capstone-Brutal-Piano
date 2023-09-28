// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ParkDetail = () => {
//   const { fullName } = useParams();
//   const [park, setPark] = useState({});
//   const [loading, setLoading] = useState(true);
//   console.log(fullName);
//   useEffect(() => {
//     const apiKey = 'QDzPwbDBoLdn0Sy95L6Rfl59LXnt4BmefytYHaBu';
//     const apiUrl = `https://developer.nps.gov/api/v1/parks?id=${fullName}&api_key=${apiKey}`;

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         const parkData = response.data.data[0];
//         setPark(parkData);
//         console.log(parkData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, [fullName]);

//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : park.fullName ? ( 
//         <div>
//           <h1>{park.fullName}</h1>
//           <p>{park.description}</p>
//           <p>{park.parkCode}</p>
//           <p>{park.directionsUrl}</p>
//           <p>{park.name}</p>
//           <p>{park.designation}</p>
          
//         </div>
//       ) : (
//         <div>No data available for this park.</div>
//       )}
//     </div>
//   );
// };

// export default ParkDetail;
