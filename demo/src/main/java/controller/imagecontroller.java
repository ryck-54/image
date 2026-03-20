package controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
public class imagecontroller {
    //*
    // {"name": "", "size":100} //application/json
    //*

    // mult-part/formdata
    //*

    @PostMapping
    public ResponseEntity uploadImage(@RequestParam("file")  MultipartFile file,
                                      @RequestParam("name")String name,
                                      @RequestParam("tags") List<String> tags
    ) {
        log.info("Recebendo tentativa de upload do arquivo: {}", file.getOriginalFilename());

        try {
            // Lógica de processamento...
            if (file.isEmpty()) {
                log.warn("O arquivo enviado estava vazio!");
                return ResponseEntity.badRequest().body("Arquivo vazio");
            }

            log.info("Tamanho do arquivo recebido: {} bytes", file.getSize());
            log.info("Nome definido para a imagem: {}", name);
            log.info("Tags: {}", tags);


            return ResponseEntity.ok("Imagem enviada com Sucesso!!!!");
        } catch (Exception e) {
            // Sempre passe a exceção 'e' como último argumento para imprimir o StackTrace
            log.error("Falha crítica ao processar imagem: ", e);
            return ResponseEntity.internalServerError().body("Erro no servidor");
        }


    }
}
