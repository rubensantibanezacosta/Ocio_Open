package com.ocio.backend17.services;

import com.ocio.backend17.dao.ZonesDao;
import com.ocio.backend17.entities.Zones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZonesImpl implements IZones {
    @Autowired
    ZonesDao zonesDao;

    @Override
    public List<Zones> getAll() {

        return (List<Zones>) zonesDao.findAll();
    }
}
