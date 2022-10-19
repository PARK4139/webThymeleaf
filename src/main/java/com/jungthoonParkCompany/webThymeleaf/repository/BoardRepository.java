package com.jungthoonParkCompany.webThymeleaf.repository;

import com.jungthoonParkCompany.webThymeleaf.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardRepository  extends JpaRepository<Board, Long> {    //  == @Entity의 datatype  ,   ==@Id의 datatype
}
