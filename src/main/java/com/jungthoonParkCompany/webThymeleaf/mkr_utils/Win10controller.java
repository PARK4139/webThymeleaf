package com.jungthoonParkCompany.webThymeleaf.mkr_utils;

import lombok.NoArgsConstructor;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@NoArgsConstructor
public class Win10controller {
    private  StringBuffer buffer;
    private  Process process;
    private  BufferedReader bufferedReader;
    private  StringBuffer readBuffer;
    private String code;
    public  String run(String command_prompt_code) {
        this.code =command_prompt_code;
        buffer = new StringBuffer();
        buffer.append("cmd.exe /c ");
        buffer.append(this.code);
        this.code =buffer.toString();
        try {
            process = Runtime.getRuntime().exec(this.code);
            bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line = null;
            readBuffer = new StringBuffer();
            while ((line = bufferedReader.readLine()) != null) {
                readBuffer.append(line);
                readBuffer.append("\n");
            }
            return readBuffer.toString();
        }
        catch (Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
        return null;
    }
    public static void cls() {
        for (int i = 0; i < 40; i++) {
            System.out.println("");
        }
//	    System.out.print("\033[H\033[2J");
//		Runtime.getRuntime().exec("cls");
    }
}

