package com.jungthoonParkCompany.webThymeleaf.modelandRepository;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardsRepository extends JpaRepository<Board, Long> {    //  == @Entity의 datatype  ,   ==@Id의 datatype
}
