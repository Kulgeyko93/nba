import React from 'react';
import {TPlayerProps} from './../../interfaces&types/team-page'
import styles from './team.module.scss';
import {Player} from '../../components/TeamComponents/Player/Player';

import {players} from '../../mockData/players';

export const Team = ({player}: any) => {
  
// const imageLink = 'https://www.mavs.com/wp-content/uploads/2019/07/Luka_Doncic_Profile.png';
// const player: TPlayerProps = {
//   name: 'Luka donchich',
//   number: 77,
//   fg_per_cent: 45.9,
//   three_fg_per_cent: 30.4,
//   points: 24,
//   redound: 7.8,
//   assist: 8.5,
//   about: `
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
//     into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
//     passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//   `,
//   imageLink: 'https://www.mavs.com/wp-content/uploads/2019/07/Luka_Doncic_Profile.png',
//   isReverse: true,
// }
  return (
    <div className={styles.team_wrapper}>
      {
        players.map(player => <Player
                                key={player.id}
                                player={player}
                                isReverse={player.id % 2 === 0 ? true : false}
                              />)
      }
      {/* <Player player={player}/> */}

    </div>
  )
}
