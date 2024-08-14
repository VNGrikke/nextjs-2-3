'use client';
import React, { useState } from 'react'
import styles from './pagination.module.css'

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 20

    function prevPage () {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage () {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    function goPage (page: number) {
        setCurrentPage(page)
    }
  return (
    <div className={styles.pagination}>
        <button onClick={prevPage} className={styles.navButton}>Prev</button>
        {
            Array.from({length: totalPages}, (_, index) => index + 1).map(page => (
                <button key={page} onClick={() => goPage(page)} className={currentPage === page ? styles.active : styles.pageButton}>{page}</button>
            ))
        }
        
        <button onClick={nextPage} className={styles.navButton}>Next</button>
    </div>
  )
}
