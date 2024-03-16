// Dev: @skywalkerSam
// Purpose: Project-Stardate
// Date: 12024.02.16.0451

/*
TODOs:
- Update timezone acc. to incoming IP origin
- Change timezone manually

Resources: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

import { useState, useEffect } from "react";
import styled from 'styled-components';
import 'tachyons';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  `;

const App = () => {

  let starYear = (new Date().getFullYear() + 10000)
  let starMonth = new Date().getMonth();
  let starDayOfMonth = new Date().getDate();
  let starHour = new Date().getHours();
  let starMinute = new Date().getMinutes();
  let starSecond = new Date().getSeconds();

  // console.log(starYear);
  // console.log(starMonth+1);
  // console.log(starDayOfMonth);
  // console.log(starHour);
  // console.log(starMinute);
  // console.log(starSecond);

  const [sYear, setSYear] = useState(starYear);
  const [sMonth, setSMonth] = useState(starMonth);
  const [sDayOfMonth, setSDayOfMonth] = useState(starDayOfMonth);
  const [sHour, setSHour] = useState(starHour);
  const [sMinute, setSMinute] = useState(starMinute);
  const [sSecond, setSSecond] = useState(starSecond);

  const updateSYear = () => {
    let newSYear = (new Date().getFullYear() + 10000)
    setSYear(newSYear);
  };
  const updateSMonth = () => {
    let newSMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    setSMonth(newSMonth);
  };
  const updateSDayOfMonth = () => {
    let newSDayOfMonth = new Date().getDate().toString().padStart(2, '0');
    setSDayOfMonth(newSDayOfMonth);
  };
  const updateSHour = () => {
    let newSHour = new Date().getHours().toString().padStart(2, '0');
    setSHour(newSHour);
  };
  const updateSMinute = () => {
    let newSMinute = new Date().getMinutes().toString().padStart(2, '0');
    setSMinute(newSMinute);
  };
  const updateSSecond = () => {
    let newSSecond = new Date().getSeconds().toString().padStart(2, '0');
    setSSecond(newSSecond);
  };

  useEffect(() => {
    const interval = setInterval(updateSYear, 1000);
    return () => clearInterval(interval);
  }, []);   //sYear
  useEffect(() => {
    const interval = setInterval(updateSMonth, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(updateSDayOfMonth, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(updateSHour, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(updateSMinute, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(updateSSecond, 1000);
    return () => clearInterval(interval);
  }, []);

  // const stardate = `${sYear}.${sMonth}.${sDayOfMonth}.${sHour}${sMinute}.${sSecond}`;
  const stardate = () => {
    return sYear + '.' + sMonth + '.' + sDayOfMonth + '.' + sHour + ':' + sMinute + ':' + sSecond;
  }

  // console.log(sYear);
  // console.log(sMonth);
  // console.log(sDayOfMonth);
  // console.log(sHour);
  // console.log(sMinute);
  // console.log(sSecond);
  console.log("Today:", new Date())
  console.log("Stardate:", stardate());

  return (
    <div>
      <AppContainer>
        <div>
          <h1 className="red center hover-green pointer">
            {stardate()}
          </h1>
        </div>
      </AppContainer>
    </div>
  );
};

export default App;
