package com.jungthoonParkCompany.webThymeleaf.boards.boardWithPagnation.repositories;

import com.jungthoonParkCompany.webThymeleaf.boards.boardWithPagnation.entities.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardRepository extends JpaRepository<Board, Long> {    //  == @Entity의 datatype  ,   ==@Id의 datatype
    Page<Board> findByTitleContaining(String searchKeyword, Pageable pageable);
}
