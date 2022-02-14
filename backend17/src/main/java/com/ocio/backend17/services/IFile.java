package com.ocio.backend17.services;

import com.ocio.backend17.entities.Images;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.nio.file.Path;
import java.util.stream.Stream;

@Service
public interface IFile {
    public void init() throws IOException;

    public Images saveImageFile(MultipartFile file);

    public Resource load(String filename);

    public void deleteAll();

    public Stream<Path> loadAll();

    public String deleteFile(String filename);
}
