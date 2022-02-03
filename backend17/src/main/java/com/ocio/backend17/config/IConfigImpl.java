package com.ocio.backend17.config;


public class IConfigImpl implements IConfig{
    private String nombre;

    public IConfigImpl(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String getName() {
        return nombre;
    }
}
