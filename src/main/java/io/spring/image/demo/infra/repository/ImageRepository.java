package io.spring.image.demo.infra.repository;

import io.spring.image.demo.domain.entity.Image;

public interface ImageRepository {
    void save(Image image);
}
