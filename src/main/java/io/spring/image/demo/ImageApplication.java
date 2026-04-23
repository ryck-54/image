package io.spring.image.demo;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;
import io.spring.image.demo.infra.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ImageApplication {
	//@Bean
	//public CommandLineRunner commandLineRunner(@Autowired ImageRepository repository){
	//	return args -> {
	//		Image image = Image
	//				.builder()
	//				.extension(ImageExtension.JPEG)
	//				.name("myimage")
	//				.tags("teste")
	//				.size(1000L)
	//				.build();
	//		repository.save(image);

	//	};
	}



