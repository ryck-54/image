package io.spring.image.demo.infra.repository.spec;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;

public class ImageSpecs {

    private ImageSpecs(){} // não quero que seja instanciado esta classe, teremores apenas métodos statics

    public static Specification<Image> extensionEquals (ImageExtension extension){
        return (root, q, cb) -> cb.equal(root.get("extension"), extension);
    }

    public static Specification<Image> nameLike (String name){
        return (root, q, cb)-> cb.like(cb.upper(root.get("name")),"%"+name.toUpperCase()+"%");
    }

    public static Specification<Image> tagsLike (String tags){
        return (root, q, cb)-> cb.like(cb.upper(root.get("tags")),"%"+tags.toUpperCase()+"%");
    }
}
