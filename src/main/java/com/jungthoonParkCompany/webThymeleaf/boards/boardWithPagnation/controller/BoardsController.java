package com.jungthoonParkCompany.webThymeleaf.boards.boardWithPagnation.controller;


import com.jungthoonParkCompany.webThymeleaf.boards.boardWithPagnation.repositories.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Locale;

@Controller
public class BoardsController {
    @Autowired
    private BoardRepository boardRepository;
    @RequestMapping(value = "/pages/boardsWithPagination", method = RequestMethod.GET)
    public String listAll(Locale locale, Model model) throws Exception {
        model.addAttribute("boards", boardRepository.findAll());
        return "/viewers/boardsWithPagination";
    }


    //이 코드 작동 시나리오(database 이동 관점)
    // client가 http://localhost:9090/pages/boards 로 get request를 합니다.(해당 코드의 작동 트리거 : url 로 접속 )
    // client로  boardsRepository를 통해   jhpDB의 table의 record를 가져와 model에 저장을 합니다.(client로  model을 response ready)
    // client로 templates/viewers/boards.html를 response 할 준비를 합니다.(html rsrc ready)
    // http://localhost:9090/pages/boards 로 response를 한다




//    @GetMapping("/boards")
//    public ModelAndView try_2022_10_18_18_54_26(){
//        return new ModelAndView("/viewers/boards");
//    }

//    @GetMapping("/boards")
//    public ModelAndView try_2022_10_18_18_54_26(Model model){
//        List<Board> boards = boardRepository.findAll();
//        return new ModelAndView("/viewers/boards");
//    }


//
//    @GetMapping("/test")
//    public ModelAndView try_2022_10_18_17_23_25(){
//        return new ModelAndView("/viewers/test");
//    }


//    @GetMapping("/test")
//    public ModelAndView try_2022_10_18_17_23_25(){
//        return new ModelAndView("/greeting");
//    }


//    @ResponseBody
//    @GetMapping("/")
//    public String try1() {
//        var usr = new UsrEntity();
//        usr.builder()
//                .name("박정훈")
//                .homeAddress("대한민국 경기도 안양시 학의로 120 한가람 한양아파트");
//        System.out.println("way not recommanded - 예상국 - ");
//        System.out.println("did try to trigger method successfully");
//        System.out.println(usr.toString());
//        return "index";
//    }
//    @ResponseBody
//    @GetMapping("/Usr/try2")
//    public UsrEntity try2() {
//        var usr = new UsrEntity();
//        usr.builder()
//                .name("jung hoon park")
//                .address("14049   120, Hagui-ro, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea");
//        System.out.println("did try to trigger method successfully");
//        return usr;
//    }


}