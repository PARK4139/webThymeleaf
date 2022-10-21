package com.jungthoonParkCompany.webThymeleaf.controller;


import com.jungthoonParkCompany.webThymeleaf.modelandRepository.Board;
import com.jungthoonParkCompany.webThymeleaf.modelandRepository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/pages")
public class PagesCoreSegmentController {
    @Autowired
    private BoardRepository boardRepository;

    @GetMapping("/code-segments")
    public String try_2022_10_18_02_26_58() {
        return "/code_segments";
    }

//    @G`GetMapping("/home")
//    public ModelAndView try_2022_10_18_02_26_54(){
//        return new ModelAndView("/viewers/home");
//    }
//    @GetMapping("/boards")
//    public ModelAndView try_2022_10_18_18_54_26(){
//        return new ModelAndView("/viewers/boards");
//    }

    //        @GetMapping("/boards")
//    public String  try_2022_10_18_18_54_26(){
//        return "/viewers/boards";
//    }
//
//


}