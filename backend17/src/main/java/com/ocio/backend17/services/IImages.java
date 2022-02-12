package com.ocio.backend17.services;

import com.ocio.backend17.entities.Images;

import java.util.List;
import java.util.Optional;

public interface IImages {
    Optional<Images> getById(Double id);
    List<Images> getAll();
    int deleteById(Double id);
    Images updloadImage(Images image);

}
