package edu.miu.pgserver.result;

import java.io.Serializable;
import java.util.Objects;

public class School implements Comparable<School>, Serializable {
    private String name;
    private Integer size;

    public School() {
    }

    public School(String name, Integer size) {
        this.name = name;
        this.size = size;
    }

    @Override
    public int compareTo(School o) {
        return -1*size.compareTo(o.size);
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        School school = (School) o;
        return Objects.equals(name, school.name) &&
                Objects.equals(size, school.size);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, size);
    }
}
