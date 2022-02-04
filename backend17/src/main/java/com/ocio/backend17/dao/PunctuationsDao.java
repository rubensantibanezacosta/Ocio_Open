package com.ocio.backend17.dao;

import com.ocio.backend17.entities.Punctuations;
import com.ocio.backend17.entities.PunctuationsPK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PunctuationsDao extends CrudRepository<Punctuations, PunctuationsPK> {
}
