package application;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.service.ImageService;
import io.spring.image.demo.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor

public class ImageServiceimpl implements ImageService {

    private final ImageRepository repository;

    @Override
    @Transactional
    public Image save(Image image){
        return repository.save(image);
    }


}
