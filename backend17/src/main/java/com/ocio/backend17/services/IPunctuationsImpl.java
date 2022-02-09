package com.ocio.backend17.services;

import com.ocio.backend17.entities.Punctuations;
import com.ocio.backend17.entities.PunctuationsPK;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IPunctuationsImpl implements IPunctuations {

    @Override
    public Punctuations createOrUpdate(Punctuations punctuation) {
        return null;
    }

    @Override
    public List<Punctuations> findAll() {
        return null;
    }

    @Override
    public List<Punctuations> findByEvent(Double event_id) {
        return null;
    }

    @Override
    public List<Punctuations> findByOrganizer(String email) {
        return null;
    }

    @Override
    public Optional<Punctuations> findByPK(PunctuationsPK punctuationsPK) {
        return null;
    }

    @Override
    public int deleteByPk(PunctuationsPK punctuationsPK) {
        return 0;
    }
}
