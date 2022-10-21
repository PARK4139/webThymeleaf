package com.jungthoonParkCompany.webThymeleaf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebThymeleafApplication {
	public static void main(String[] args) {
		SpringApplication.run(WebThymeleafApplication.class, args);
		System.out.println("low freuency");
		System.out.println("http://localhost:8080");
		System.out.println("http://localhost:9090/pages");
		System.out.println("http://localhost:9090/pages/index");
		System.out.println("http://localhost:9090/pages/page");
		System.out.println("http://localhost:9090/pages/page/index");
		System.out.println("http://localhost:9090/pages/page/home");
		System.out.println("http://localhost:9090/viewers/viewer");
		System.out.println("http://localhost:9090/viewers/viewer/1");
		System.out.println("http://localhost:9090/viewers/viewer1");
		System.out.println("http://localhost:9090/viewers/viewer-/1");
		System.out.println("http://localhost:9090/pages/viewer-home");
//		System.out.println("http://localhost:9090/pages/test");
		System.out.println("http://localhost:9090");
		System.out.println();
		System.out.println("high freuency");
		System.out.println("http://localhost:9090/pages/home");
		System.out.println("http://localhost:9090/pages/boards");
		System.out.println("http://localhost:9090/pages/code-segments");
	}
}
