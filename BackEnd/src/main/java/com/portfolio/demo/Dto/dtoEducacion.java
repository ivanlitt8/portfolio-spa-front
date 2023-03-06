
package com.portfolio.demo.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class dtoEducacion { 
    
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String fechaInicioE;
    
    private String fechaFinE;

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreE, String descripcionE, String fechaInicioE, String fechaFinE) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
    }    
    
}