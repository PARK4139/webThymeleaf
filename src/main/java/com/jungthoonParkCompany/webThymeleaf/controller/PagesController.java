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
public class PagesController {
    @Autowired
    private BoardRepository boardRepository;   // JpaRepository 를 extends한 interface Boardrepository를

    @GetMapping("/home")
    public String try_2022_10_18_02_26_54() {
        return "/viewers/home";
    }
    @GetMapping("/boards")
    public String try_2022_10_18_18_54_26(Model model) {
        List<Board> board_records = boardRepository.findAll();
        model.addAttribute("board_records", board_records);
        return "/viewers/boards";
    }


    //    @RequestMapping("/")
//    public String try100() {
//        System.out.println("way recommanded - 예상국 - ");
//        System.out.println("did try to trigger method successfully");
//        System.out.println("index page가 필요없다면 이 코드는 별로 필요없는 코드 같아 보입니다.");
//        System.out.println("
//        index.html 을  xedni.html로 rename 후 해당코드 주석처리 결과 다른 페이지는 정상 작동합니다.
//        따라서 welcome page는 불필요해 해 보입니다.
//        그래도 혹여나 spring boot 의 초기설정을 돕는 기능이 있을지도 모르니,
//        url mapping issue 시 시도해보는 것이 좋을 것 같습니다 ");
//        return "index";
//    }


    //이 코드 작동 시나리오(database 이동 관점)
    // client가 http://localhost:9090/pages/boards 로 get request를 합니다.(해당 코드의 작동 트리거 url ready )
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