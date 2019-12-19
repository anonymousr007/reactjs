package edu.miu.pgserver.result;

import io.swagger.models.auth.In;

import java.util.List;

public class RequestModel {
    private String zip;
    private String year;
    private String predominant;
    private Integer page;
    private Float distance;
    private Integer per_page;
    public RequestModel() {
        per_page = 100;
        distance = 100.0f;
        page = 0;
    }

    public RequestModel(String zip, String year, String predominant) {
        this.zip = zip;
        this.year = year;
        this.predominant = predominant;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getPredominant() {
        return predominant;
    }

    public void setPredominant(String predominant) {
        this.predominant = predominant;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Float getDistance() {
        return distance;
    }

    public void setDistance(Float distance) {
        this.distance = distance;
    }

    public Integer getPer_page() {
        return per_page;
    }

    public void setPer_page(Integer per_page) {
        this.per_page = per_page;
    }
}
