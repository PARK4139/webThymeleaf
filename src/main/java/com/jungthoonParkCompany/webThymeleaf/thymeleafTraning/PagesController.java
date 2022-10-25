package com.jungthoonParkCompany.webThymeleaf.thymeleafTraning;


import com.jungthoonParkCompany.webThymeleaf.boards.boardWithPagnation.repositories.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class PagesController {
    @Autowired
    private BoardRepository boardRepository;   // JpaRepository 를 extends한 interface Boardrepository를

    @GetMapping("/home")
    public String try_2022_10_18_02_26_54() {
        return "/viewers/home";
    }



}