package io.spring.image.demo.domain.service;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Image save (Image image);

    Optional<Image> getById(String id);
    List<Image> search(ImageExtension extension, String query);
}
