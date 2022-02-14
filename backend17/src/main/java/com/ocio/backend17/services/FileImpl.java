package com.ocio.backend17.services;

import com.ocio.backend17.entities.Images;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FileImpl implements IFile {
    @Autowired
    ImageImpl image;
    private Logger logger = LoggerFactory.getLogger(FileImpl.class);
    private final Path root = Paths.get("assets/gallery");

    @Override
    public void init() {
        try {
            Files.createDirectory(root);
        } catch (IOException e) {
            logger.error(e.getMessage());
        }

    }

    @Transactional
    @Override
    public Images saveImageFile(MultipartFile file) {
        try {
            String extension = file.getOriginalFilename().split(".")[(file.getOriginalFilename().split(".").length) - 1];
            if (extension.equals("jpg") || extension.equals("jpeg") || extension.equals("png") || extension.equals("png")) {
                Images imageCreated = new Images();
                String setName = System.currentTimeMillis() + "." + extension;
                imageCreated.setUrl(setName);

                Files.copy(file.getInputStream(), this.root.resolve(setName));
                return image.updloadImage(imageCreated);
            } else {
                logger.error("Extension not allowed!");
                throw new RuntimeException("Extension not allowed!");
            }

        } catch (IOException e) {
            logger.error(e.getMessage());
            throw new RuntimeException("Error uploading image!");

        }

    }

    @Override
    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            Resource resource = (Resource) new UrlResource(file.toUri());
            return resource;
        } catch (MalformedURLException e) {
            logger.error("Error reading image" + e.getMessage());
            throw new RuntimeException("Error reading image!" + e.getMessage());
        }


    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    @Override
    public Stream<Path> loadAll() {
        return null;
    }

    @Override
    public String deleteFile(String filename) {
        try {
            Boolean delete = Files.deleteIfExists(this.root.resolve(filename));
            return "Image deleted";
        } catch (IOException e) {
            logger.error(e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }
}
