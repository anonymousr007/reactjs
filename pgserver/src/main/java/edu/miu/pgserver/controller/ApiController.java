package edu.miu.pgserver.controller;

import edu.miu.pgserver.result.RequestModel;
import edu.miu.pgserver.result.Result;
import edu.miu.pgserver.result.School;
import edu.miu.pgserver.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ApiController {
    @Autowired
    private RequestService requestService;

    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return new ResponseEntity<String>("test succeed", HttpStatus.CREATED);
    }

    @PostMapping("/search")
    public ResponseEntity<Result> search(@RequestBody RequestModel requestModel){
       return requestService.search(requestModel);
    }

}
