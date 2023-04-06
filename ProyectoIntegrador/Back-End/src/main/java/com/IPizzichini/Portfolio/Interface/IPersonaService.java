
package com.IPizzichini.Portfolio.Interface;

import com.IPizzichini.Portfolio.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    
    //traer lista de personas
    public List<Persona> getPersona();
    
    //guardar obj de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar obj por id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);
}
