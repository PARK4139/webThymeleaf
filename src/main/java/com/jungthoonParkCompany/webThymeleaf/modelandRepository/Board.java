package com.jungthoonParkCompany.webThymeleaf.modelandRepository;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity// ==object(database table) 와 통신하기 위한  object(java class)
@Data
public class Board {
    @Id // ==Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)   //==Auto_INCREMENT사용간편
    private long id;
    private String title;
    private String content;
}
