
        package io.spring.image.demo.infra.repository;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {
    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query) {
        Specification<Image> spec = where(conjunction());
        if (extension != null) {

            spec = spec.and(ExtensionEquals(extension));
            //and in query
        }
        if (StringUtils.hasText(query)) {
            spec = spec.and(anyOf(nameLike(query),TagsLike(query)));

        }
        return findAll(spec);
    }
}
