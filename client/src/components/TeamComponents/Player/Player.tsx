import React from 'react';
import { Button } from '@material-ui/core';
// import { TPlayerProps } from './../../../interfaces&types/team-page';
import styles from './player.module.scss';



export const Player = ({player, isReverse}: any) => {
  return (
    <div className={`${styles.player__wrapper} ${isReverse ? styles.player__wrapper_reverse : ''}`}>
      <div className={styles.player__img}>
        <img src={player.img} alt={`${player.name} ${player.number}`} />
      </div>

      <div className={styles.player__game_number}>
        {player.gameNumber}
      </div>

      <div className={styles.player}>
        <div className={styles.player__name}>
          {player.name} {player.surname}
        </div>

        <div className={styles.player__info}>
          <div className={styles.player__fg}>
            <div className={styles.player__text}>FG%</div>
            <div className={styles.player__number}>
              {player.fg}
            </div>
          </div>
          {!!player?.fg3 && <div className={styles.player__3fg}>
                            <div className={styles.player__text}>3FG%</div>
                            <div className={styles.player__number}>
                              {player.fg3}
                            </div>
                          </div>
          }
          <div className={styles.player__assists}>
            <div className={styles.player__text}>Ast</div>
            <div className={styles.player__number}>
              {player.assist}
            </div>
          </div>
        </div>

        <div className={styles.player__about}>
          <div className={styles.about_title}>
            About
          </div>
          <div className={styles.about_content}>
            {player.about}
          </div>
        </div>
        <Button
          className={styles.btn_see_more}
          type='button'
          color='primary'
        >
            See more
        </Button>
      </div>
    </div>
  )
}
