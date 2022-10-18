package com.jungthoonParkCompany.webThymeleaf.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pages")
public class PagesController {
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

    @GetMapping("/home")
    public ModelAndView try_2022_10_18_02_26_54(){
        return new ModelAndView("/viewers/home");
    }

    @GetMapping("/boards")
    public ModelAndView try_2022_10_18_18_54_26(){
        return new ModelAndView("/viewers/boards");
    }



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