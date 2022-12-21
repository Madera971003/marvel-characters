import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { CharacterData } from '../types';

type Props = {
  allCharacters: CharacterData[];
  setSearchedItems: React.Dispatch<React.SetStateAction<CharacterData[]>>;
};

export const Header = ({ allCharacters, setSearchedItems }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const handleFilter = (): void => {
    setSearchedItems(
      allCharacters.filter((item: CharacterData) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const handleClean = () => {
    setValue('');
  };
  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>
            <strong>Marvel&apos;s</strong> character list
          </h1>
          <div className={styles.inputContainer}>
            <Image
              src='/search.png'
              alt='searchIcon'
              width={18}
              height={18}
              className={styles.searchIcon}
            />
            <input
              type='text'
              placeholder='Buscar como...'
              value={value}
              className={styles.searchInput}
              onChange={handleChange}
            />
            {value ? (
              <Image
                src='/delete.png'
                alt='deleteIcon'
                width={14}
                height={14}
                className={styles.deleteIcon}
                onClick={handleClean}
              />
            ) : null}
            <button className={styles.searchButton}>Buscar</button>
          </div>
        </div>
      </header>
    </>
  );
};
