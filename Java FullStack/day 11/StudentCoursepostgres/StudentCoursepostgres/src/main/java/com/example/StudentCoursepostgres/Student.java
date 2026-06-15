package com.example.StudentCoursepostgres;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue
    private long stu_id;
    private String name;
    private long c_id;
    public Student(){}
    public Student(String name,long c_id){
        this.name=name;
        this.c_id=c_id;
    }


    public String getName(){
        return name;
    }
    public Long getC_id(){
        return c_id;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setC_id(long c_id){
        this.c_id=c_id;
    }


}
