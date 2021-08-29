import React, { useEffect, useState } from 'react';

export const Team = (props: any) => {
  const id = props.match.params.id;
  const [data, setData] = useState<any>(null);
  console.log(id);
  useEffect(() => {
    (async () => {
      const stats = await fetch('https://free-nba.p.rapidapi.com/players').then((res) => {
        console.log(res);
        res.json();
      });
      setData(stats);
    })();
  });

  return <div>TEAM {id}</div>;
};
