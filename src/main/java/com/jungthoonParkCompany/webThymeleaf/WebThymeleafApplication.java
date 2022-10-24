package com.jungthoonParkCompany.webThymeleaf;

import com.jungthoonParkCompany.webThymeleaf.mkr_utils.Win10controller;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebThymeleafApplication {
	public static void main(String[] args) {
		SpringApplication.run(WebThymeleafApplication.class, args);
		Win10controller win10controller= new Win10controller();
//		win10controller.run("start http://localhost:9090/pages/home");
//		win10controller.run("start http://localhost:9090/pages/boards");
//		win10controller.run("start http://localhost:9090/pages/boardsWithPaging");
		win10controller.run("start http://localhost:9090/pages/code-segments");
//		win10controller.run("start http://localhost:9090/greeting");
	}
}
