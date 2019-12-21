package edu.miu.pgserver.service;

import edu.miu.pgserver.result.RequestModel;
import edu.miu.pgserver.result.Result;
import edu.miu.pgserver.result.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class RequestService {
    @Autowired
    private RestTemplate restTemplate;

    @Value("${requestPatern}")
    private String requestPatern;
    private Result finalResult;
    private HashMap<String,String> requestMap = new HashMap<>();

    private List<School> schools = new ArrayList<>();

    public ResponseEntity<Result> search(RequestModel requestModel){
        schools.clear();
        finalResult = null;
        requestMap.put("name","school.name");
        requestMap.put("size",requestModel.getYear()+".student.size");

        doRequest(requestModel);
        Collections.sort(schools);
        if (finalResult.getErrors()!=null){
            return new ResponseEntity<Result>(finalResult,HttpStatus.BAD_REQUEST);
        }
        finalResult.setResults(null);
        finalResult.setSchools(schools);
        return new ResponseEntity<Result>(finalResult,HttpStatus.CREATED);
    }

    private void doRequest(RequestModel requestModel){
        String url = String.format(requestPatern,requestModel.getPredominant(),requestModel.getYear(),requestModel.getPer_page(),requestModel.getZip(),requestModel.getDistance(),requestModel.getPage());
        ResponseEntity<Result> result = null;
        try {
            result = restTemplate.getForEntity(url,Result.class);
            finalResult = result.getBody();
            handle(result.getBody());
        }catch (Exception e){
            e.printStackTrace();
        }

        if (result.getStatusCode()==HttpStatus.OK){
            if (result.getBody().getMetadata().getPer_page()>result.getBody().getResults().size()){
                return;
            }else {
                requestModel.setPage(requestModel.getPage()+1);
                doRequest(requestModel);
            }
        }
    }


    private void handle(Result result){
        for (Object o : result.getResults()){
            LinkedHashMap<String,Object> map = (LinkedHashMap<String, Object>) o;
            String name = (String) map.get(requestMap.get("name"));
            Integer size = (Integer) map.get(requestMap.get("size"));

            School school = new School(name,size);
            schools.add(school);
        }
    }
}
