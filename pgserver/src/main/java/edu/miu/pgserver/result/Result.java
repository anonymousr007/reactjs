package edu.miu.pgserver.result;

import java.util.ArrayList;
import java.util.List;

public class Result {
    private Metadata metadata;
    private List<Error> errors;
    private List<Object> results;
    private List<School> schools;

    public void setErrors(List<Error> errors) {
        this.errors = errors;
    }

    public List<School> getSchools() {
        return schools;
    }

    public void setSchools(List<School> schools) {
        this.schools = schools;
    }

    public Result() {
    }

    public List<Error> getErrors() {
        return errors;
    }

    public List<Object> getResults() {
        return results;
    }

    public void setResults(List<Object> results) {
        this.results = results;
    }

    public Metadata getMetadata() {
        return metadata;
    }

    public void setMetadata(Metadata metadata) {
        this.metadata = metadata;
    }
}
