// Hooks
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';
// Components
import { Header } from '../Header';
import { CharacterItem } from '../CharacterItem';
import { Pagination } from '../Pagination';
// Types
import { CharacterData } from '../types';
// Data and Styles
import { data } from '../../db/response_marvel.json';
import styles from './styles.module.css';

export const App = () => {
  const { results } = data;
  const numOfPagination: number = Math.ceil(results.length / 7);
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    'Marvel_Characters',
    results
  );
  const [searchedItems, setSearchedItems] =
    useState<CharacterData[]>(localStorageValue);
  const [paginationView, setPaginationView] = useState<number>(0);
  const [itemsToShow, setItemsToShow] = useState<CharacterData[]>([]);
  const handleDelete = (id: number) => {
    setLocalStorageValue(searchedItems.filter((item) => item.id !== id));
  };
  useEffect(() => {
    setSearchedItems(localStorageValue);
  }, [localStorageValue]);
  useEffect(() => {
    setItemsToShow(
      searchedItems.slice(paginationView * 7, paginationView * 7 + 7)
    );
  }, [paginationView, searchedItems]);
  return (
    <>
      <Header
        allCharacters={localStorageValue}
        setSearchedItems={setSearchedItems}
      />
      <section className={styles.itemsContainer}>
        {itemsToShow?.map((item) => (
          <CharacterItem
            key={item.id}
            itemData={item}
            handleDelete={handleDelete}
          />
        ))}
      </section>
      <Pagination
        numOfPagination={numOfPagination}
        paginationView={paginationView}
        setPaginationView={setPaginationView}
        limit={numOfPagination}
      />
    </>
  );
};
