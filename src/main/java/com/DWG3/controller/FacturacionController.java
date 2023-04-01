/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Controller.java to edit this template
 */
package com.DWG3.controller;

import com.DWG3.domain.Detalles;
import com.DWG3.service.DetalleService;
import com.DWG3.service.DetalleServiceImpl;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@Controller
public class FacturacionController {
    
    @Autowired
    DetalleServiceImpl svc;
    
    @RequestMapping("/facturacion")
    public String facturar(Model model) {
        model.addAttribute("attribute", "value");
        return "Facturar";
    }
    
    
    @GetMapping("/facturacion/detalles")
    @ResponseBody
    public List<Detalles> obtenerDetallesFactura(@RequestParam int idMoneda) {
        log.info("Este es el parametro: " + idMoneda);
        List<Detalles> datos = svc.obtenerDetallesFactura(idMoneda);
        log.info("DATOS: " + datos);
        return datos;
    }
    
}
