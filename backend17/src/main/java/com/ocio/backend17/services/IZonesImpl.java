package com.ocio.backend17.services;

import com.ocio.backend17.config.IConfig;
import com.ocio.backend17.dao.ZonesDao;
import com.ocio.backend17.models.Zones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IZonesImpl implements IZones{
    @Autowired
    ZonesDao zonesDao;
    @Autowired
    IConfig iConfig;
    @Override
    public List<Zones> getAll() {

        return (List<Zones>)

                zonesDao.findAll();
    }
}
