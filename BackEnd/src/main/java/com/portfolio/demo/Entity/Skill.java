
package com.portfolio.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity
public class Skill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String nombreSk;
    private int porcentajeSk;
    private String imageSk;

    public Skill() {
    }

    public Skill(String nombreSk, int porcentajeSk, String imageSk) {
        this.nombreSk = nombreSk;
        this.porcentajeSk = porcentajeSk;
        this.imageSk = imageSk;
    }
    
    
}
