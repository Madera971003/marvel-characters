import React from 'react';
import { CharacterData } from '../types';
import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
  itemData: CharacterData;
  handleDelete: (n: number) => void;
};

export const CharacterItem = ({ itemData, handleDelete }: Props) => {
  return (
    <>
      <div className={styles.itemContainer}>
        <Image
          src={`${itemData.thumbnail.path}.${itemData.thumbnail.extension}`}
          alt={itemData.name}
          width={50}
          height={50}
          className={styles.image}
        />
        <div className={styles.itemDescription}>
          <h3>{itemData.name}</h3>
          <p>
            Comics: {itemData.comics.available} / Series:{' '}
            {itemData.series.available} / Stories: {itemData.stories.available}{' '}
            / Events: {itemData.events.available}
          </p>
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(itemData.id)}
        >
          X
        </button>
      </div>
    </>
  );
};
