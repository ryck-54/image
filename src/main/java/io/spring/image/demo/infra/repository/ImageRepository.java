package io.spring.image.demo.infra.repository;

import io.spring.image.demo.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ImageRepository extends JpaRepository <Image, String> {

}
