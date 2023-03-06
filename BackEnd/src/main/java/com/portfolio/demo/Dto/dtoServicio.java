
package com.portfolio.demo.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class dtoServicio {
    
    @NotBlank
    private String nombreS;
    
    @NotBlank
    private String descripcionS;

    public dtoServicio() {
    }

    public dtoServicio(String nombreS, String descripcionS) {
        this.nombreS = nombreS;
        this.descripcionS = descripcionS;
    }    
    
}
