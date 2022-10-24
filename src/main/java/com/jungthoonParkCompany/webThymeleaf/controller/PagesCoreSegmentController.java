package com.jungthoonParkCompany.webThymeleaf.controller;


import com.jungthoonParkCompany.webThymeleaf.entities.RowsSkyParasiticide;
import com.jungthoonParkCompany.webThymeleaf.entities.RowsSkyParasiticideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
//@RequestMapping("/pages")
public class PagesCoreSegmentController {
    @Autowired
    private RowsSkyParasiticideRepository rowsSkyParasiticideRepository;

    @GetMapping("/pages/code-segments")
    public String try_2022_10_18_02_26_58(Model model) {
        List<RowsSkyParasiticide> rowsSkyParasiticide =rowsSkyParasiticideRepository.findAll();
        model.addAttribute("rowsSkyParasiticideForR", rowsSkyParasiticide);
        model.addAttribute("rowsSkyParasiticideForU",new RowsSkyParasiticide());
        model.addAttribute("rowsSkyParasiticideForD",new RowsSkyParasiticide());
        return "/code_segments";
    }

    @PostMapping("/pages/code-segments")
    public String try_2022_10_18_02_26_51(@ModelAttribute RowsSkyParasiticide rowsSkyParasiticide) {
        if(rowsSkyParasiticide.getId()==null){
            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
        }else if(rowsSkyParasiticideRepository.findById(rowsSkyParasiticide.getId())==null) {
            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
        }else{
            rowsSkyParasiticideRepository.save(rowsSkyParasiticide);
        }
        return "redirect:/pages/code-segments";
//      view issue try alternative:        return "redirect:/code_segments"; (server address)  ->        return "redirect:/pages/code-segments" (url);
    }

    @PostMapping("/pages/code-segments/delete")
    public String try_2022_10_24_16_54_43(@ModelAttribute RowsSkyParasiticide rowsSkyParasiticide) {
        rowsSkyParasiticideRepository.deleteById(rowsSkyParasiticide.getId());
        return "redirect:/pages/code-segments";
    }
}