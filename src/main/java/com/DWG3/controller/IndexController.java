/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Controller.java to edit this template
 */
package com.DWG3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author HP PROBOOK
 */
@Controller
public class IndexController {
    
    @GetMapping("/")
    public String Index(Model model) {
        return "Index";
    }
    
    @GetMapping("/home")
    public String Home(Model model) {
        return "Home";
    }
}
