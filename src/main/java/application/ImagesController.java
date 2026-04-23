package application;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;
import io.spring.image.demo.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/upload")
@Slf4j
@RequiredArgsConstructor
public class ImagesController {
    private final ImageService service;
    //*
    // {"name": "", "size":100} //application/json
    //*

    // mult-part/formdata
    //*

    @PostMapping
    public ResponseEntity uploadImage(@RequestParam("file")  MultipartFile file,
                                      @RequestParam("name")String name,
                                      @RequestParam("tags") List<String> tags
    ) throws IOException {
        log.info("Recebendo tentativa de upload do arquivo: {}", file.getOriginalFilename());
        log.info("Content Type:{} ", file.getContentType());
        log.info("Media Type:{} ", MediaType.valueOf(file.getContentType()));
//            try {
//                // Lógica de processamento...
//                if (file.isEmpty()) {
//                    log.warn("O arquivo enviado estava vazio!");
//                    return ResponseEntity.badRequest().body("Arquivo vazio");
//                }
//
//                log.info("Tamanho do arquivo recebido: {} bytes", file.getSize());
//                log.info("Nome definido para a imagem: {}", name);
//                log.info("Tags: {}", tags);
//
//
//                return ResponseEntity.ok("Imagem enviada com Sucesso!!!!");
//            } catch (Exception e) {
//                // Sempre passe a exceção 'e' como último argumento para imprimir o StackTrace
//                log.error("Falha crítica ao processar imagem: ", e);
//                return ResponseEntity.internalServerError().body("Erro no servidor");
//            }

        Image image = Image.builder()
                .name(name)
                .tags(String.join(",", tags)) // ["tag1, "tag2"] -> "tag1, tag2"
                .size(file.getSize())
                .extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType()))) //como vamos fazer isso? vamos imprimir no console através de nosso log.
                .file(file.getBytes()) //exception de trohws
                .build();
        service.save(image);
        return ResponseEntity.ok().build();
    }
}